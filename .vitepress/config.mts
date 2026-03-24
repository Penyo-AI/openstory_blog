import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Plot Party Blog',
  description: 'Updates, guides, and stories from Plot Party.',
  base: '/blog/',
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]],
  themeConfig: {
    logo: '/blog/images/logo/logo-black-1.png',
    nav: [],
    socialLinks: [],
    search: {
      provider: 'local'
    }
  }
})
