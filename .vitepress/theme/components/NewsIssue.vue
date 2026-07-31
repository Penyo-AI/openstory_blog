<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'
import MarketingFooter from './MarketingFooter.vue'

const route = useRoute()

const issues = {
  '/news/casting-the-supplier-economy': {
    date: 'Week of July 20 - July 26, 2026',
    title: 'Casting the Supplier Economy',
    image: withBase('/images/news/casting-supplier-economy-banner-2026-w30.png'),
    alt: 'Casting the Supplier Economy - Plot Party Weekly 2026 W30',
    deck: 'Vertical drama’s fight was never whether it works but who gets cast to build it. This week, four companies spent a single afternoon supplier-shopping instead of arguing the case.',
    quickReads: [
      'Four vertical launches and deals landed in a single 24-hour window — Hollywood’s most concentrated microdrama land-grab yet.',
      'BuzzFeed handed muVpix a 100-title, two-year slate — built for shoppable, not just bingeable.',
      'vertTV opened with 200+ titles and a Fuller House reunion, pitching stars and a subscription over coin-unlock.',
      'The Daily Show is making a phone-native satire soap — legacy comedy treating vertical as a lane, not a stunt.',
      'The first audience report landed: 30% male, younger, and sitting inside a $150B market where dedicated apps are still only about $4B.'
    ],
    stories: [
      {
        date: 'JUL 22, 2026',
        title: 'BuzzFeed casts muVpix to build 100 titles',
        body: 'BuzzFeed Studios struck a two-year pact with muVpix, the vertical studio founded by producer John Lewis, to produce 100-plus microdrama titles with a cross-platform strategy spanning TikTok, Reels, YouTube Shorts, FAST/CTV, and the muVpix Originals app. The slate covers original IP, reimagined classics, and shoppable formats, opening in August with Romeo & Juliet, Reimagined, which transplants the feud into modern-day LA’s criminal underworld. BuzzFeed had quietly made 25-plus microseries in the prior 18 months; this is the scale-up.',
        why: 'BuzzFeed did not build a studio — it cast one. Renting muVpix’s production muscle to point its own audience-and-commerce machine at vertical is the template for the whole week: the valuable move is choosing a supplier, not becoming one.',
        source: 'Deadline',
        sourceTitle: 'BuzzFeed Studios & MuVpix Set 100-Title Microdrama Production Pact, Starting With “Romeo & Juliet, Reimagined”',
        href: 'https://deadline.com/2026/07/buzzfeed-studios-muvpix-microdrama-romeo-juliet-reimagined-1237000057/'
      },
      {
        date: 'JUL 22, 2026',
        title: 'vertTV wants to be prestige, not coin-unlock',
        body: 'Hollywood veterans Jeffrey Schenck, Barry Barnholtz, and Peter Sullivan debuted vertTV, a subscription mobile platform that launched with more than 200 exclusive titles and a flagship series reuniting Fuller House stars Jodie Sweetin, John Brotherton, and Marla Sokoloff. Schenck framed it as applying a traditional television network mindset to 9:16 so micro-series finally receive the star power and creative respect they deserve; Barnholtz called it the natural progression from home video to streaming to vertical.',
        why: 'vertTV’s bet is that the winning supplier sells respectability — recognizable talent and a flat subscription — rather than the cheapest unlock-by-unlock funnel. It is an attempt to put a quality ceiling on a category built on quantity.',
        source: 'IBTimes',
        sourceTitle: 'Microdrama Mania Hits Hollywood as Four New Studios and Deals Launch in a Single Day',
        href: 'https://www.ibtimes.co.uk/hollywood-embraces-vertical-microdrama-four-major-launches-1810121'
      },
      {
        date: 'JUL 22, 2026',
        title: 'Scripted-TV producers stand up a studio built only for shorts',
        body: 'Producers Alon Shtruzman and Scott Einbinder launched New Short Media, a studio devoted entirely to micro-storytelling, alongside their 5X Media banner, with director Gev Miron and writer-producer Russell Rothberg on development. It landed the same day as the BuzzFeed pact and the vertTV launch — a cluster IBTimes fairly dubbed “Microdrama Mania.”',
        why: 'When established showrunners launch a whole company to be a vertical vendor, supply-side credibility has become the scarce asset. Coincidence does not schedule itself three times before lunch — these players are all reacting to the same signal: the concept is proven, so the race is now to be the supplier someone big casts next.',
        source: 'IBTimes',
        sourceTitle: 'Microdrama Mania Hits Hollywood as Four New Studios and Deals Launch in a Single Day',
        href: 'https://www.ibtimes.co.uk/hollywood-embraces-vertical-microdrama-four-major-launches-1810121'
      },
      {
        date: 'JUL 21, 2026',
        title: 'The Daily Show goes phone-native',
        body: 'Comedy Central’s late-night franchise announced its first vertical microdrama: a serialized White House satire soap with the gloriously overlong title The Daily Show Presents: Two Billionaires Fight to Dominate the Country… And My Heart! It is shot vertically and told in short, cliffhanger-heavy episodes designed for phones.',
        why: 'Legacy comedy is treating vertical as a distribution lane, not a stunt. When an established TV brand ports its voice into 9:16 as branded satire, the format has stopped being a place unknowns go to churn and started being real estate incumbents want to occupy.',
        source: 'WDC News 6',
        sourceTitle: 'The Daily Show is making its first vertical microdrama',
        href: 'https://wdcnews6.com/the-daily-show-is-making-its-first-vertical-microdrama/'
      },
      {
        date: 'JUL 23, 2026',
        title: 'The demand was always there — now there is a report to prove it',
        body: 'Holywater Tech and management consultancy Owl & Co published The State of Microdrama 2026, the first industry report to profile the vertical-series audience, built on My Drama and My Muse product data plus a May survey of 2,737 users. Headline numbers: the 2026 vertical-video economy outside China is pegged at $150B, up 41% year over year, of which dedicated microdrama apps are only about $4B; the male share of My Drama’s monthly users jumped from 1.1% to 30.3% in seven quarters, and viewers aged 22–27 nearly tripled their share.',
        why: 'This is the casting brief the whole market will quote. A $150B pie where purpose-built apps are barely $4B tells you the audience already exists across every vertical feed — the apps did not create it, they are racing for a slice of it. The demand is proven and enormous, the supply is still tiny, and everyone can see the gap. That gap is exactly why this week looked like a land-grab.',
        source: 'Deadline',
        sourceTitle: 'Microdrama Audiences Getting Younger & More Male, Holywater Tech Report Finds',
        href: 'https://deadline.com/2026/07/microdrama-report-holywater-audience-younger-male-1237001059/'
      }
    ],
    sources: 'Deadline · IBTimes · WDC News 6 · TheWrap · GlobeNewswire'
  },
  '/news/borrowed-audience': {
    date: 'Week of July 13 - July 19, 2026',
    title: 'The Borrowed Audience',
    image: withBase('/images/news/borrowed-audience-banner-2026-w29.png'),
    alt: 'The Borrowed Audience - Plot Party Weekly 2026 W29',
    deck: 'Vertical drama’s biggest cost was never production. It was attention. This week, four companies decided to lease it instead.',
    quickReads: [
      'WWE walked into vertical with ReelShort, bringing Drew McIntyre, Joe Hendry and Jacob Fatu to an original live-action series.',
      'RoseBerry launched epis with 100+ premium vertical titles, most adapted from major TV libraries.',
      'BBC and Channel 4 formats were reworked for phones through an AI-assisted verticalization pipeline.',
      'Netflix took Good Mythical Morning same-day with YouTube, extending the franchise without removing it from its native platform.',
      'China signaled the next market fight: synthetic volume, tighter curation and new ways to allocate risk.'
    ],
    stories: [
      {
        date: 'JUL 14, 2026',
        title: 'WWE x ReelShort: the format goes looking for men',
        body: 'Vertical drama has skewed decisively female since the format found its footing. This week the biggest platform in the category signed the most reliably male fandom in American entertainment: WWE. ReelShort is producing an original live-action vertical series starring Drew McIntyre and Joe Hendry, with SmackDown’s Jacob Fatu, alongside microdrama regulars Marc Herrmann and Chase Mattson. Production starts next month, with a premiere planned for later this year.',
        why: 'This is the second time ReelShort has gone hunting for male viewers after American Sniper: The Last Round, which makes it a strategy rather than an experiment. WWE is unusually well chosen because pro wrestling already speaks the language vertical drama wants: episodic betrayal, returns, cliffhangers and an audience trained to come back next week.',
        source: 'The Hollywood Reporter',
        sourceTitle: 'WWE Gets Into Microdramas With ReelShort Collaboration',
        href: 'https://www.hollywoodreporter.com/business/business-news/wwe-microdramas-reelshort-collaboration-1236647005/'
      },
      {
        date: 'JUL 14, 2026',
        title: 'RoseBerry launches epis: 100+ titles, five library partners, day one',
        body: 'RoseBerry Media launched epis globally across the App Store, Google Play and mobile web with more than 100 titles spanning true crime, drama, reality, dating, factual and documentary. The service opens with content agreements from A+E Global Media, All3Media International, Banijay Rights, Cineflix Rights and Fremantle, plus more than 25 original vertical productions planned for 2026.',
        why: 'The catalogue is four-to-one borrowed. epis is not a studio licensing content to fill gaps; it is a new distribution window for other people’s libraries, with an originals slate attached as proof of intent. Premium TV IP is being treated like mobile inventory.',
        source: 'Advanced Television',
        sourceTitle: 'RoseBerry launches epis vertical streaming service',
        href: 'https://www.advanced-television.com/2026/07/14/roseberry-launches-epis-vertical-streaming-service/'
      },
      {
        date: 'JUL 14, 2026',
        title: 'BBC and Channel 4 formats get reversioned for vertical',
        body: 'Among epis’s adapted titles are Sexy Beasts, the BBC3 and Netflix dating format from All3Media’s Lion Television; You Can’t Kill Me, adapted from Fremantle’s Channel 4 true-crime series The Fall: Skydive Murder; and House in Flames, a vertical take on the Fremantle-produced Channel 5 thriller Heat, starring Danny Dyer. RoseBerry says its verticalization process combines human editorial with AI-enabled reframing, graphics, music, sound design, localization, metadata and QA.',
        why: 'The interesting asset here is not the shows. It is the pipeline. A repeatable reversioning process turns dormant format libraries into phone-native inventory, which means the supply of borrowable audiences is far larger than the supply of buildable ones.',
        source: 'Deadline',
        sourceTitle: 'BBC And Channel 4 Shows Repurposed For RoseBerry Media’s Epis',
        href: 'https://deadline.com/2026/07/epis-vertical-video-bbc-channel-4-series-1236980652/'
      },
      {
        date: 'JUL 17, 2026',
        title: 'Good Mythical Morning goes same-day to Netflix',
        body: 'Rhett McLaughlin and Link Neal announced a three-show partnership with Netflix. Starting September 7, the same day Good Mythical Morning premieres its thirtieth season, new episodes of GMM, Mythical Kitchen and Last Meals will arrive on Netflix the same day they publish on YouTube.',
        why: 'Netflix did not pull the franchise behind the wall. Creator-to-streamer deals used to mean migration; this one means extension. The audience stays where it is and the platform comes to it, borrowing attention without removing the original habit loop.',
        source: 'Decider',
        sourceTitle: 'When Will Good Mythical Morning Be On Netflix?',
        href: 'https://decider.com/2026/07/15/good-mythical-morning-netflix-deal/'
      },
      {
        date: 'JUL 17, 2026',
        title: 'The China read: volume stops being the constraint',
        body: 'China spent the week doing two things worth watching from the West. Hongguo is now publishing around 2,000 AI-animated shorts a day, roughly twenty times its live-action output. At the same time, the country’s two biggest short-drama platforms moved in opposite directions on who absorbs risk: Hongguo scrapped guaranteed minimums in favor of direct platform investment with revenue share from the first dollar, while Douyin added a tiered guarantee system that grades writers and scripts more like credit ratings.',
        why: 'Once volume stops being the constraint, competition moves to curation and risk allocation. That is the wall the Western market is walking toward at speed, and it explains why YouTube spent the same week talking about throttling low-quality repetitive AI content while epis bet that curated beats infinite.',
        source: 'LMTW',
        sourceTitle: 'Short drama updates, July 11-17',
        href: 'https://lmtw.com/'
      }
    ],
    sources: 'Advanced Television · Deadline · C21Media · The Hollywood Reporter · WWE Corporate · The Verge · Open Gardens · YouTube Official Blog · LMTW'
  },
  '/news/vertical-learns-to-talk-back': {
    date: 'Week of July 6 – July 12, 2026',
    title: 'Vertical Learns to Talk Back',
    image: withBase('/images/news/vertical-talks-back-banner.webp'),
    alt: 'Vertical Talks Back - Plot Party Weekly 2026 W28',
    deck: 'The week short drama stopped defending its existence and started rewriting the rules: AI characters that answer back, prestige talent chasing an HBO of vertical, and Variety finally calling it a language.',
    quickReads: [
      'Character.AI shipped microdramas whose characters talk back — the first format that turns a swipe into a conversation.',
      'Variety crowned vertical a third audiovisual language, and named seven major players discussing it on earnings calls.',
      'TechCrunch says Netflix’s binge era is fading — with microdrama named as the thing eating the minutes.',
      'Prestige-TV producers are building a premium, AI-assisted tier and calling it the HBO of vertical.',
      'A bidding war broke out over a Black gay Haitian family drama — the catalog is widening well past billionaire romance.'
    ],
    stories: [
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
    ],
    sources: 'TechCrunch · Variety · Deadline · Business Report · ChinaTechNews / The Globe and Mail'
  }
}

