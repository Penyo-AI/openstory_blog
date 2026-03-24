import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Plot Party Blog',
  description: 'Guides, tutorials, and market insights on AI storytelling, microdramas, and creative tools.',
  base: '/blog/',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/blog/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],
  themeConfig: {
    logo: '/blog/images/logo/logo-black-1.png',
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
