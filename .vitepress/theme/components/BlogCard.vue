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

<style scoped>
.blog-card {
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  background: #ffffff;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.blog-card:hover {
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
}

.blog-card__image-link {
  display: block;
  position: relative;
  overflow: hidden;
  line-height: 0;
  aspect-ratio: 16 / 9;
  background: #f4f4f5;
}

.blog-card__image-link img {
  position: absolute;
  inset: 0;
  display: block;
  margin: 0 !important;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  vertical-align: top;
}

.blog-card:hover .blog-card__image-link img {
  transform: scale(1.05);
}

.blog-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px;
}

.blog-card__body p {
  margin: 0;
}

.blog-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.blog-card__tags span {
  border-radius: 999px;
  background: #f3f4f6;
  padding: 4px 12px;
  color: #6b7280;
  font-size: 0.75rem;
  font-weight: 500;
  text-decoration: none;
}

.blog-card__title-link {
  text-decoration: none;
}

.blog-card__title-link h3 {
  margin: 0 0 8px;
  color: #111827;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.4;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  transition: color 0.2s ease;
}

.blog-card__title-link:hover h3 {
  color: #4b5563;
}

.blog-card__description {
  display: -webkit-box;
  overflow: hidden;
  flex: 1;
  margin: 0 0 16px;
  color: #4b5563;
  font-size: 0.875rem;
  line-height: 1.625;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.blog-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  border-top: 1px solid #f3f4f6;
  padding-top: 16px;
}

.blog-card__author {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 8px;
}

.blog-card__author > div {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 2px;
}

.blog-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: #18181b;
  color: #ffffff;
  font-weight: 700;
}

.blog-avatar--small {
  width: 32px;
  height: 32px;
  font-size: 0.75rem;
}

.blog-card__author-name {
  margin: 0;
  color: #111827;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.2;
}

.blog-card__author-date,
.blog-card__reading-time {
  margin: 0;
  color: #71717a;
  font-size: 0.75rem;
  line-height: 1.1;
}

.blog-card__reading-time {
  flex-shrink: 0;
  white-space: nowrap;
}
</style>
