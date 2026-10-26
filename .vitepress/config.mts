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
    const description = String(fm.description || pageData.description || '')
    const image = fm.coverImage ? new URL(fm.coverImage, siteUrl).href : undefined
    fm.head ??= []
    fm.head = fm.head.filter(([tag, attrs]: [string, Record<string, string>]) =>
      !(tag === 'link' && attrs.rel === 'canonical') &&
      !(tag === 'meta' && /^(og:|twitter:)/.test(attrs.property || attrs.name || ''))
    )
    fm.head.push(['link', { rel: 'canonical', href: url }])
    const meta = (property: string, content: string) => fm.head.push(['meta', { property, content }])
    meta('og:title', title)
    meta('og:description', description)
    meta('og:url', url)
    meta('og:type', isPost ? 'article' : 'website')
    meta('og:site_name', 'Plot Party')
    if (image) meta('og:image', image)
    fm.head.push(['meta', { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' }])
    fm.head.push(['meta', { name: 'twitter:title', content: title }])
    fm.head.push(['meta', { name: 'twitter:description', content: description }])
    if (image) fm.head.push(['meta', { name: 'twitter:image', content: image }])
    if (isPost) {
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
          ] }
        ]
      }
      fm.head.push(['script', { type: 'application/ld+json' }, JSON.stringify(schema).replace(/</g, '\\u003c')])
    }
  },
  themeConfig: {
    logo: '/images/logo/logo-black-1.png', nav: [], socialLinks: [],
    outline: { label: 'On this page' }, search: { provider: 'local' }
  }
})
