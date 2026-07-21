#!/usr/bin/env node

const crypto = require("node:crypto");
const { execFile } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { promisify } = require("node:util");

const execFileAsync = promisify(execFile);

const CONTENT_TYPE_EXT_MAP = {
  "audio/mpeg": "mp3",
  "audio/mp4": "m4a",
  "audio/x-m4a": "m4a",
  "audio/aac": "aac",
  "audio/ogg": "ogg",
  "audio/x-wav": "wav",
  "video/quicktime": "mov",
  "video/x-msvideo": "avi",
  "video/x-matroska": "mkv",
};

const DEFAULT_BUCKET_NAME = "plotparty-storage";
const DEFAULT_PUBLIC_BUCKET_NAME = "plotparty-storage-public";
const DEFAULT_CREDENTIAL_FILE_NAME = "vertex-sa.json";

function usage() {
  console.log(`Usage:
  node skills/upload-google-storage/scripts/upload_google_storage.cjs <source> [options]

Options:
  --content-type <mime>   MIME type, e.g. image/png
  --file-name <name>      Filename used for extension inference
  --object-path <path>    Exact GCS object path
  --user-id <id>          Optional compatibility prefix
  --private               Upload to GCS_BUCKET_NAME and return object path
  --transport <mode>      curl or fetch; default: curl
  --dry-run               Print generated object path without uploading
  -h, --help              Show this help
`);
}

function parseArgs(argv) {
  const args = { private: false, dryRun: false, transport: "curl" };
  const positional = [];

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--private") args.private = true;
    else if (arg === "--dry-run") args.dryRun = true;
    else if (arg === "-h" || arg === "--help") args.help = true;
    else if (arg === "--content-type") args.contentType = argv[++i];
    else if (arg === "--file-name") args.fileName = argv[++i];
    else if (arg === "--object-path") args.objectPath = argv[++i];
    else if (arg === "--user-id") args.userId = argv[++i];
    else if (arg === "--transport") args.transport = argv[++i];
    else if (arg.startsWith("--")) throw new Error(`Unknown option: ${arg}`);
    else positional.push(arg);
  }

  args.source = positional[0];
  if (!["curl", "fetch"].includes(args.transport)) {
    throw new Error("--transport must be curl or fetch");
  }
  return args;
}

function base64url(value) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function guessContentType(fileName) {
  const ext = path.extname(fileName || "").toLowerCase();
  const map = {
    ".aac": "audio/aac",
    ".avi": "video/x-msvideo",
    ".gif": "image/gif",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".m4a": "audio/mp4",
    ".mkv": "video/x-matroska",
    ".mov": "video/quicktime",
    ".mp3": "audio/mpeg",
    ".mp4": "video/mp4",
    ".ogg": "audio/ogg",
    ".png": "image/png",
    ".webp": "image/webp",
    ".wav": "audio/x-wav",
  };
  return map[ext] || "application/octet-stream";
}

function getBlobPath(contentType, fileName, userId) {
  const [topLevel, subtype = "octet-stream"] = contentType.split("/");
  let ext = CONTENT_TYPE_EXT_MAP[contentType] || subtype;

  if (!CONTENT_TYPE_EXT_MAP[contentType] && fileName && fileName.includes(".")) {
    ext = fileName.split(".").pop();
  }

  const generated = `${topLevel}/${crypto.randomUUID().replace(/-/g, "")}.${ext}`;
  return userId ? `${userId}/${generated}` : generated;
}

function findCredentialsFile() {
  const candidates = [
    process.env.GOOGLE_APPLICATION_CREDENTIALS,
    path.join(process.cwd(), DEFAULT_CREDENTIAL_FILE_NAME),
    path.resolve(__dirname, "..", "..", "..", DEFAULT_CREDENTIAL_FILE_NAME),
  ].filter(Boolean);

  return candidates.find((candidate) => fs.existsSync(candidate));
}

function loadServiceAccount() {
  const rawJson =
    process.env.GOOGLE_SERVICE_ACCOUNT_JSON ||
    process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON ||
    process.env.GCS_SERVICE_ACCOUNT_JSON;

  if (rawJson) return JSON.parse(rawJson);

  const credentialsFile = findCredentialsFile();
  if (!credentialsFile) {
    throw new Error("Missing credentials: put vertex-sa.json in the blog root or set GOOGLE_APPLICATION_CREDENTIALS.");
  }
  return JSON.parse(fs.readFileSync(credentialsFile, "utf8"));
}

