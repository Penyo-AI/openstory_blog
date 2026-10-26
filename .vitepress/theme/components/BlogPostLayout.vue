<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import MarketingHeader from './MarketingHeader.vue'
import MarketingFooter from './MarketingFooter.vue'
import BlogPostHeader from './BlogPostHeader.vue'
import BlogPostFooter from './BlogPostFooter.vue'
import BlogToModelsInternalLinkBlock from './BlogToModelsInternalLinkBlock.vue'
const { page } = useData()
const headings = computed(() => page.value.headers || [])
</script>

<template>
  <div class="Layout producer-layout">
    <a class="producer-skip" href="#article">Skip to article</a>
    <MarketingHeader />
    <main>
      <BlogPostHeader />
      <div class="producer-grid">
        <nav class="producer-toc" aria-label="On this page">
          <div class="producer-sticky">
            <strong>On this page</strong>
            <ul><li v-for="heading in headings" :key="heading.link"><a :href="heading.link">{{ heading.title }}</a></li></ul>
          </div>
        </nav>
        <article id="article" class="vp-doc producer-article" tabindex="-1">
          <Content />
          <BlogToModelsInternalLinkBlock />
        </article>
        <aside class="producer-tools" aria-label="Create in Plot Party Studio">
          <div class="producer-sticky studio-widget">
            <p class="studio-widget-label">PLOT PARTY STUDIO</p>
            <h2>Turn your next idea into a story</h2>
            <p>Plan characters, storyboard scenes and build your next episode with an AI agent.</p>
            <a href="https://plotparty.ai/home">Open Studio →</a>
            <a href="https://plotparty.ai/canvas">Explore the canvas →</a>
          </div>
        </aside>
      </div>
      <BlogPostFooter />
    </main>
    <MarketingFooter />
  </div>
</template>
