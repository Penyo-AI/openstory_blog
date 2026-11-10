import DefaultTheme from 'vitepress/theme'
import { Fragment, h } from 'vue'
import { useData } from 'vitepress'
import BlogPostLayout from './components/BlogPostLayout.vue'
import InlineStudioCallout from './components/InlineStudioCallout.vue'
import BlogFaq from './components/BlogFaq.vue'
import type { Theme } from 'vitepress'
import MarketingHeader from './components/MarketingHeader.vue'
import BlogPostHeader from './components/BlogPostHeader.vue'
import BlogPostFooter from './components/BlogPostFooter.vue'
import PlotPartyCta from './components/PlotPartyCta.vue'
import BlogTrackingConsent from './components/BlogTrackingConsent.vue'
import './custom.css'

const theme: Theme = {
  extends: DefaultTheme,
  Layout: () => {
    const { frontmatter, page } = useData()
    const isPost = frontmatter.value.layout === 'blog-post'
    const layout = isPost ? h(BlogPostLayout) : h(DefaultTheme.Layout, null, {
        'layout-top': () => h(MarketingHeader),
        'doc-before': () => h(BlogPostHeader),
        'doc-after': () => h(BlogPostFooter)
      })
    return h(Fragment, [layout,
      isPost || page.value.relativePath === 'index.md' ? h(BlogTrackingConsent) : null
    ])
  },
  enhanceApp({ app }) {
    // Available inside any markdown post as <PlotPartyCta />
    app.component('PlotPartyCta', PlotPartyCta)
    app.component('InlineStudioCallout', InlineStudioCallout)
    app.component('BlogFaq', BlogFaq)
  }
}

export default theme
