import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { useData } from 'vitepress'
import BlogPostLayout from './components/BlogPostLayout.vue'
import InlineStudioCallout from './components/InlineStudioCallout.vue'
import type { Theme } from 'vitepress'
import MarketingHeader from './components/MarketingHeader.vue'
import BlogPostHeader from './components/BlogPostHeader.vue'
import BlogPostFooter from './components/BlogPostFooter.vue'
import PlotPartyCta from './components/PlotPartyCta.vue'
import './custom.css'

const theme: Theme = {
  extends: DefaultTheme,
  Layout: () => {
    if (useData().frontmatter.value.layout === 'blog-post') return h(BlogPostLayout)
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(MarketingHeader),
      'doc-before': () => h(BlogPostHeader),
      'doc-after': () => h(BlogPostFooter)
    })
  },
  enhanceApp({ app }) {
    // Available inside any markdown post as <PlotPartyCta />
    app.component('PlotPartyCta', PlotPartyCta)
    app.component('InlineStudioCallout', InlineStudioCallout)
  }
}

export default theme
