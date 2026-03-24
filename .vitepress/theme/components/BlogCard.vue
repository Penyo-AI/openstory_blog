<script setup lang="ts">
import { withBase } from 'vitepress'
import type { BlogPostItem } from '../data/posts'

defineProps<{
  post: BlogPostItem
}>()

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

function postHref(slug: string) {
  return withBase(`/posts/${slug}`)
}
</script>

<template>
  <article class="blog-card">
    <a v-if="post.coverImage" class="blog-card__image-link" :href="postHref(post.slug)">
      <img :src="post.coverImage" :alt="post.title">
    </a>

    <div class="blog-card__body">
      <div class="blog-card__tags">
        <span v-for="tag in post.tags.slice(0, 3)" :key="tag">{{ tag }}</span>
      </div>

      <a class="blog-card__title-link" :href="postHref(post.slug)">
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
</template>
