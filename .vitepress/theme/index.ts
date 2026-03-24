import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import type { Theme } from 'vitepress'
import MarketingHeader from './components/MarketingHeader.vue'
import BlogPostHeader from './components/BlogPostHeader.vue'
import BlogPostFooter from './components/BlogPostFooter.vue'
import './custom.css'

const theme: Theme = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(MarketingHeader),
      'doc-before': () => h(BlogPostHeader),
      'doc-after': () => h(BlogPostFooter)
    })
  }
}

export default theme
