<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { appUrl } from '../data/site'
import sharedNav from '../data/nav.json'

const header = ref<HTMLElement | null>(null)
const mobileOpen = ref(false)
// Mirrors the main site's Mega-Menu (single source of truth: openstory_frontend_v2
// mega-navigation.ts → https://plotparty.ai/shared-nav.json). scripts/sync-nav.cjs refreshes
// nav.json before every build; do not edit the links here.
const groups = sharedNav.nav
const pricingUrl = sharedNav.pricing
function closeMenus() {
  mobileOpen.value = false
  header.value?.querySelectorAll('details[open]').forEach(item => item.removeAttribute('open'))
}
function toggleGroup(event: Event) {
  const current = event.currentTarget as HTMLDetailsElement
  if (!current.open) return
  header.value?.querySelectorAll('details[open]').forEach(item => { if (item !== current) item.removeAttribute('open') })
}
function outside(event: PointerEvent) {
  if (event.target instanceof Node && !header.value?.contains(event.target)) closeMenus()
}
function escape(event: KeyboardEvent) {
  if (event.key !== 'Escape') return
  const group = event.target instanceof Element ? event.target.closest('details') : null
  closeMenus()
  if (group) group.querySelector('summary')?.focus()
  else header.value?.querySelector<HTMLButtonElement>('[aria-controls="blog-navigation"]')?.focus()
}
onMounted(() => document.addEventListener('pointerdown', outside))
onBeforeUnmount(() => document.removeEventListener('pointerdown', outside))
</script>

<script client>
// MPA builds do not hydrate Vue; attach the navigation controls to the rendered header.
const header = document.querySelector('.site-header')
if (header) {
  const navigation = header.querySelector('#blog-navigation')
  const toggle = header.querySelector('[aria-controls="blog-navigation"]')
  const closeMenus = () => {
    navigation.classList.remove('is-open')
    toggle.setAttribute('aria-expanded', 'false')
    toggle.textContent = 'Menu'
    header.querySelectorAll('details[open]').forEach(group => group.removeAttribute('open'))
  }
  toggle.addEventListener('click', () => {
    if (toggle.getAttribute('aria-expanded') === 'true') return closeMenus()
    navigation.classList.add('is-open')
    toggle.setAttribute('aria-expanded', 'true')
    toggle.textContent = 'Close'
  })
  header.querySelectorAll('details').forEach(group => {
    group.addEventListener('toggle', () => {
      if (!group.open) return
      header.querySelectorAll('details[open]').forEach(other => {
        if (other !== group) other.removeAttribute('open')
      })
    })
  })
  header.addEventListener('click', event => {
    if (event.target instanceof Element && event.target.closest('a')) closeMenus()
  })
  document.addEventListener('pointerdown', event => {
    if (event.target instanceof Node && !header.contains(event.target)) closeMenus()
  })
  header.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return
    const group = event.target instanceof Element ? event.target.closest('details') : null
    closeMenus()
    if (group) group.querySelector('summary')?.focus()
    else toggle.focus()
  })
}
</script>

<template>
  <header ref="header" class="site-header" @keydown="escape">
    <a class="brand" :href="appUrl('/')" aria-label="Plot Party home"><img :src="withBase('/images/logo/logo-black-1.png')" alt="Plot Party" width="128" height="32"><span class="visually-hidden">Plot Party home</span></a>
    <nav id="blog-navigation" :class="['navigation', { 'is-open': mobileOpen }]" aria-label="Main navigation">
      <details v-for="group in groups" :key="group.label" class="nav-group" @toggle="toggleGroup">
        <summary>{{ group.label }}<span aria-hidden="true">⌄</span></summary>
        <div class="mega-panel">
          <section v-for="column in group.columns" :key="column.label"><h2>{{ column.label }}</h2>
            <a v-for="link in column.links" :key="link.href" :href="link.href" @click="closeMenus">{{ link.label }}<span v-if="link.badge" class="badge">{{ link.badge === 'hot' ? 'Hot' : 'New' }}</span></a>
          </section>
        </div>
      </details>
      <a class="pricing" :href="pricingUrl" @click="closeMenus">Pricing</a>
    </nav>
    <div class="actions"><a class="sales" :href="appUrl('/ip?contact=sales')">Contact Sales</a><a class="create" :href="appUrl('/home')">Start Creating</a>
      <button type="button" class="menu-toggle" aria-controls="blog-navigation" :aria-expanded="mobileOpen" @click="mobileOpen ? closeMenus() : (mobileOpen = true)">{{ mobileOpen ? 'Close' : 'Menu' }}</button>
    </div>
  </header>
