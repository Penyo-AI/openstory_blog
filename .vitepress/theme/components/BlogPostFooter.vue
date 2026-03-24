<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { blogPosts } from '../data/posts'

const route = useRoute()
const slug = computed(() => route.path.replace(/^\/posts\//, '').replace(/\.html$/, '').replace(/\/$/, ''))
const post = computed(() => blogPosts.find((item) => item.slug === slug.value))
const isPostPage = computed(() => route.path.startsWith('/posts/'))

const relatedPosts = computed(() => {
  if (!post.value) return []
  return blogPosts
    .filter((item) => item.slug !== post.value?.slug)
    .map((item) => ({
      post: item,
      score: item.tags.filter((tag) => post.value?.tags.includes(tag)).length
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.post)
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
  <div v-if="isPostPage && post" class="blog-post-footer-wrap">
    <nav v-if="relatedPosts.length" class="blog-continue-reading" aria-label="Continue reading">
      <h3>Continue Reading</h3>
      <div class="blog-continue-reading__list">
        <a v-for="item in relatedPosts" :key="item.slug" class="blog-continue-reading__item" :href="`/posts/${item.slug}`">
          <span class="blog-continue-reading__arrow">&rarr;</span>
          <div>
            <p class="blog-continue-reading__title">{{ item.title }}</p>
            <p class="blog-continue-reading__desc">{{ item.description }}</p>
          </div>
        </a>
      </div>
    </nav>

    <nav v-if="post.relatedLinks?.length" class="blog-explore-more" aria-label="Related pages">
      <h3>Explore More</h3>
      <div class="blog-explore-more__links">
        <a v-for="link in post.relatedLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
      </div>
    </nav>

    <section v-if="relatedPosts.length" class="blog-related-section">
      <h2 class="blog-section-title">Related Articles</h2>
      <div class="blog-related-grid">
        <article v-for="item in relatedPosts" :key="item.slug" class="blog-card">
          <a class="blog-card__image-link" :href="`/posts/${item.slug}`">
            <img :src="item.coverImage" :alt="item.title">
          </a>
          <div class="blog-card__body">
            <div class="blog-card__tags">
              <span v-for="tag in item.tags.slice(0, 3)" :key="tag">{{ tag }}</span>
            </div>
            <a class="blog-card__title-link" :href="`/posts/${item.slug}`">
              <h3>{{ item.title }}</h3>
            </a>
            <p class="blog-card__description">{{ item.description }}</p>
            <div class="blog-card__footer">
              <div class="blog-card__author">
                <div class="blog-avatar blog-avatar--small">{{ initials(item.author) }}</div>
                <div>
                  <p class="blog-card__author-name">{{ item.author }}</p>
                  <p class="blog-card__author-date">{{ formatDate(item.publishedAt) }}</p>
                </div>
              </div>
              <span class="blog-card__reading-time">{{ item.readingTime }} min read</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="blog-post-cta-wrap">
      <div class="blog-post-cta">
        <h2>Start Creating with Plot Party</h2>
        <p>
          Turn your ideas into AI-generated microdramas. No filmmaking
          experience required.
        </p>
        <a href="/home">Get Started Free</a>
      </div>
    </section>
  </div>
</template>
