<script setup lang="ts">
import { withBase } from 'vitepress'
import MarketingFooter from './MarketingFooter.vue'

const issues = [
  {
    title: 'The Ownership Turn',
    href: '/page/news/the-ownership-turn',
    date: 'Week of August 17 - August 23, 2026',
    dek: 'Webtoon stocks its own shelf as vertical builds its own genres, fans, awards, and growth story.',
    image: withBase('/images/news/ownership-turn-banner-2026-w34.png'),
    alt: 'The Ownership Turn - Plot Party Weekly 2026 W34',
    signals: [
      'Webtoon adapted six owned webcomics into its first live-action Short Dramas.',
      'Reuters framed microdrama as Hollywood’s rare growth engine.',
      'US revenue is projected near $2 billion in 2027, according to Omdia.',
      'VertiCon and the Verties built a dedicated fan-and-awards weekend.',
      'FlareFlow and Shorts pushed vertical into fantasy, action, and supernatural stories.'
    ]
  },
  {
    title: 'Building Permits',
    href: '/page/news/building-permits',
    date: 'Week of August 10 - August 16, 2026',
    dek: 'Vertical spent the week buying land: a trade market, a fifty-author IP pipeline, a creator-owned studio, and a union-backed star vehicle.',
    image: withBase('/images/news/building-permits-banner-2026-w33-v2.png'),
    alt: 'Building Permits - Plot Party Weekly 2026 W33',
    signals: [
      'Y+X signed more than 50 authors and put six book properties into development.',
      'LumiView moved its first premium vertical releases to a beta rollout this fall.',
      'Vertical business convened its first dedicated trade market in Las Vegas.',
      'Sachin Kumar launched a creator-owned studio for BIPOC vertical stories.',
      'James Franco entered microdrama under SAG-AFTRA’s Verticals Agreement.'
    ]
  },
  {
    title: 'The Second-Season Economy',
    href: '/page/news/the-second-season-economy',
    date: 'Week of August 3 - August 9, 2026',
    dek: 'Vertical proved people will watch. Now returning viewers — not viral ones — are becoming the metric everyone is underwriting.',
    image: withBase('/images/news/second-season-economy-banner-2026-w32.png'),
    alt: 'The Second-Season Economy - Plot Party Weekly 2026 W32',
    signals: [
      'Disney opened its library to TikTok creators and routed the output back into Disney+.',
      'ReelShort is tracking toward $1.05 billion and its first profit at scale.',
      'A third Cora Reilly adaptation gave vertical its first real book franchise.',
      'Fallon’s debut microdrama drew 20 million views and teased a second season.',
      'Six of eight new ViX and Globoplay romance orders were microdramas.'
    ]
  },
  {
    title: 'The Retrofit Economy',
    href: '/page/news/the-retrofit-economy',
    date: 'Week of July 27 - August 2, 2026',
    dek: 'The format war is over; the retrofit has begun — incumbents are feeding vertical with catalogs, stars, ad budgets, and K-drama pipelines.',
    image: withBase('/images/news/retrofit-economy-banner-2026-w31.png'),
    alt: 'The Retrofit Economy - Plot Party Weekly 2026 W31',
    signals: [
      'HBO Max retrofitted its catalog into an AI-curated vertical feed.',
      'Fallon’s Tonight Show produced its own microdrama and beat The Daily Show to air.',
      'Omdia found iPhone viewers spend about 40% more per week than Android viewers.',
      'Blink49 and Co-op treated branded vertical as a durable business line and campaign format.',
      'Korea’s SLL shipped a vertical-native original worldwide through GoodShort.',
      'The Verge declared the vertical format war over.'
    ]
  },
  {
    title: 'Casting the Supplier Economy',
    href: '/page/news/casting-the-supplier-economy',
    date: 'Week of July 20 - July 26, 2026',
    dek: 'Vertical drama’s fight was never whether it works but who gets cast to build it. This week, four companies went supplier-shopping.',
    image: withBase('/images/news/casting-supplier-economy-banner-2026-w30.png'),
    alt: 'Casting the Supplier Economy - Plot Party Weekly 2026 W30',
    signals: [
      'Four vertical launches and deals landed in a single 24-hour window.',
      'BuzzFeed handed muVpix a 100-title, two-year slate built for shoppable vertical drama.',
      'vertTV opened with 200+ titles, recognizable talent, and a subscription pitch.',
      'The Daily Show is making a phone-native satire soap.',
      'Holywater and Owl & Co published the first report on who actually watches microdramas.'
    ]
  },
  {
    title: 'The Borrowed Audience',
    href: '/page/news/borrowed-audience',
    date: 'Week of July 13 - July 19, 2026',
    dek: 'Vertical drama’s biggest cost was never production. It was attention. This week, four companies decided to lease it instead.',
    image: withBase('/images/news/borrowed-audience-banner-2026-w29.png'),
    alt: 'The Borrowed Audience - Plot Party Weekly 2026 W29',
    signals: [
      'WWE walked into vertical with ReelShort, bringing wrestling fandom to the format.',
      'RoseBerry launched epis with 100+ premium vertical titles, mostly adapted from major TV libraries.',
      'BBC and Channel 4 formats were reworked for phones through an AI-assisted verticalization pipeline.',
      'Netflix took Good Mythical Morning same-day with YouTube.',
      'China signaled the next market fight: synthetic volume, tighter curation, and new ways to allocate risk.'
    ]
  },
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
          <span>{{ issues.length }} issues</span>
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
