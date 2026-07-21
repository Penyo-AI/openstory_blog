"""Google Cloud Storage upload helper for PlotParty/OpenStory-style assets.

Credentials default to vertex-sa.json in the blog repo. They can also be
provided by GOOGLE_APPLICATION_CREDENTIALS or raw JSON in GOOGLE_SERVICE_ACCOUNT_JSON,
GOOGLE_APPLICATION_CREDENTIALS_JSON, or GCS_SERVICE_ACCOUNT_JSON.
"""

from __future__ import annotations

import argparse
import json
import mimetypes
import os
import tempfile
import uuid
from pathlib import Path
from typing import BinaryIO, TYPE_CHECKING
from urllib.request import urlopen

if TYPE_CHECKING:
    from google.cloud import storage


CONTENT_TYPE_EXT_MAP = {
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

DEFAULT_BUCKET_NAME = "plotparty-storage"
DEFAULT_PUBLIC_BUCKET_NAME = "plotparty-storage-public"
DEFAULT_CREDENTIAL_FILE_NAME = "vertex-sa.json"


def find_default_credentials_file() -> Path | None:
    candidates = [
        Path.cwd() / DEFAULT_CREDENTIAL_FILE_NAME,
        Path(__file__).resolve().parents[3] / DEFAULT_CREDENTIAL_FILE_NAME,
    ]
    for candidate in candidates:
        if candidate.exists():
            return candidate
    return None


def configure_google_credentials_from_env() -> None:
    """Configure credentials before creating a Google storage client."""
    if os.getenv("GOOGLE_APPLICATION_CREDENTIALS"):
        return

    default_credentials = find_default_credentials_file()
    if default_credentials:
        os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(default_credentials)
        return

    for env_name in (
        "GOOGLE_SERVICE_ACCOUNT_JSON",
        "GOOGLE_APPLICATION_CREDENTIALS_JSON",
        "GCS_SERVICE_ACCOUNT_JSON",
    ):
        raw_json = os.getenv(env_name)
        if not raw_json:
            continue

        # Validate early so bad env values fail with a useful message.
        json.loads(raw_json)
        credentials_file = tempfile.NamedTemporaryFile(
            mode="w",
            encoding="utf-8",
            suffix=".json",
            delete=False,
        )
        credentials_file.write(raw_json)
        credentials_file.close()
        os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = credentials_file.name
        return


def get_storage_client() -> "storage.Client":
    from google.cloud import storage

    configure_google_credentials_from_env()
    return storage.Client()


def infer_content_type(source: str | bytes | BinaryIO, file_name: str | None) -> str:
    candidate = file_name if file_name else source if isinstance(source, str) else None
    guessed, _ = mimetypes.guess_type(candidate or "")
    return guessed or "application/octet-stream"


def get_blob_path(
    content_type: str,
    file_name: str | None = None,
    user_id: str | None = None,
) -> str:
    top_level, ext = content_type.split("/", 1)

    if content_type in CONTENT_TYPE_EXT_MAP:
        ext = CONTENT_TYPE_EXT_MAP[content_type]
    elif file_name and "." in file_name:
        ext = file_name.rsplit(".", 1)[-1]

    file_path = f"{top_level}/{uuid.uuid4().hex}.{ext}"
    if user_id:
        return f"{user_id}/{file_path}"
    return file_path


def upload_to_google_storage(
    source: str | bytes | BinaryIO,
    content_type: str | None = None,
    file_name: str | None = None,
    is_public: bool = True,
    object_path: str | None = None,
    user_id: str | None = None,
) -> str:
    """Upload source and return an object path or public URL."""
    resolved_content_type = content_type or infer_content_type(source, file_name)
    bucket_name = (
        os.getenv("GCS_PUBLIC_BUCKET_NAME", DEFAULT_PUBLIC_BUCKET_NAME)
        if is_public
        else os.getenv("GCS_BUCKET_NAME", DEFAULT_BUCKET_NAME)
    )
    path = object_path or get_blob_path(resolved_content_type, file_name, user_id)

    client = get_storage_client()
    blob = client.bucket(bucket_name).blob(path)

    if isinstance(source, bytes):
        blob.upload_from_string(source, content_type=resolved_content_type, timeout=120)
    elif isinstance(source, str) and source.startswith(("http://", "https://")):
        with urlopen(source, timeout=120) as response:
            blob.upload_from_string(
                response.read(),
                content_type=resolved_content_type,
                timeout=120,
            )
    elif isinstance(source, str):
        blob.upload_from_filename(source, content_type=resolved_content_type, timeout=120)
    elif hasattr(source, "read"):
        if hasattr(source, "seek"):
            source.seek(0)
        blob.upload_from_file(source, content_type=resolved_content_type, timeout=120)
    else:
        raise TypeError(f"Unsupported upload source: {type(source)!r}")

    if is_public:
        return f"https://storage.googleapis.com/{bucket_name}/{path}"
    return path


def main() -> None:
    parser = argparse.ArgumentParser(description="Upload a file to Google Cloud Storage.")
    parser.add_argument("source", help="Local file path or HTTP(S) URL to upload.")
    parser.add_argument("--user-id")
    parser.add_argument("--content-type")
    parser.add_argument("--file-name")
    parser.add_argument("--private", action="store_true")
    parser.add_argument("--object-path")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    file_name = args.file_name or Path(args.source).name
    content_type = args.content_type or infer_content_type(args.source, file_name)
    object_path = args.object_path or get_blob_path(content_type, file_name, args.user_id)

    if args.dry_run:
        print(object_path)
        return

    result = upload_to_google_storage(
        args.source,
        content_type=content_type,
        file_name=file_name,
        is_public=not args.private,
        object_path=object_path,
        user_id=args.user_id,
    )
    print(result)


if __name__ == "__main__":
    main()
