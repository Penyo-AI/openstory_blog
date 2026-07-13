<script setup lang="ts">
import { withBase } from 'vitepress'
import MarketingFooter from './MarketingFooter.vue'

const quickReads = [
  'Character.AI shipped microdramas whose characters talk back — the first format that turns a swipe into a conversation.',
  'Variety crowned vertical a third audiovisual language, and named seven major players discussing it on earnings calls.',
  'TechCrunch says Netflix’s binge era is fading — with microdrama named as the thing eating the minutes.',
  'Prestige-TV producers are building a premium, AI-assisted tier and calling it the HBO of vertical.',
  'A bidding war broke out over a Black gay Haitian family drama — the catalog is widening well past billionaire romance.'
]

const stories = [
  {
    date: 'JUL 9, 2026',
    title: 'Character.AI’s shows talk back',
    body: 'Character.AI launched c.ai Series — a slate of AI-animated verticals including romance, horror, and survival thriller formats. Each title runs roughly ten sub-two-minute episodes, with the final two behind a paywall. The hook: after an episode, viewers 18+ can chat with, interrogate, or roleplay with the show’s characters.',
    why: 'It is the first microdrama product to fuse passive viewing with interactive AI companionship — a retention model the coin-unlock apps structurally cannot copy. Once the swipe becomes a conversation, watch time stops being the only metric that matters.',
    source: 'Variety',
    sourceTitle: 'Character.AI introduces suite of micro-series',
    href: 'https://variety.com/2026/digital/news/character-ai-introduces-suite-of-microseries-1236804864/'
  },
  {
    date: 'JUL 6, 2026',
    title: 'Netflix invented the binge. Now it’s losing the minutes.',
    body: 'A TechCrunch piece — off a Bloomberg report that Netflix viewers increasingly quit shows before Season 2 — argues the binge era is fading as Netflix now competes with TikTok, YouTube, and microdrama apps.',
    why: 'When mainstream tech press frames vertical as a structural threat to Big Streaming — not a curiosity — the narrative tailwind is real, and it is pointed at the incumbents.',
    source: 'TechCrunch',
    sourceTitle: 'Netflix invented binge-watching. Now it may have outgrown it.',
    href: 'https://techcrunch.com/2026/07/06/netflix-invented-binge-watching-now-it-may-have-outgrown-it/'
  },
  {
    date: 'JUL 8–9, 2026',
    title: 'Prestige talent wants to build the HBO of vertical',
    body: 'Tommy Harper — an EP on Wednesday and producer of Beetlejuice Beetlejuice — told Deadline he wants his AI-powered platform VeYou to become the HBO of vertical, teaming with Rivr Films on Rival Hearts.',
    why: 'Prestige-TV pedigree plus AI tooling is the emerging pitch for a premium tier in a format still known for churn and volume — an attempt to put a quality ceiling on a category built on quantity.',
    source: 'Deadline',
    sourceTitle: 'Tommy Harper Wants AI-Powered VeYou “To Become The HBO Of Vertical”',
    href: 'https://deadline.com/2026/07/tommy-harper-wants-ai-powered-veyou-become-hbo-of-vertical-1236969589/'
  },
  {
    date: 'JUL 7, 2026',
    title: 'A bidding war over a story the format usually ignores',
    body: 'Creator-first platform Inverted won E.J. Joseph’s Orevwa — a Black gay vertical drama about a young Haitian man caring for his ailing grandmother who forms an unexpected bond with a nursing instructor — after a competitive bidding process.',
    why: 'A bidding war over an identity-driven, underserved-audience story — on creator-friendly terms — is evidence the content mix is broadening well past the billionaire-CEO default as the field crowds.',
    source: 'Deadline',
    sourceTitle: 'Microdrama Platform Inverted Lands E.J. Joseph’s Series Orevwa',
    href: 'https://deadline.com/2026/07/inverted-microdrama-orevwa-ej-joseph-1236975655/'
  },
  {
    date: 'JUL 11, 2026',
    title: 'The engine room: China’s 60-second machine goes bolder',
    body: 'A Globe and Mail feature, syndicated by ChinaTechNews, profiles the Chinese production machine still powering the boom — casting directors juggling 200+ actors, premium titles wrapping in about a week, and increasingly bold plotlines as domestic competition intensifies.',
    why: 'The Western legitimacy story runs on a Chinese supply chain of speed, volume, and talent. Every prestige ambition above is still competing with — and often sourcing from — this engine.',
    source: 'ChinaTechNews / The Globe and Mail',
    sourceTitle: 'China’s microdramas go big with racy plot lines, one 60-second episode at a time',
    href: 'https://www.chinatechnews.com/2026/07/11/125342-chinas-microdramas-go-big-with-racy-plot-lines-one-60-second-episode-at-a-time'
  }
]
</script>

<template>
  <div class="news-page">
    <header class="news-hero">
      <div class="news-hero__masthead">
        <p class="news-hero__eyebrow">Plot Party Dispatch</p>
        <p class="news-hero__date">Week of July 6 – July 12, 2026</p>
        <h1 class="news-hero__title">Vertical Learns to Talk Back</h1>
        <figure class="news-hero__banner">
          <img
            :src="withBase('/images/news/vertical-talks-back-banner.webp')"
            alt="Vertical Talks Back - Plot Party Weekly 2026 W28"
          >
        </figure>
        <p class="news-hero__deck">
          The week short drama stopped defending its existence and started rewriting the rules:
          AI characters that answer back, prestige talent chasing an HBO of vertical, and
          Variety finally calling it a language.
        </p>
      </div>

      <section class="news-scroll" aria-label="The 30-second scroll">
        <div class="news-scroll__header">
          <span>The 30-Second Scroll</span>
          <span>5 signals</span>
        </div>
        <ol>
          <li v-for="item in quickReads" :key="item">{{ item }}</li>
        </ol>
      </section>
    </header>

    <main class="news-layout">
      <section class="news-main" aria-label="The big drop">
        <div class="news-section-heading">
          <span>The Big Drop</span>
          <span>Microdrama market brief</span>
        </div>

        <article v-for="(story, index) in stories" :key="story.title" class="news-story">
          <div class="news-story__number">{{ index + 1 }}</div>
          <div class="news-story__content">
            <p class="news-story__date">{{ story.date }}</p>
            <h2>{{ story.title }}</h2>
            <p>{{ story.body }}</p>
            <p><strong>Why it matters:</strong> {{ story.why }}</p>
            <a :href="story.href" target="_blank" rel="noreferrer">
              Source · {{ story.source }} · {{ story.sourceTitle }}
            </a>
          </div>
        </article>
      </section>

      <aside class="news-sources" aria-label="Sources">
        <h2>Sources</h2>
        <p>TechCrunch · Variety · Deadline · Business Report · ChinaTechNews / The Globe and Mail</p>
      </aside>
    </main>

    <MarketingFooter />
  </div>
</template>