function normalizePath(path: string) {
  return path
    .replace(/^\/page\/blog/, '')
    .replace(/\.html$/, '')
    .replace(/\/$/, '')
}

const issue = computed(() => issues[normalizePath(route.path)] || issues['/news/casting-the-supplier-economy'])
</script>

<template>
  <div class="news-page">
    <header class="news-hero">
      <div class="news-hero__masthead">
        <p class="news-hero__eyebrow">Plot Party Dispatch</p>
        <p class="news-hero__date">{{ issue.date }}</p>
        <h1 class="news-hero__title">{{ issue.title }}</h1>
        <figure class="news-hero__banner">
          <img
            :src="issue.image"
            :alt="issue.alt"
          >
        </figure>
        <p class="news-hero__deck">{{ issue.deck }}</p>
      </div>

      <section class="news-scroll" aria-label="The 30-second scroll">
        <div class="news-scroll__header">
          <span>The 30-Second Scroll</span>
          <span>5 signals</span>
        </div>
        <ol>
          <li v-for="item in issue.quickReads" :key="item">{{ item }}</li>
        </ol>
      </section>
    </header>

    <main class="news-layout">
      <section class="news-main" aria-label="The big drop">
        <div class="news-section-heading">
          <span>The Big Drop</span>
          <a href="/page/news">All Plot Party News</a>
        </div>

        <article v-for="(story, index) in issue.stories" :key="story.title" class="news-story">
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
        <p>{{ issue.sources }}</p>
      </aside>
    </main>

    <MarketingFooter />
  </div>
</template>