async function getAccessToken(serviceAccount, transport) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: serviceAccount.client_email,
    scope: "https://www.googleapis.com/auth/devstorage.read_write",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const unsigned = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(claim))}`;
  const signature = crypto
    .createSign("RSA-SHA256")
    .update(unsigned)
    .sign(serviceAccount.private_key);
  const assertion = `${unsigned}.${base64url(signature)}`;

  if (transport === "curl") {
    const result = await curlRequest([
      "-X",
      "POST",
      "-H",
      "content-type: application/x-www-form-urlencoded",
      "--data-urlencode",
      "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer",
      "--data-urlencode",
      `assertion=${assertion}`,
      "https://oauth2.googleapis.com/token",
    ], "Token request");
    const data = JSON.parse(result);
    return data.access_token;
  }

  let response;
  try {
    response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion,
      }),
    });
  } catch (error) {
    throw new Error(`Token request failed before response: ${formatError(error)}`);
  }

  if (!response.ok) {
    throw new Error(`Token request failed: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function readSource(source) {
  if (source.startsWith("http://") || source.startsWith("https://")) {
    let response;
    try {
      response = await fetch(source);
    } catch (error) {
      throw new Error(`Source download failed before response: ${formatError(error)}`);
    }
    if (!response.ok) {
      throw new Error(`Source download failed: ${response.status} ${await response.text()}`);
    }
    return Buffer.from(await response.arrayBuffer());
  }
  return fs.readFileSync(source);
}

async function uploadToGoogleStorage(options) {
  const fileName = options.fileName || path.basename(options.source);
  const contentType = options.contentType || guessContentType(fileName);
  const objectPath = options.objectPath || getBlobPath(contentType, fileName, options.userId);
  const isPublic = !options.private;
  const bucketName = isPublic
    ? process.env.GCS_PUBLIC_BUCKET_NAME || DEFAULT_PUBLIC_BUCKET_NAME
    : process.env.GCS_BUCKET_NAME || DEFAULT_BUCKET_NAME;

  if (options.dryRun) return objectPath;

  const serviceAccount = loadServiceAccount();
  const token = await getAccessToken(serviceAccount, options.transport);
  const url = new URL(`https://storage.googleapis.com/upload/storage/v1/b/${bucketName}/o`);
  url.searchParams.set("uploadType", "media");
  url.searchParams.set("name", objectPath);

  if (options.transport === "curl") {
    await uploadWithCurl(options.source, url.toString(), token, contentType);
    return isPublic ? `https://storage.googleapis.com/${bucketName}/${objectPath}` : objectPath;
  }

  const body = await readSource(options.source);
  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": contentType,
        "content-length": String(body.length),
      },
      body,
    });
  } catch (error) {
    throw new Error(`Upload request failed before response: ${formatError(error)}`);
  }

  if (!response.ok) {
    throw new Error(`Upload failed: ${response.status} ${await response.text()}`);
  }

  return isPublic ? `https://storage.googleapis.com/${bucketName}/${objectPath}` : objectPath;
}

async function curlRequest(args, label) {
  try {
    const { stdout } = await execFileAsync("curl", ["--fail-with-body", "-sS", "--connect-timeout", "30", ...args], {
      maxBuffer: 20 * 1024 * 1024,
    });
    return stdout;
  } catch (error) {
    const details = [
      error.message,
      error.stderr && `stderr=${error.stderr.trim()}`,
      error.stdout && `stdout=${error.stdout.trim()}`,
    ].filter(Boolean);
    throw new Error(`${label} failed: ${details.join("; ")}`);
  }
}

async function uploadWithCurl(source, url, token, contentType) {
  if (source.startsWith("http://") || source.startsWith("https://")) {
    const response = await fetch(source);
    if (!response.ok) {
      throw new Error(`Source download failed: ${response.status} ${await response.text()}`);
    }
    const tempFile = path.join(os.tmpdir(), `gcs-upload-${crypto.randomUUID()}`);
    fs.writeFileSync(tempFile, Buffer.from(await response.arrayBuffer()));
    try {
      await uploadLocalFileWithCurl(tempFile, url, token, contentType);
    } finally {
      fs.rmSync(tempFile, { force: true });
    }
    return;
  }

  await uploadLocalFileWithCurl(source, url, token, contentType);
}

async function uploadLocalFileWithCurl(filePath, url, token, contentType) {
  await curlRequest([
    "-X",
    "POST",
    "-H",
    `authorization: Bearer ${token}`,
    "-H",
    `content-type: ${contentType}`,
    "--data-binary",
    `@${filePath}`,
    url,
  ], "Upload request");
}

function formatError(error) {
  const parts = [error && error.message ? error.message : String(error)];
  if (error && error.cause) {
    const cause = error.cause;
    const causeParts = [
      cause.code,
      cause.errno,
      cause.syscall,
      cause.hostname,
      cause.message,
    ].filter(Boolean);
    if (causeParts.length) parts.push(`cause=${causeParts.join(" ")}`);
  }
  return parts.join("; ");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    return;
  }
  if (!args.source) {
    usage();
    process.exitCode = 1;
    return;
  }

  console.log(await uploadToGoogleStorage(args));
}

main().catch((error) => {
  console.error(formatError(error));
  process.exitCode = 1;
});
