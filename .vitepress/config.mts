import fs from 'node:fs/promises'
import path from 'node:path'
import { transformWithEsbuild } from 'vite'
import { defineConfig } from 'vitepress'

const siteUrl = 'https://plotparty.ai'
function canonicalUrl(relativePath: string): string {
  const slug = relativePath.replace(/\.md$/, '')
  if (slug === 'index') return `${siteUrl}/blog`
  if (slug === 'seedance-2-5') return `${siteUrl}/page/seedance-2-5`
  if (slug === 'news') return `${siteUrl}/page/news`
  if (slug.startsWith('news/')) return `${siteUrl}/page/${slug}`
  return `${siteUrl}/blog/${slug.replace(/^posts\//, '')}`
}

export default defineConfig({
  title: 'Plot Party Blog',
  description: 'Guides, tutorials, and market insights on AI storytelling, microdramas, and creative tools.',
  base: '/blog/',
  rewrites: { 'posts/:slug.md': ':slug.md' },
  mpa: true,
  markdown: { headers: { level: [2] } },
  cleanUrls: true,
  vite: {
    server: { allowedHosts: ['plotparty.ai', 'app.plotparty.ai'] },
    preview: { allowedHosts: ['plotparty.ai', 'app.plotparty.ai'] }
  },
  head: [
    ['link', { rel: 'icon', href: '/blog/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],
  transformPageData(pageData) {
    const fm = pageData.frontmatter
    const url = canonicalUrl(pageData.relativePath)
    const isPost = pageData.relativePath.startsWith('posts/') || fm.layout === 'blog-post'
    const title = String(fm.title || pageData.title)
    // Optional <title> override so the HTML title can differ from the on-page H1
    // (frontmatter.title stays the H1, breadcrumb and JSON-LD headline).
    const seoTitle = fm.seoTitle ? String(fm.seoTitle) : title
    if (fm.seoTitle) pageData.title = seoTitle
    const description = String(fm.description || pageData.description || '')
    const image = fm.coverImage ? new URL(fm.coverImage, siteUrl).href : undefined
    fm.head ??= []
    // MPA pages do not hydrate the Vue theme. Load the consent-aware browser
    // runtime explicitly on the blog hub and articles, including direct visits.
    if (isPost || pageData.relativePath === 'index.md') {
      fm.head.push(['script', { src: '/blog/blog-analytics.js', defer: '' }])
    }
    fm.head = fm.head.filter(([tag, attrs]: [string, Record<string, string>]) =>
      !(tag === 'link' && attrs.rel === 'canonical') &&
      !(tag === 'meta' && /^(og:|twitter:)/.test(attrs.property || attrs.name || ''))
    )
    fm.head.push(['link', { rel: 'canonical', href: url }])
    const meta = (property: string, content: string) => fm.head.push(['meta', { property, content }])
    meta('og:title', seoTitle)
    meta('og:description', description)
    meta('og:url', url)
    meta('og:type', isPost ? 'article' : 'website')
    meta('og:site_name', 'Plot Party')
    if (image) meta('og:image', image)
    fm.head.push(['meta', { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' }])
    fm.head.push(['meta', { name: 'twitter:title', content: seoTitle }])
    fm.head.push(['meta', { name: 'twitter:description', content: description }])
    if (image) fm.head.push(['meta', { name: 'twitter:image', content: image }])
    if (isPost) {
      const faq = fm.faq as Array<{ question: string; answer: string }> | undefined
      if (faq && (!Array.isArray(faq) || faq.some(item =>
        !item || typeof item.question !== 'string' || !item.question.trim() ||
        typeof item.answer !== 'string' || !item.answer.trim()
      ))) {
        throw new Error(`Invalid FAQ content in ${pageData.relativePath}`)
      }
      const schema = {
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'BlogPosting', headline: title, description, url,
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            datePublished: new Date(fm.date).toISOString(),
            ...(fm.lastUpdated ? { dateModified: new Date(fm.lastUpdated).toISOString() } : {}),
            author: { '@type': 'Person', name: fm.author || 'Plot Party' },
            publisher: { '@type': 'Organization', name: 'Plot Party', url: siteUrl },
            ...(image ? { image: [image] } : {}) },
          { '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Blog', item: `${siteUrl}/blog` },
            { '@type': 'ListItem', position: 2, name: title, item: url }
          ] },
          ...(faq?.length ? [{
            '@type': 'FAQPage',
            '@id': `${url}#faq`,
            mainEntity: faq.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer }
            }))
          }] : [])
        ]
      }
      fm.head.push(['script', { type: 'application/ld+json' }, JSON.stringify(schema).replace(/</g, '\\u003c')])
    }
    if (pageData.relativePath === 'index.md') {
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': url, url, name: seoTitle, description,
        isPartOf: { '@type': 'WebSite', name: 'Plot Party', url: siteUrl },
        publisher: { '@type': 'Organization', name: 'Plot Party', url: siteUrl }
      }
      fm.head.push(['script', { type: 'application/ld+json' }, JSON.stringify(schema).replace(/</g, '\\u003c')])
    }
  },
  // markdown-it-anchor renders heading permalinks with only a zero-width space,
  // which SEO crawlers report as links without anchor text. Give each one
  // visually hidden text taken from its existing aria-label.
  transformHtml(code) {
    return code.replace(
      /(<a class="header-anchor" href="#[^"]*" aria-label="([^"]*)">)\u200b<\/a>/g,
      '$1<span class="visually-hidden">$2</span></a>'
    )
  },
  // Serve the analytics runtime minified; public/blog-analytics.js stays readable.
  async buildEnd(siteConfig) {
    const file = path.join(siteConfig.outDir, 'blog-analytics.js')
    const source = await fs.readFile(file, 'utf8')
    const { code } = await transformWithEsbuild(source, file, { minify: true, legalComments: 'none' })
    await fs.writeFile(file, code)
  },
  themeConfig: {
    logo: '/images/logo/logo-black-1.png', nav: [], socialLinks: [],
    outline: { label: 'On this page' }, search: { provider: 'local' }
  }
})
