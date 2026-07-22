import { defineConfig } from 'vitepress'

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
