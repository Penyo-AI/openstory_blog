<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'
import { blogPosts } from '../data/posts'
import { appUrl } from '../data/site'
import BlogCard from './BlogCard.vue'

const route = useRoute()
const slug = computed(() => route.path.replace(/^.*\/posts\//, '').replace(/\.html$/, '').replace(/\/$/, ''))
const post = computed(() => blogPosts.find((item) => item.slug === slug.value))
const isPostPage = computed(() => route.path.includes('/posts/'))

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

function postHref(slug: string) {
  return withBase(`/posts/${slug}`)
}
</script>

<template>
  <div v-if="isPostPage && post">
    <div class="blog-post-footer-wrap">
      <nav v-if="relatedPosts.length" class="blog-continue-reading" aria-label="Continue reading">
        <h3>Continue Reading</h3>
        <div class="blog-continue-reading__list">
          <a v-for="item in relatedPosts" :key="item.slug" class="blog-continue-reading__item" :href="postHref(item.slug)">
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
    </div>

    <section v-if="relatedPosts.length" class="blog-related-shell">
      <div class="blog-related-section">
        <h2 class="blog-section-title">Related Articles</h2>
        <div class="blog-related-grid">
          <BlogCard v-for="item in relatedPosts" :key="item.slug" :post="item" />
        </div>
      </div>
    </section>

    <section class="blog-post-cta-wrap">
      <div class="blog-post-cta">
        <h2>Start Creating with Plot Party</h2>
        <p>
          Turn your ideas into AI-generated microdramas. No filmmaking
          experience required.
        </p>
        <a :href="appUrl('/home')">Get Started Free</a>
      </div>
    </section>
  </div>
</template>
