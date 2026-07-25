import { defineConfig } from 'vitepress'

// Matches the routing rules in server.cjs: news.md/news/* is served under
// /page/news (not /page/blog/news), everything else lives under /page/blog/.
const siteUrl = 'https://plotparty.ai'

function canonicalUrl(relativePath: string): string {
  const slug = relativePath.replace(/\.md$/, '')

  if (slug === 'index') return `${siteUrl}/page/blog/`
  if (slug === 'seedance-2-5') return `${siteUrl}/page/seedance-2-5`
  if (slug === 'news') return `${siteUrl}/page/news`
  if (slug.startsWith('news/')) return `${siteUrl}/page/news/${slug.slice('news/'.length)}`

  return `${siteUrl}/page/blog/${slug}`
}

export default defineConfig({
  title: 'Plot Party Blog',
  description: 'Guides, tutorials, and market insights on AI storytelling, microdramas, and creative tools.',
  base: '/page/blog/',
  mpa: true,
  cleanUrls: true,
  vite: {
    server: {
      allowedHosts: ['plotparty.ai', 'app.plotparty.ai']
    },
    preview: {
      allowedHosts: ['plotparty.ai', 'app.plotparty.ai']
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/page/blog/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],
  transformPageData(pageData) {
    pageData.frontmatter.head ??= []

    const hasCanonical = pageData.frontmatter.head.some(
      ([tag, attrs]: [string, Record<string, string>]) => tag === 'link' && attrs.rel === 'canonical'
    )

    if (!hasCanonical) {
      pageData.frontmatter.head.push([
        'link',
        { rel: 'canonical', href: canonicalUrl(pageData.relativePath) }
      ])
    }
  },
  themeConfig: {
    logo: '/images/logo/logo-black-1.png',
    nav: [],
    socialLinks: [],
    outline: {
      label: 'On this page'
    },
    search: {
      provider: 'local'
    }
  }
})
