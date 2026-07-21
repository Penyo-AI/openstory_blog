---
name: upload-google-storage
description: Upload files, bytes, URLs, or file-like inputs to Google Cloud Storage using the local project pattern from openstory_backend app_v2/utils/storage.py. Use when adding or updating Python code that uploads assets to GCS buckets, generates content-type object paths without requiring user IDs, defaults uploads to the public bucket, supports explicit private bucket selection, or needs Google service account credentials supplied through vertex-sa.json or environment variables.
---

# Upload Google Storage

## Overview

Use this skill when implementing Google Cloud Storage uploads for PlotParty/OpenStory services. Follow the existing `GoogleStorage` pattern for the storage client and MIME handling, but do not require user IDs. Default to the public bucket, build object paths as `media-type/uuid.ext`, upload content with the correct MIME type, and return a public URL unless private upload is explicitly requested.

## Environment

Use the blog project root `vertex-sa.json` by default for local testing. The backend reference uses `storage.Client()` directly, so the important part is setting `GOOGLE_APPLICATION_CREDENTIALS` before the client is created.

Credential resolution order:

- existing `GOOGLE_APPLICATION_CREDENTIALS`;
- `vertex-sa.json` in the current working directory;
- `vertex-sa.json` in the blog repository root;
- `GOOGLE_SERVICE_ACCOUNT_JSON`: raw service account JSON.
- `GOOGLE_APPLICATION_CREDENTIALS_JSON`: raw service account JSON alternative.
- `GCS_SERVICE_ACCOUNT_JSON`: raw service account JSON alternative.

Bucket variables:

- `GCS_PUBLIC_BUCKET_NAME`: public bucket; default to `plotparty-storage-public` only when matching the existing project. Use this by default.
- `GCS_BUCKET_NAME`: private bucket; default to `plotparty-storage` only when matching the existing project. Use only when private upload is explicitly requested.

When a `vertex-sa.json` file is found, set `GOOGLE_APPLICATION_CREDENTIALS` to its absolute path before constructing `storage.Client()`. When raw JSON credentials are provided, write them to a temporary file for the duration of the process and set `GOOGLE_APPLICATION_CREDENTIALS` to that file.

## Upload Pattern

Prefer `scripts/upload_google_storage.cjs` in the blog project because it only requires Node, curl, and the local `vertex-sa.json`. Use `scripts/upload_google_storage.py` only inside Python services that already have Python and `google-cloud-storage` installed.

The Node script includes:

- credential loading from environment JSON or credential file path;
- automatic local fallback to `vertex-sa.json`;
- content-type to extension mapping for common audio/video MIME types;
- object path generation compatible with the backend reference;
- uploads from local files and HTTP(S) URLs;
- curl transport by default for better proxy support, with `--transport fetch` as a fallback;
- public-bucket uploads by default, with an explicit private option when needed.

When integrating into app code, keep async callers non-blocking by wrapping blocking GCS and HTTP calls with `asyncio.to_thread`, matching the backend reference.

## Node CLI

Dry-run without credentials:

```bash
node skills/upload-google-storage/scripts/upload_google_storage.cjs example.png --content-type image/png --dry-run
```

Upload to the public bucket with `vertex-sa.json`:

```bash
node skills/upload-google-storage/scripts/upload_google_storage.cjs ./example.png --content-type image/png
```

When a local proxy is required, export proxy variables before running the command:

```bash
export HTTPS_PROXY=http://127.0.0.1:7890
export HTTP_PROXY=http://127.0.0.1:7890
node skills/upload-google-storage/scripts/upload_google_storage.cjs ./example.png --content-type image/png
```

Upload to the private bucket:

```bash
node skills/upload-google-storage/scripts/upload_google_storage.cjs ./example.png --content-type image/png --private
```

## Path Rules

Build new object paths with:

```text
{top_level_content_type}/{uuid_hex}.{extension}
```

If a caller explicitly passes a `user_id` for compatibility with backend-style paths, use `{user_id}/{top_level_content_type}/{uuid_hex}.{extension}`. New blog uploads should omit `user_id`.

Derive `top_level_content_type` and the default extension from the MIME type. Prefer the original filename extension when the MIME type does not have a project-specific override.

Project-specific MIME extension overrides:

```python
{
    "audio/mpeg": "mp3",
    "audio/mp4": "m4a",
    "audio/x-m4a": "m4a",
    "audio/aac": "aac",
    "audio/ogg": "ogg",
    "audio/x-wav": "wav",
    "video/quicktime": "mov",
    "video/x-msvideo": "avi",
    "video/x-matroska": "mkv",
}
```

## Public URLs

Default to public uploads.

For public uploads, return:

```text
https://storage.googleapis.com/{public_bucket_name}/{path}
```

For private uploads, return the object path.

Only call `blob.make_public()` if the target bucket does not already use bucket-level public access. Prefer bucket policy/IAM configuration over per-object ACLs.

## Validation

Before finishing changes that use this skill:

- verify `google-cloud-storage` is declared in the app dependencies;
- verify no service account JSON or secrets are committed;
- run a dry path-generation check without credentials when possible;
- run a real upload only when the user provides credentials or the environment already has them.
