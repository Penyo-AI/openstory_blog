<script setup lang="ts">
import { computed, ref } from 'vue'
import { blogPosts } from '../data/posts'

const activeTag = ref('All')
const tags = computed(() => ['All', ...new Set(blogPosts.flatMap((post) => post.tags))])
const filteredPosts = computed(() => {
  if (activeTag.value === 'All') return blogPosts
  return blogPosts.filter((post) => post.tags.includes(activeTag.value))
})

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date))
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}
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

    <section v-if="filteredPosts.length" class="blog-latest-section" aria-label="All posts">
      <h2 class="blog-section-title">Latest</h2>
      <div class="blog-card-grid">
        <article v-for="post in filteredPosts" :key="post.slug" class="blog-card">
          <a class="blog-card__image-link" :href="`/posts/${post.slug}`">
            <img :src="post.coverImage" :alt="post.title">
          </a>
          <div class="blog-card__body">
            <div class="blog-card__tags">
              <span v-for="tag in post.tags.slice(0, 3)" :key="tag">{{ tag }}</span>
            </div>

            <a class="blog-card__title-link" :href="`/posts/${post.slug}`">
              <h3>{{ post.title }}</h3>
            </a>

            <p class="blog-card__description">{{ post.description }}</p>

            <div class="blog-card__footer">
              <div class="blog-card__author">
                <div class="blog-avatar blog-avatar--small">{{ initials(post.author) }}</div>
                <div>
                  <p class="blog-card__author-name">{{ post.author }}</p>
                  <p class="blog-card__author-date">{{ formatDate(post.publishedAt) }}</p>
                </div>
              </div>
              <span class="blog-card__reading-time">{{ post.readingTime }} min read</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="blog-list-cta">
      <h2>Ready to Create Your Own Story?</h2>
      <p>
        Join thousands of creators using AI to direct microdramas, build
        worlds, and tell stories.
      </p>
      <a href="/home">Start Creating</a>
    </section>
  </div>
</template>
