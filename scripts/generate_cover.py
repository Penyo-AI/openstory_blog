#!/usr/bin/env python3
"""用 OpenAI gpt-image-2 生成博客封面, 上传到公共桶, 并可选回填到文章。

流程: 生图 -> 保存到本地 (默认 /tmp/blog-covers) -> 上传到
gs://plotparty-storage-public/blogs/<name>.png -> 打印公开 URL
-> (可选) 更新文章 frontmatter 的 coverImage / og:image / twitter:image
   以及 .vitepress/theme/data/posts.ts 里同 slug 的 coverImage。

依赖 (openai / google-cloud-storage) 复用后端仓库 openstory_backend 的 .venv,
用系统 python3 直接运行即可, 脚本会自动切到那个虚拟环境。

凭证:
  OPENAI_API_KEY / OPENAI_BASE_URL   取环境变量, 缺省时读 openstory_backend/.env
  GOOGLE_APPLICATION_CREDENTIALS     取环境变量, 缺省时用博客根目录 vertex-sa.json

示例:
  python3 scripts/generate_cover.py \\
      --name cover-sora-alternatives \\
      --prompt "Editorial illustration, ..." \\
      --post posts/best-sora-alternatives-2026.md

  # 用参考图 (走 images.edit), 竖版, 只生成不上传
  python3 scripts/generate_cover.py --name x --prompt "..." \\
      --ref https://.../a.png --size 1024x1536 --no-upload
"""

from __future__ import annotations

import argparse
import base64
import os
import re
import sys
from pathlib import Path

BLOG_ROOT = Path(__file__).resolve().parent.parent
BACKEND_ROOT = BLOG_ROOT.parent / "openstory_backend"
BACKEND_VENV_PYTHON = BACKEND_ROOT / ".venv" / "bin" / "python"

PUBLIC_BUCKET = os.environ.get("GCS_PUBLIC_BUCKET_NAME", "plotparty-storage-public")
DEFAULT_PREFIX = "blogs"
DEFAULT_MODEL = "gpt-image-2"
DEFAULT_SIZE = "1536x1024"  # 3:2 横版, 博客封面用
DEFAULT_QUALITY = "high"
DEFAULT_OUT_DIR = Path("/tmp/blog-covers")

CONTENT_TYPES = {"png": "image/png", "jpeg": "image/jpeg", "webp": "image/webp"}


# --------------------------------------------------------------------------- #
# 环境
# --------------------------------------------------------------------------- #
def ensure_deps() -> None:
    """缺依赖时切到后端 .venv 重新执行自己。"""
    try:
        import openai  # noqa: F401
        from google.cloud import storage  # noqa: F401
    except ImportError:
        if os.environ.get("_GENERATE_COVER_REEXEC"):
            sys.exit(
                "缺少 openai / google-cloud-storage, 且后端 .venv 也不可用。\n"
                f"请检查 {BACKEND_VENV_PYTHON} 或手动 pip install openai google-cloud-storage"
            )
        if not BACKEND_VENV_PYTHON.exists():
            sys.exit(
                f"缺少 openai / google-cloud-storage, 且未找到 {BACKEND_VENV_PYTHON}。\n"
                "请 pip install openai google-cloud-storage 或修正 BACKEND_ROOT。"
            )
        os.environ["_GENERATE_COVER_REEXEC"] = "1"
        os.execv(str(BACKEND_VENV_PYTHON), [str(BACKEND_VENV_PYTHON), *sys.argv])


def load_backend_env(keys: tuple[str, ...]) -> None:
    """把后端 .env 里指定的 key 补进 os.environ (已存在的不覆盖)。"""
    env_file = BACKEND_ROOT / ".env"
    if not env_file.exists():
        return
    for raw in env_file.read_text().splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        if key in keys and key not in os.environ:
            os.environ[key] = value.strip().strip('"').strip("'")


