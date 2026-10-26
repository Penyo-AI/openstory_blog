const fs = require("fs");
const http = require("http");
const path = require("path");

const port = Number(process.env.PORT || 3001);
const distDir = path.join(__dirname, ".vitepress", "dist");

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".gif", "image/gif"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".webp", "image/webp"],
  [".woff2", "font/woff2"],
  [".xml", "application/xml; charset=utf-8"],
]);

function resolveFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0] || "/");

  // Unified sitemap for the whole /page/* site (generated into dist/sitemap.xml).
  if (cleanPath === "/page/sitemap.xml") {
    return path.join(distDir, "sitemap.xml");
  }

  if (cleanPath === "/page/seedance-2-5" || cleanPath === "/page/seedance-2-5/") {
    return path.join(distDir, "seedance-2-5.html");
  }

  if (cleanPath === "/blog" || cleanPath === "/blog/") {
    return path.join(distDir, "index.html");
  }

  if (cleanPath === "/page/news" || cleanPath === "/page/news/") {
    return path.join(distDir, "news.html");
  }

  if (cleanPath.startsWith("/page/news/")) {
    const relativePath = cleanPath.slice("/page/news/".length);
    const directPath = path.join(distDir, "news", relativePath);

    if (path.extname(directPath)) {
      return directPath;
    }

    return path.join(distDir, "news", `${relativePath}.html`);
  }

  if (cleanPath.startsWith("/blog/")) {
    const relativePath = cleanPath.slice("/blog/".length);
    const directPath = path.join(distDir, relativePath);
    return path.extname(directPath) ? directPath : `${directPath}.html`;
  }

  if (cleanPath.startsWith("/page/blog/")) {
    const relativePath = cleanPath.slice("/page/blog/".length);
    const directPath = path.join(distDir, relativePath);

    if (path.extname(directPath)) {
      return directPath;
    }

    return path.join(distDir, `${relativePath}.html`);
  }

  return null;
}

function redirectTarget(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0] || "/");
  const query = urlPath.includes("?") ? `?${urlPath.split("?").slice(1).join("?")}` : "";

  if (cleanPath === "/page/blog/news" || cleanPath === "/page/blog/news/") {
    return `/page/news${query}`;
  }

  if (cleanPath.startsWith("/page/blog/news/")) {
    return `/page/news/${cleanPath.slice("/page/blog/news/".length)}${query}`;
  }

  if (/^\/page\/blog\/?$/.test(cleanPath) || cleanPath === "/blog/") {
    return `/blog${query}`;
  }

  const legacyPost = cleanPath.match(/^\/page\/blog\/posts\/([^/]+?)\/?$/);
  if (legacyPost) return `/blog/${legacyPost[1].replace(/\.html$/, "")}${query}`;
  const blogPost = cleanPath.match(/^\/blog\/([^/]+?)(?:\.html|\/)$/);
  if (blogPost) return `/blog/${blogPost[1]}${query}`;

  return null;
}

const server = http.createServer((request, response) => {
  const requestUrl = request.url || "/";
  try { decodeURIComponent(requestUrl); } catch {
    response.writeHead(400); response.end("Bad request"); return;
  }
  const redirect = redirectTarget(requestUrl);

  if (redirect) {
    response.writeHead(301, { Location: redirect });
    response.end();
    return;
  }

  const filePath = resolveFile(requestUrl);
  const safeRoot = `${distDir}${path.sep}`;

  if (!filePath || !filePath.startsWith(safeRoot) || !fs.existsSync(filePath)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const ext = path.extname(filePath);
  response.writeHead(200, {
    "Cache-Control": [".html", ".xml", ".txt"].includes(ext) ? "no-cache" : "public, max-age=31536000, immutable",
    "Content-Type": contentTypes.get(ext) || "application/octet-stream",
  });
  fs.createReadStream(filePath).pipe(response);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Plot Party page server listening on ${port}`);
});
