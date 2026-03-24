<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { blogPosts } from '../data/posts'

const { frontmatter } = useData()
const route = useRoute()

const slug = computed(() => route.path.replace(/^.*\/posts\//, '').replace(/\.html$/, '').replace(/\/$/, ''))
const post = computed(() => blogPosts.find((item) => item.slug === slug.value))
const isPostPage = computed(() => route.path.includes('/posts/'))

const formattedDate = computed(() => {
  if (!post.value) return ''
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(post.value.publishedAt))
})

const initials = computed(() => {
  if (!post.value) return ''
  return post.value.author
    .split(' ')
    .map((part) => part[0])
    .join('')
})

const blogHomeHref = withBase('/')
</script>

<template>
  <div v-if="isPostPage && post" class="blog-post-shell blog-post-shell--header">
    <nav class="blog-breadcrumb" aria-label="Breadcrumb">
      <a :href="blogHomeHref">Blog</a>
      <span>/</span>
      <span>{{ frontmatter.title }}</span>
    </nav>

    <header class="blog-post-header">
      <div class="blog-post-tag-list">
        <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
      </div>

      <h1>{{ frontmatter.title }}</h1>
      <p class="blog-post-description">{{ frontmatter.description }}</p>

      <div class="blog-post-author-row">
        <div class="blog-avatar">{{ initials }}</div>
        <div>
          <p class="blog-post-author-name">{{ post.author }}</p>
          <p class="blog-post-author-meta">{{ formattedDate }} · {{ post.readingTime }} min read</p>
        </div>
      </div>
    </header>

    <img class="blog-post-cover-image" :src="post.coverImage" :alt="post.title">
  </div>
</template>
