<script setup lang="ts">
import { withBase } from 'vitepress'
import MarketingFooter from './MarketingFooter.vue'

const issues = [
  {
    title: 'Vertical Learns to Talk Back',
    href: '/page/news/vertical-learns-to-talk-back',
    date: 'Week of July 6 - July 12, 2026',
    dek: 'AI characters that answer back, prestige talent chasing an HBO of vertical, and Variety finally calling short drama a language.',
    image: withBase('/images/news/vertical-talks-back-banner.webp'),
    alt: 'Vertical Talks Back - Plot Party Weekly 2026 W28',
    signals: [
      'Character.AI shipped AI-animated vertical shows with post-episode character chat.',
      'Variety framed vertical as a third audiovisual language.',
      'Netflix is losing attention to TikTok, YouTube, and microdrama apps.',
      'Prestige-TV producers are pitching a premium, AI-assisted vertical tier.'
    ]
  }
]
</script>

<template>
  <div class="news-page">
    <header class="news-hero news-hero--index">
      <div class="news-hero__masthead">
        <p class="news-hero__eyebrow">Plot Party News</p>
        <p class="news-hero__date">Weekly microdrama market brief</p>
        <h1>AI Short Drama News, Microdrama Trends, and Creator Platform Signals</h1>
        <p class="news-hero__deck">
          A weekly digest tracking vertical drama, AI storytelling, interactive characters,
          creator platforms, and the business shifts shaping short-form entertainment.
        </p>
      </div>
    </header>

    <main class="news-layout news-layout--index">
      <section class="news-main" aria-label="Latest news issues">
        <div class="news-section-heading">
          <span>Latest Issues</span>
          <span>1 issue</span>
        </div>

        <article v-for="issue in issues" :key="issue.href" class="news-issue-card">
          <a class="news-issue-card__image-link" :href="issue.href" :aria-label="issue.title">
            <img :src="issue.image" :alt="issue.alt">
          </a>

          <div class="news-issue-card__body">
            <p class="news-story__date">{{ issue.date }}</p>
            <h2><a :href="issue.href">{{ issue.title }}</a></h2>
            <p>{{ issue.dek }}</p>
            <ul>
              <li v-for="signal in issue.signals" :key="signal">{{ signal }}</li>
            </ul>
            <a class="news-issue-card__cta" :href="issue.href">Read the full issue</a>
          </div>
        </article>
      </section>

      <aside class="news-sources" aria-label="About Plot Party News">
        <h2>About This Feed</h2>
        <p>
          Weekly reporting and analysis for AI video, microdrama, vertical series,
          and creator-platform strategy.
        </p>
      </aside>
    </main>

    <MarketingFooter />
  </div>
</template>
