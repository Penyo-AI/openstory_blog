const fs = require('fs')
const path = require('path')

// This project serves every route under /page/* (see server.cjs + nginx), so it
// owns a single unified sitemap covering all sections. It is written to
// public/sitemap.xml and served at /page/sitemap.xml — the path must sit above
// every listed URL, otherwise search engines ignore URLs outside the sitemap's
// own directory (e.g. /page/news/* under a /page/blog/ sitemap).
//
// To add a new /page/* section: register a collection (a directory of markdown,
// one file per URL) or a standalone page below. The main site never changes.
const siteUrl = 'https://plotparty.ai'
const basePath = '/page/blog'
const cwd = process.cwd()
const postsDir = path.join(cwd, 'posts')
const newsDir = path.join(cwd, 'news')
const newsIndexPath = path.join(cwd, 'news.md')
const outputPath = path.join(cwd, 'public', 'sitemap.xml')

// Standalone /page/* routes backed by a single source file at the repo root.
const standalonePages = [
  { route: '/page/seedance-2-5', source: 'seedance-2-5.md', priority: '0.9' }
]

function getMarkdownDate(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const match = content.match(/^---\n[\s\S]*?\ndate:\s*['"]?([^'"\n]+)['"]?\n[\s\S]*?\n---/)

  return match ? Date.parse(match[1].trim()) : 0
}

function getStandaloneEntries() {
  return standalonePages
    .filter((page) => fs.existsSync(path.join(cwd, page.source)))
    .map((page) => ({
      loc: `${siteUrl}${page.route}`,
      lastmod: fs.statSync(path.join(cwd, page.source)).mtime.toISOString(),
      priority: page.priority
    }))
}

function getPostEntries() {
  if (!fs.existsSync(postsDir)) return []

  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(postsDir, file)

      return {
        file,
        filePath,
        publishedAt: getMarkdownDate(filePath)
      }
    })
    .sort((a, b) => b.publishedAt - a.publishedAt || a.file.localeCompare(b.file))
    .map((file) => {
      const slug = file.file.replace(/\.md$/, '')
      const stat = fs.statSync(file.filePath)

      return {
        loc: `${siteUrl}${basePath}/posts/${slug}`,
        lastmod: stat.mtime.toISOString(),
        priority: '0.8'
      }
    })
}

function getNewsEntries() {
  const entries = []

  if (fs.existsSync(newsIndexPath)) {
    entries.push({
      loc: `${siteUrl}/page/news`,
      lastmod: fs.statSync(newsIndexPath).mtime.toISOString(),
      priority: '0.9'
    })
  }

  if (!fs.existsSync(newsDir)) return entries

  return [
    ...entries,
    ...fs
      .readdirSync(newsDir)
      .filter((file) => file.endsWith('.md'))
      .sort()
      .map((file) => {
        const filePath = path.join(newsDir, file)
        const slug = file.replace(/\.md$/, '')
        const stat = fs.statSync(filePath)

        return {
          loc: `${siteUrl}/page/news/${slug}`,
          lastmod: stat.mtime.toISOString(),
          priority: '0.8'
        }
      })
  ]
}

function buildUrlXml(entry) {
  return [
    '  <url>',
    `    <loc>${entry.loc}</loc>`,
    `    <lastmod>${entry.lastmod}</lastmod>`,
    `    <priority>${entry.priority}</priority>`,
    '  </url>'
  ].join('\n')
}

function main() {
  const entries = [
    {
      loc: `${siteUrl}${basePath}/`,
      lastmod: new Date().toISOString(),
      priority: '1.0'
    },
    ...getStandaloneEntries(),
    ...getPostEntries(),
    ...getNewsEntries()
  ]

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(buildUrlXml),
    '</urlset>',
    ''
  ].join('\n')

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, xml, 'utf8')

  console.log(`Generated sitemap: ${outputPath}`)
}

main()
