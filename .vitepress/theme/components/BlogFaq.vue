<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.faq?.length" class="blog-faq">
    <section v-for="(item, index) in frontmatter.faq" :key="item.question" :aria-labelledby="`faq-question-${index + 1}`">
      <h3 :id="`faq-question-${index + 1}`">{{ item.question }}</h3>
      <p>{{ item.answer }}</p>
    </section>
  </div>
</template>
