<script setup lang="ts">
import { SIGNUP_URL } from '../data/site'

withDefaults(defineProps<{
  title?: string
  label?: string
  href?: string
}>(), {
  title: 'Turn your story into a show with Plot Party',
  label: 'Start Creating',
  href: SIGNUP_URL
})
</script>

<template>
  <aside class="pp-cta">
    <a
      class="pp-cta__card"
      :href="href"
      target="_blank"
      rel="noreferrer"
    >
      <p class="pp-cta__title">{{ title }}</p>
      <span class="pp-cta__button">
        {{ label }}
        <svg
          class="pp-cta__arrow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M7 7h10v10" />
        </svg>
      </span>
    </a>
  </aside>
</template>