def resolve_gcs_credentials() -> None:
    if os.environ.get("GOOGLE_APPLICATION_CREDENTIALS"):
        return
    for candidate in (Path.cwd() / "vertex-sa.json", BLOG_ROOT / "vertex-sa.json"):
        if candidate.exists():
            os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(candidate)
            return
    sys.exit("未找到 GCS 凭证: 请设置 GOOGLE_APPLICATION_CREDENTIALS 或在博客根目录放 vertex-sa.json")


# --------------------------------------------------------------------------- #
# 生图
# --------------------------------------------------------------------------- #
def generate_images(args) -> list[bytes]:
    import requests
    from io import BytesIO
    from openai import OpenAI

    client = OpenAI(
        api_key=os.environ["OPENAI_API_KEY"],
        base_url=os.environ.get("OPENAI_BASE_URL") or None,
    )
    params = {
        "model": args.model,
        "prompt": args.prompt,
        "size": args.size,
        "quality": args.quality,
        "n": args.n,
        "output_format": args.format,
    }
    if args.background:
        params["background"] = args.background

    if args.ref:
        files = []
        for url in args.ref:
            if url.startswith(("http://", "https://")):
                resp = requests.get(url, timeout=60)
                resp.raise_for_status()
                data, name = resp.content, url.split("?")[0].rsplit("/", 1)[-1]
            else:
                data, name = Path(url).read_bytes(), Path(url).name
            buf = BytesIO(data)
            buf.name = name if "." in name else "image.png"
            files.append(buf)
        params["image"] = files
        print(f"[openai] images.edit model={args.model} size={args.size} quality={args.quality} refs={len(files)}")
        result = client.images.edit(**params)
    else:
        print(f"[openai] images.generate model={args.model} size={args.size} quality={args.quality} n={args.n}")
        result = client.images.generate(**params)

    usage = getattr(result, "usage", None)
    if usage:
        print(f"[openai] usage: {usage}")
    return [base64.b64decode(item.b64_json) for item in result.data]


# --------------------------------------------------------------------------- #
# 上传
# --------------------------------------------------------------------------- #
def upload_public(local_path: Path, object_path: str, content_type: str, force: bool) -> str:
    from google.cloud import storage

    client = storage.Client()
    bucket = client.bucket(PUBLIC_BUCKET)
    blob = bucket.blob(object_path)
    if not force and blob.exists():
        sys.exit(f"对象已存在: gs://{PUBLIC_BUCKET}/{object_path} (加 --force 覆盖, 或换 --name)")
    blob.cache_control = "public, max-age=31536000"
    blob.upload_from_filename(str(local_path), content_type=content_type)
    return f"https://storage.googleapis.com/{PUBLIC_BUCKET}/{object_path}"


# --------------------------------------------------------------------------- #
# 回填文章
# --------------------------------------------------------------------------- #
def _sub_once(pattern: str, repl: str, text: str, label: str, flags=0) -> tuple[str, bool]:
    new_text, count = re.subn(pattern, repl, text, count=1, flags=flags)
    if count == 0:
        print(f"[post] 未找到 {label}, 跳过")
    return new_text, count > 0


def update_post(post_path: Path, url: str) -> None:
    text = post_path.read_text()
    if not text.startswith("---"):
        sys.exit(f"{post_path} 没有 frontmatter")
    end = text.find("\n---", 3)
    fm, body = text[: end + 4], text[end + 4 :]

    fm, ok1 = _sub_once(r'^(coverImage:\s*)["\']?[^"\'\n]*["\']?\s*$', rf'\g<1>"{url}"', fm, "coverImage", re.M)
    fm, ok2 = _sub_once(
        r'(property:\s*og:image\s*\n\s*content:\s*)["\']?[^"\'\n]*["\']?', rf"\g<1>{url}", fm, "og:image"
    )
    fm, ok3 = _sub_once(
        r'(name:\s*twitter:image\s*\n\s*content:\s*)["\']?[^"\'\n]*["\']?', rf"\g<1>{url}", fm, "twitter:image"
    )
    post_path.write_text(fm + body)
    print(f"[post] 更新 {post_path.relative_to(BLOG_ROOT) if post_path.is_relative_to(BLOG_ROOT) else post_path}: "
          f"coverImage={'ok' if ok1 else '-'} og:image={'ok' if ok2 else '-'} twitter:image={'ok' if ok3 else '-'}")

    slug = post_path.stem
    posts_ts = BLOG_ROOT / ".vitepress" / "theme" / "data" / "posts.ts"
    if not posts_ts.exists():
        return
    ts = posts_ts.read_text()
    pattern = rf"(slug:\s*'{re.escape(slug)}',(?:(?!\n  \{{)[\s\S])*?coverImage:\s*)'[^']*'"
    new_ts, count = re.subn(pattern, rf"\g<1>'{url}'", ts, count=1)
    if count:
        posts_ts.write_text(new_ts)
        print(f"[posts.ts] 更新 slug={slug} 的 coverImage")
    else:
        print(f"[posts.ts] 未找到 slug={slug}, 请手动更新")


