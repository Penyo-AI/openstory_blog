<script setup lang="ts">
import { computed, ref } from 'vue'
import { blogPosts } from '../data/posts'
import { appUrl } from '../data/site'
import BlogCard from './BlogCard.vue'
import MarketingFooter from './MarketingFooter.vue'

const activeTag = ref('All')
const tags = computed(() => ['All', ...new Set(blogPosts.flatMap((post) => post.tags))])
const filteredPosts = computed(() => {
  if (activeTag.value === 'All') return blogPosts
  return blogPosts.filter((post) => post.tags.includes(activeTag.value))
})
</script>

<template>
  <div class="blog-home-page">
    <header class="blog-list-header">
      <h1>Blog</h1>
      <p>
        Guides, tutorials, and insights on AI storytelling, microdrama
        creation, and the future of creative content.
      </p>
    </header>

    <nav class="blog-filter-nav" aria-label="Blog categories">
      <button
        v-for="tag in tags"
        :key="tag"
        type="button"
        class="blog-filter-chip"
        :class="{ 'is-active': activeTag === tag }"
        @click="activeTag = tag"
      >
        {{ tag }}
      </button>
    </nav>

    <section v-if="filteredPosts.length" class="blog-related-shell blog-related-shell--home" aria-label="All posts">
      <div class="blog-related-section blog-related-section--home">
        <h2 class="blog-section-title blog-section-title--home">Latest</h2>
        <div class="blog-home-grid">
          <BlogCard v-for="post in filteredPosts" :key="post.slug" :post="post" />
        </div>
      </div>
    </section>

    <section class="blog-list-cta">
      <h2>Ready to Create Your Own Story?</h2>
      <p>
        Join thousands of creators using AI to direct microdramas, build
        worlds, and tell stories.
      </p>
      <a :href="appUrl('/home')">Start Creating</a>
    </section>

    <MarketingFooter />
  </div>
</template>
