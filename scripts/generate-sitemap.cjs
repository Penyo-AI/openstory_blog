const fs = require('fs')
const path = require('path')

const siteUrl = 'https://plotparty.ai'
const basePath = '/page/blog'
const cwd = process.cwd()
const postsDir = path.join(cwd, 'posts')
const newsDir = path.join(cwd, 'news')
const newsIndexPath = path.join(cwd, 'news.md')
const outputPath = path.join(cwd, 'public', 'sitemap.xml')

function getPostEntries() {
  if (!fs.existsSync(postsDir)) return []

  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith('.md'))
    .sort()
    .map((file) => {
      const filePath = path.join(postsDir, file)
      const slug = file.replace(/\.md$/, '')
      const stat = fs.statSync(filePath)

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
