<script setup lang="ts">
withDefaults(defineProps<{ href: string; title: string; description?: string }>(), {
  description: 'Put this guide into practice. Keep your references, shots and revisions together in Plot Party.'
})
</script>

<template>
  <aside class="studio-callout" aria-label="Try this workflow">
    <p>{{ description }}</p>
    <a :href="`https://plotparty.ai${href}`">{{ title }} <span aria-hidden="true">→</span></a>
  </aside>
</template>
