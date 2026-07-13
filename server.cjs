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

  if (cleanPath === "/page/seedance-2-5" || cleanPath === "/page/seedance-2-5/") {
    return path.join(distDir, "seedance-2-5.html");
  }

  if (cleanPath === "/page/blog" || cleanPath === "/page/blog/") {
    return path.join(distDir, "index.html");
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

const server = http.createServer((request, response) => {
  const filePath = resolveFile(request.url || "/");
  const safeRoot = `${distDir}${path.sep}`;

  if (!filePath || !filePath.startsWith(safeRoot) || !fs.existsSync(filePath)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const ext = path.extname(filePath);
  response.writeHead(200, {
    "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
    "Content-Type": contentTypes.get(ext) || "application/octet-stream",
  });
  fs.createReadStream(filePath).pipe(response);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Plot Party page server listening on ${port}`);
});