# --------------------------------------------------------------------------- #
def parse_args():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--name", required=True, help="对象名 (不含扩展名), 如 cover-sora-alternatives")
    src = p.add_mutually_exclusive_group(required=True)
    src.add_argument("--prompt", help="生图提示词")
    src.add_argument("--prompt-file", help="从文件读取提示词")
    p.add_argument("--post", help="要回填封面的文章路径, 如 posts/xxx.md")
    p.add_argument("--ref", action="append", help="参考图 URL 或本地路径, 可多次, 走 images.edit")
    p.add_argument("--model", default=DEFAULT_MODEL, help=f"默认 {DEFAULT_MODEL}")
    p.add_argument("--size", default=DEFAULT_SIZE, help=f"默认 {DEFAULT_SIZE}; 竖版 1024x1536, 方图 1024x1024")
    p.add_argument("--quality", default=DEFAULT_QUALITY, choices=["low", "medium", "high", "xhigh", "max", "auto"])
    p.add_argument("--format", default="png", choices=list(CONTENT_TYPES))
    p.add_argument("--background", choices=["transparent", "opaque", "auto"])
    p.add_argument("-n", type=int, default=1, help="生成张数, >1 时文件名追加 -1/-2/..., 仅第一张回填文章")
    p.add_argument("--prefix", default=DEFAULT_PREFIX, help=f"桶内目录, 默认 {DEFAULT_PREFIX}")
    p.add_argument("--out-dir", default=str(DEFAULT_OUT_DIR), help="本地保存目录")
    p.add_argument("--no-upload", action="store_true", help="只生成保存到本地")
    p.add_argument("--force", action="store_true", help="桶内同名对象存在时覆盖")
    args = p.parse_args()
    if args.prompt_file:
        args.prompt = Path(args.prompt_file).read_text().strip()
    if not re.fullmatch(r"[A-Za-z0-9._-]+", args.name):
        p.error("--name 只允许字母、数字、点、下划线、连字符")
    return args


def main() -> None:
    ensure_deps()
    args = parse_args()

    load_backend_env(("OPENAI_API_KEY", "OPENAI_BASE_URL"))
    if not os.environ.get("OPENAI_API_KEY"):
        sys.exit("未找到 OPENAI_API_KEY: 请设置环境变量, 或确认 openstory_backend/.env 存在")
    if not args.no_upload:
        resolve_gcs_credentials()

    images = generate_images(args)

    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    content_type = CONTENT_TYPES[args.format]
    urls: list[str] = []
    for idx, data in enumerate(images, start=1):
        stem = args.name if len(images) == 1 else f"{args.name}-{idx}"
        local = out_dir / f"{stem}.{args.format}"
        local.write_bytes(data)
        print(f"[local] {local} ({len(data) / 1024:.0f} KB)")
        if args.no_upload:
            continue
        url = upload_public(local, f"{args.prefix}/{stem}.{args.format}", content_type, args.force)
        urls.append(url)
        print(f"[gcs] {url}")

    if args.post and urls:
        update_post(Path(args.post).resolve(), urls[0])

    if urls:
        print("\nCOVER_URL=" + urls[0])


if __name__ == "__main__":
    main()
