<script setup lang="ts">
import { ref } from 'vue'
import { withBase } from 'vitepress'
import { appUrl } from '../data/site'

type NavLink = {
  label: string
  href: string
}

const isMenuOpen = ref(false)

const navLinks: NavLink[] = [
  { label: 'Creatives', href: appUrl('/') },
  { label: 'IP Holders', href: appUrl('/ip') },
  { label: 'Pricing', href: appUrl('/pricing') },
  { label: 'Community', href: appUrl('/community') },
  { label: 'Blog', href: '/blog/' }
]

const socialLinks = [
  { label: 'Discord', href: 'https://discord.gg/MwDgZzweMc', external: true },
  { label: 'Email', href: 'mailto:sophia@plotparty.ai', external: true }
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

const blogHomeHref = withBase('/')
const logoSrc = withBase('/images/logo/logo-black-1.png')
</script>

<template>
  <header class="marketing-header">
    <div class="marketing-header__inner">
      <a class="marketing-header__brand" :href="blogHomeHref" aria-label="Plot Party Blog home" @click="closeMenu">
        <img
          class="marketing-header__logo"
          :src="logoSrc"
          alt="Plot Party"
        >
      </a>

      <nav class="marketing-header__nav" aria-label="Main navigation">
        <a
          v-for="link in navLinks"
          :key="link.label"
          class="marketing-header__link"
          :href="link.href"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="marketing-header__actions">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          class="marketing-header__icon-link"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noreferrer' : undefined"
          :aria-label="link.label"
        >
          <svg v-if="link.label === 'Discord'" class="marketing-header__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          <svg v-else class="marketing-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6.75h16a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8.5a1 1 0 0 1 1-1Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="m4 8 8 5 8-5" />
          </svg>
        </a>

        <a
          class="marketing-header__cta"
          :href="appUrl('/home')"
        >
          Start Creating
        </a>

        <button
          class="marketing-header__menu-button"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation"
          @click="toggleMenu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="marketing-header__mobile-panel">
      <nav class="marketing-header__mobile-nav" aria-label="Mobile navigation">
        <a
          v-for="link in navLinks"
          :key="`${link.label}-mobile`"
          class="marketing-header__mobile-link"
          :href="link.href"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="marketing-header__mobile-social">
        <a
          v-for="link in socialLinks"
          :key="`${link.label}-social-mobile`"
          class="marketing-header__mobile-social-link"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noreferrer' : undefined"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
      </div>

      <a
        class="marketing-header__mobile-cta"
        :href="appUrl('/home')"
        @click="closeMenu"
      >
        Start Creating
      </a>
    </div>
  </header>
</template>