</template>

<style scoped>
.site-header { position: fixed; top: 0; left: 0; width: 100%; z-index: 40; display: flex; align-items: center; justify-content: space-between; gap: 24px; min-height: var(--marketing-header-height); padding: 16px 32px; background: #fff; color: #18181b; border-bottom: 1px solid #e4e4e7; }
.brand { flex-shrink: 0; }
.brand img { width: 128px; height: auto; }
.navigation { display: flex; align-items: center; gap: 24px; }
.nav-group summary { display: flex; align-items: center; gap: 8px; list-style: none; cursor: pointer; padding: 12px 0; font-size: 14px; font-weight: 500; white-space: nowrap; }
.nav-group summary::-webkit-details-marker { display: none; }
.mega-panel { position: absolute; top: calc(100% - 8px); left: 50%; transform: translateX(-50%); display: flex; gap: 40px; width: max-content; max-width: calc(100vw - 48px); max-height: 75vh; overflow-y: auto; padding: 28px; background: #fff; border: 1px solid #e4e4e7; border-radius: 16px; box-shadow: 0 16px 40px #00000012; }
.mega-panel section { min-width: 180px; }
.mega-panel h2 { margin: 0 0 12px; padding: 0; border: 0; color: #71717a; font-size: 12px; font-weight: 500; }
.mega-panel a { display: block; padding: 9px 0; font-size: 14px; line-height: 1.5; }
.mega-panel a:hover, .pricing:hover { color: #bd4511; }
.pricing { font-size: 14px; font-weight: 500; }
.badge { display: inline-block; margin-left: 6px; padding: 1px 6px; border-radius: 999px; background: #fff1ea; color: #bd4511; font-size: 10px; font-weight: 600; line-height: 16px; vertical-align: middle; }
.actions { display: flex; align-items: center; gap: 12px; flex-shrink: 0; font-size: 13px; font-weight: 600; }
.sales, .create, .menu-toggle { padding: 10px 16px; border: 1px solid #d4d4d8; border-radius: 24px; white-space: nowrap; }
.create { color: #fff; background: #bd4511; border-color: #bd4511; }
.menu-toggle { display: none; background: #fff; cursor: pointer; }
.site-header a:focus-visible, .site-header summary:focus-visible, .site-header button:focus-visible { outline: 2px solid #bd4511; outline-offset: 5px; }
@media (max-width: 1200px) {
  .site-header { padding: 16px 24px; }
  .menu-toggle { display: block; }
  .navigation { display: none; position: absolute; top: 100%; left: 0; right: 0; max-height: calc(100dvh - var(--marketing-header-height)); overflow-y: auto; padding: 16px 24px 24px; background: #fff; border-bottom: 1px solid #e4e4e7; }
  .navigation.is-open { display: block; }
  .nav-group { border-bottom: 1px solid #e4e4e7; }
  .nav-group summary { justify-content: space-between; padding: 16px 0; }
  .mega-panel { position: static; transform: none; flex-wrap: wrap; width: auto; max-width: none; max-height: none; padding: 8px 12px 24px; border: 0; box-shadow: none; }
  .pricing { display: block; padding-top: 18px; }
}
@media (max-width: 540px) { .site-header { padding: 14px 16px; gap: 12px; flex-wrap: wrap; } .brand img { width: 105px; } .actions { gap: 8px; } .sales { display: none; } .create, .menu-toggle { padding: 8px 12px; font-size: 12px; } }
</style>
