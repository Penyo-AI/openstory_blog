<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'
import MarketingFooter from './MarketingFooter.vue'

const route = useRoute()

const issues = {
  '/news/building-permits': {
    date: 'Week of August 10 - August 16, 2026',
    title: 'Building Permits',
    image: withBase('/images/news/building-permits-banner-2026-w33.png'),
    alt: 'Building Permits - Plot Party Weekly 2026 W33',
    deck: 'Vertical drama spent this week buying land: a trade market with its own Vegas floor, a fifty-author IP pipeline, a creator-owned studio, and a union contract with a movie star’s name on it. The format is taking on the fixed costs of a real industry.',
    quickReads: [
      'Y+X Entertainment signed more than 50 authors and screenwriters into its LumiCreator network, with six book properties already in vertical development for LumiView.',
      'Tosca Lee’s Demon is being adapted as a premium vertical series in South Korea; LumiView’s first releases now land as a beta rollout this fall.',
      'The Vertical Microdrama Market ran August 13–16 at the SAHARA in Las Vegas — the sector’s first dedicated trade market, with the Vertical Shorts Festival staged inside it.',
      'Los Angeles creator Sachin Kumar launched Prema Creative Co., a studio built to tell and distribute BIPOC stories, opening with the 14-part comedy Typecast.',
      'James Franco headlined Love, Lies & Frank on Shortical — among the first titles under SAG-AFTRA’s Verticals Agreement, made with no AI performances or digital replicas.'
    ],
    stories: [
      {
        date: 'AUG 11, 2026 · US / INTERNATIONAL',
        title: 'Y+X signs 50-plus authors and starts treating vertical as an IP incubator',
        body: 'Y+X Entertainment announced that its LumiCreator network has taken on more than 50 authors and screenwriters, including several New York Times bestselling writers, to build the content base for LumiView, its forthcoming premium vertical platform. Six properties are already in development as premium vertical adaptations: Tosca Lee’s Demon, Kathy Tyers’ Firebird, Christy Barritt’s Hidden Currents with Fear Not Productions, Lorie Langdon’s Doon, Candace Kade’s Enhanced, and Sara Ella’s The Wonderland Trials. Demon is in production in South Korea under a Korean filmmaker the company did not name. Founder and CEO Vivian Yin framed the network as a long-term partnership structure that preserves each story’s identity and can extend properties into publishing, gaming, merchandising, and live experiences. LumiView, originally pointed toward an August launch, now says its first releases will arrive in a beta rollout this fall.',
        why: 'If the IP-first thesis holds, the scarce asset in vertical shifts from user-acquisition budget to signed authors — and Y+X spent this week accumulating the latter.',
        source: 'Señal News',
        sourceTitle: 'Y+X Entertainment Expands LumiCreator Network to Strengthen LumiView’s Global IP Strategy',
        href: 'https://senalnews.com/en/content/yx-entertainment-expands-lumicreator-network-to-strengthen-lumiviews-global-ip-strategy'
      },
      {
        date: 'AUG 13–16, 2026 · LAS VEGAS',
        title: 'The format convenes its own market in Las Vegas',
        body: 'The Vertical Microdrama Market ran August 13–16 at the SAHARA Las Vegas, presented by Magnificent Motion Picture Works. Its program covered the full transactional stack: platforms and distributors, producers and showrunners, financiers, writers and IP owners, casting and talent agencies, post-production vendors, AI and production-technology companies, project pitches, acquisitions, workshops, and panels. The Vertical Shorts Festival screened as a component of the market. Organizers position VMM as vertical’s answer to the American Film Market and as the first large-scale marketplace dedicated exclusively to the format. A first edition does not carry AFM’s scale, but the venue shift is real: vertical business that previously rented space inside broader film, television, and creator conferences now has a room and calendar slot of its own.',
        why: 'A sector gets its own market when its transactions stop fitting on someone else’s floor — and vertical’s deal-making now has a dedicated venue.',
        source: 'Eventbrite',
        sourceTitle: 'Vertical Microdrama Market (VMM) 2026 Las Vegas',
        href: 'https://www.eventbrite.com/e/vertical-microdrama-market-vmm-2026-las-vegas-tickets-1988025380429'
      },
      {
        date: 'AUG 10, 2026 · US',
        title: 'A creator with an audience builds the studio instead of pitching one',
        body: 'Los Angeles creator Sachin Kumar, who posts as SCKACHI, launched Prema Creative Co. with Typecast, a 14-part vertical comedy rolling out two episodes weekly from September 7. The series follows a fictionalized version of Kumar — an Indian-American actor navigating Hollywood as he confronts typecasting, ambition, and identity — with Grayson Shapiro making his directorial debut. Kumar has positioned the company as a studio built to tell and distribute BIPOC stories while giving that talent creative control and ownership. Instead of moving from platform to production company to paid acquisition, Kumar starts with an audience he already has, develops the IP inside his own company, and releases serialized vertical episodes directly to social feeds.',
        why: 'This is a second supply route into vertical, and it runs entirely outside the apps — the audience, the IP, and the distribution all sit with the creator.',
        source: 'Deadline',
        sourceTitle: 'L.A. Creator Sachin Kumar Launches Prema Creative Co. With Vertical Comedy Series About Indian-American Actor in Hollywood',
        href: 'https://deadline.com/2026/08/sachin-kumar-typecast-vertical-video-company-launch-1237030140/'
      },
      {
        date: 'AUG 12, 2026 · US',
        title: 'James Franco headlines a vertical title under a union agreement, with AI ruled out',
        body: 'James Franco stars in Love, Lies & Frank on Shortical, playing the CEO of a high-powered ad agency contending with criminal and supernatural threats while an ambitious employee reignites a forbidden romance with his stepbrother. He shares the screen with established microdrama leads Eric Guilmette and Neela Jolene. Eric Wang Schwager directs from a script by Melissa Lynn Moore; Knockout Shorts produced with Peter Gold of Gold Films. The title is among the first microdramas made under SAG-AFTRA’s Verticals Agreement, moving the format’s labor terms onto a standing contract. The production also states that no AI-generated performances or digital replicas were used.',
        why: 'A named film actor working under a union agreement with AI performance explicitly excluded gives premium vertical a concrete case for treating human casting as a product feature.',
        source: 'Variety',
        sourceTitle: 'James Franco Stars in Love, Lies & Frank Microdrama on Shortical',
        href: 'https://variety.com/2026/tv/news/james-franco-microdrama-love-lies-frank-shortical-1236832770/'
      }
    ],
    sources: 'Señal News · Deadline · Variety · Michael Fairman TV · TheWrap · Eventbrite · Vertical Shorts Festival'
  },
  '/news/the-second-season-economy': {
    date: 'Week of August 3 - August 9, 2026',
    title: 'The Second-Season Economy',
    image: withBase('/images/news/second-season-economy-banner-2026-w32.png'),
    alt: 'The Second-Season Economy - Plot Party Weekly 2026 W32',
    deck: 'Vertical already proved people will watch. This week it started proving they’ll come back — and the returning viewer, not the viral one, is suddenly what everyone is underwriting.',
    quickReads: [
      'Disney handed its library to TikTok creators and pointed the output back into its own feed — fandom as a renewable content supply.',
      'ReelShort is on track for $1.05B and its first profit, and the margin came from routing around the app-store toll booth.',
      'The same company turned a mafia-romance novel series into its third adaptation — vertical’s first real book franchise.',
      'Fallon’s microdrama did 20 million views in a week and ended on “To Be Continued.” Late night just found a growth channel.',
      'In Latin America, six of eight new romance orders from ViX and Globoplay were microdramas. The telenovela habit is doing the onboarding.'
    ],
    stories: [
      {
        date: 'AUG 5, 2026',
        title: 'Disney lends out the vault — and takes the output back',
        body: 'Disney and TikTok struck a first-of-its-kind global content-sharing deal: opted-in creators get licensed access to assets from hundreds of films and series across Disney, Pixar, Marvel, Star Wars, and FX, and the videos they make live in two places — on TikTok and inside Verts, the vertical feed Disney+ launched in March. A Creator Ambassador Program formalizes the pipeline. The US pilot lands first, with other markets to follow.',
        why: 'The scarce asset in vertical is continuous supply. Disney just found a way to rent it from its own audience and keep the fandom loop closed inside its app.',
        source: 'Variety',
        sourceTitle: 'Disney, TikTok Strike Content-Sharing Deal Aimed at Boosting Short-Form Programming on Disney+',
        href: 'https://variety.com/2026/tv/news/disney-tiktok-content-sharing-deal-short-form-video-1236828069/'
      },
      {
        date: 'AUG 6, 2026',
        title: 'ReelShort’s billion-dollar year — and the toll booth it stopped paying',
        body: 'Media Partners Asia projects ReelShort will post $1.05 billion in revenue in 2026, up 34%, and swing from a roughly $12 million net loss in 2025 to about $40 million net profit and $63 million EBITDA — the format’s first profit at real scale. The revenue curve is steep and short: $97 million in 2023, $400 million in 2024, and $785 million in 2025, with $1.4 billion and $1.7 billion forecast for 2027 and 2028. Outside China, MPA sizes the microdrama market at $3.6 billion this year, reaching $9.5 billion by 2031. Marketing is forecast to fall from 55% of revenue in 2025 to 44% by 2028, with direct billing, telecom-bundled acquisition, recognizable franchises, and faster creative testing driving the shift.',
        why: 'Vertical’s unit economics were leased. The first profitable operator at scale is the one that bought its own distribution instead of renting it by the install.',
        source: 'Variety',
        sourceTitle: 'ReelShort on Track for $1.05 Billion Revenue, First Profit at Scale in 2026, Media Partners Asia Report Finds',
        href: 'https://variety.com/2026/tv/news/reelshort-1-billion-revenue-profit-2026-mpa-1236828885/'
      },
      {
        date: 'AUG 5, 2026',
        title: 'A mafia-romance novel becomes vertical’s first real book franchise',
        body: 'ReelShort set Bound by Duty, adapted from Cora Reilly’s Born in Blood Mafia Chronicles, for an August 13 release, starring Casey Schryer and Chase Mattson. It is the third title the platform has pulled from the same series: Bound by Honor has topped 423 million views, and Bound by Love has cleared 70 million since May.',
        why: 'When the sequel is the business model, catalog depth beats hit rate — and platforms start competing for series rights, not scripts.',
        source: 'Deadline',
        sourceTitle: 'Cora Reilly’s “Bound by Duty” Set As ReelShort Mafia Microdrama',
        href: 'https://deadline.com/2026/08/reelshort-adapts-bound-by-duty-cora-reilly-born-in-blood-1237018397/'
      },
      {
        date: 'AUG 4, 2026',
        title: '20 million views in a week, and a “To Be Continued”',
        body: 'Before airing the final two installments of Who Billionaire? Me Billionaire, Jimmy Fallon announced that the first eight episodes of The Tonight Show’s debut microdrama had drawn more than 20 million views in a single week. The finale closed on a “To Be Continued” card; Fallon has hinted at a second season. The series ran across the show’s social accounts and Peacock’s microdrama section.',
        why: 'Microdrama’s most useful role for legacy TV may not be a new revenue line at all — it is the cheapest audience-acquisition channel a broadcast brand currently owns.',
        source: 'LateNighter',
        sourceTitle: 'Fallon Says “Tonight Show” Microdrama Drew 20 Million Views, Teases 2nd Season',
        href: 'https://latenighter.com/news/fallon-microdrama-second-season/'
      },
      {
        date: 'AUG 3, 2026',
        title: 'Latin America’s commissioners quietly went vertical',
        body: 'New Ampere Analysis data shows romance became Latin America’s most-commissioned scripted genre in the first half of 2026, at 30% of orders — up from fifth place a year earlier, with commissions more than doubling to 25 new first-run shows against an overall scripted market that contracted 13%. The pointed detail: ViX and Globoplay each ordered four romance titles, and six of those eight were microdramas. ViX now runs a dedicated short-form section called MicrO.',
        why: 'Overseas growth is no longer a synonym for English-language US titles. Spanish-language vertical is becoming its own commissioning lane — and it inherited its audience instead of buying it.',
        source: 'Señal News',
        sourceTitle: 'Romance Becomes Latin America’s Top Scripted TV Genre as Microdramas Drive New Growth',
        href: 'https://senalnews.com/en/data/romance-becomes-latin-americas-top-scripted-tv-genre-as-microdramas-drive-new-growth'
      }
    ],
    sources: 'Variety · Deadline · LateNighter · Señal News (Ampere Analysis) · The Walt Disney Company · Media Partners Asia'
  },
  '/news/the-retrofit-economy': {
    date: 'Week of July 27 - August 2, 2026',
    title: 'The Retrofit Economy',
    image: withBase('/images/news/retrofit-economy-banner-2026-w31.png'),
    alt: 'The Retrofit Economy - Plot Party Weekly 2026 W31',
    deck: 'The format war is over; the retrofit has begun — this week the incumbents fed vertical with what they already owned: catalogs, star benches, ad budgets, and K-drama pipelines.',
    quickReads: [
      'HBO Max became the last major US streamer to go vertical, retrofitting its catalog into an AI-curated feed of clips it already owned.',
      'Late-night got there first on originals: Fallon’s Tonight Show produced its own microdrama with its own stars and beat The Daily Show to air.',
      'Omdia put a number on the wallet: iPhone viewers spend about 40% more per week than Android viewers, making device and geography real UA variables.',
      'Brands stopped buying placement and started producing the show: Blink49 built a branded-vertical business line, while Co-op turned a four-part microdrama into its ad campaign.',
      'Korea’s SLL used GoodShort as a pure distribution pipe — a legacy drama studio shipping vertical-native content straight to a global app.',
      'The Verge stopped hedging and called the format war over; the fight has moved to who owns the attention.'
    ],
    stories: [
      {
        date: 'JUL 28, 2026',
        title: 'HBO Max bolts a vertical, AI-curated feed onto its catalog',
        body: 'Warner Bros. Discovery shipped two mobile discovery features on the same day: HBO Max Shorts, a TikTok-style vertical feed, and Ask HBO Max, a conversational search tool. The Shorts feed is testing with select US iOS users — and none of it is original vertical drama. The clips are trailers, bonus material, and “iconic scenes” pulled from the existing library by an in-house AI that reads scene-level metadata; human editors pick which to verticalize. The feed exists to funnel viewers back into a full-length title — the same logic Netflix runs with its Clips feed.',
        why: 'The last holdout streamer converting does not validate vertical drama — it validates vertical as interface. The strategic move was retrofitting a decade of 16:9 library into a scrollable, AI-ranked feed. For anyone selling original vertical to the majors, the competitor is now the streamer’s own back catalog, re-cut by a model for free.',
        source: 'The Hollywood Reporter',
        sourceTitle: 'HBO Max Dips Toe Into Vertical Video With “HBO Max Shorts”',
        href: 'https://www.hollywoodreporter.com/tv/tv-news/hbo-max-shorts-vertical-video-new-ai-driven-features-1236658099/'
      },
      {
        date: 'JUL 27, 2026',
        title: 'Fallon’s Tonight Show produces its own microdrama — and beats The Daily Show to air',
        body: 'The Tonight Show Starring Jimmy Fallon debuted “Who Billionaire? Me Billionaire.,” a satirical vertical soap whose first two episodes aired in the July 27 broadcast before rolling out to the show’s socials and Peacock. Written by head writer A.D. Miles, it stars Fallon as an entitled billionaire, John Stamos as a mysterious outsider, and short-drama regulars including Kasey Esser and Delaney Rowe. It is billed as the first US late-night brand to produce and premiere its own microdrama in-house, and it edged out The Daily Show’s previously announced entry to air first.',
        why: 'Legacy TV is extending into vertical, treating microdrama as spin-off inventory for the IP and stars it already owns. The genre choice is just as telling: comedy and parody, a deliberate step away from the CEO, werewolf, and revenge tropes that fill the apps. The real test ahead is whether the format can carry an incumbent’s own comedic voice, not only the category’s house style.',
        source: 'BroadwayWorld',
        sourceTitle: 'The Tonight Show to Debut Microdrama “Who Billionaire? Me Billionaire.”',
        href: 'https://www.broadwayworld.com/bwwtv/article/THE-TONIGHT-SHOW-to-Debut-Microdrama-WHO-BILLIONAIRE-ME-BILLIONAIRE-20260728'
      },
      {
        date: 'JUL 28, 2026',
        title: 'Omdia: iPhone viewers spend about 40% more on microdramas than Android',
        body: 'New Omdia consumer research, fielded in April 2026 and paired with Sensor Tower data, finds iPhone users spend about $14 per week on microdrama apps versus roughly $10 for Android. Usage rates in the US are now close across platforms — about 9% of iPhone and 10% of Android users tried a microdrama app in the prior three months — with payer share around 69% on iOS and 68% on Android. In Germany, payer share drops to 49% and 44%.',
        why: 'User-acquisition math cannot be run on install cost alone. Device, region, payment behavior, and lifetime value are becoming the variables that matter. In the US, iOS usage roughly matches Android’s while spend per user runs higher — which reshapes where the paid-UA dollars should point.',
        source: 'Advanced Television',
        sourceTitle: 'Research: iPhone users watched 40% more Microdramas than Android',
        href: 'https://www.advanced-television.com/2026/07/28/research-iphone-users-watched-40-more-microdramas-than-android/'
      },
      {
        date: 'JUL 27, 2026 · US / CANADA',
        title: 'Blink49 folds branded vertical into a single business line',
        body: 'Blink49 Studios promoted Tara Long to lead a new Studio Ventures unit spanning unscripted, vertical video, brand-funded entertainment, and its Creator Studios arm. The company flagged that its brand-studio microdrama “Murder at the Mansion” is being built with Uber Eats. The project itself was announced earlier; the July 27 news is structural — Blink49 putting brand investment, digital content, vertical production, and commercial partnerships under one roof.',
        why: 'Like Co-op below, this signals microdrama being packaged as a durable branded-entertainment product line with its own org chart. Production companies are building permanent teams around brand-funded verticals — a sign the money expects recurring business here.',
        source: 'Deadline',
        sourceTitle: 'Tara Long Promoted At Blink49 Studios To Oversee New Ventures',
        href: 'https://deadline.com/2026/07/tara-long-blink49-studios-studio-ventures-1237002959/'
      },
      {
        date: 'JUL 29, 2026',
        title: 'The UK’s Co-op turns a microdrama into the ad campaign',
        body: 'Grocery retailer Co-op, with Carat UK and Platform Media, launched “Pop to Co-op,” a four-part comedy microdrama — its first use of the format for marketing. Starring comedian Jake Bhardwaj and running across TikTok, Instagram, Facebook, and YouTube Shorts, each episode starts as a mundane convenience run and escalates into hyperbolic comedy. Notably, earned attention is the strategic objective, with paid media used only to fuel participation.',
        why: 'This is not product placement inside a microdrama app — it is a brand making the microdrama the campaign’s core asset. A second Western model is taking shape alongside the app economy: brand-funded, distributed free on social, and measured through reach and engagement.',
        source: 'dentsu',
        sourceTitle: 'Co-op, Carat UK and Platform Media bring the microdrama trend to grocery retail with “Pop to Co-op”',
        href: 'https://www.dentsu.com/uk/en/media-and-investors/coop-carat-uk-and-platform-media-bring-the-microdrama-trend-to-grocery-retail'
      },
      {
        date: 'JUL 30, 2026',
        title: 'Korea’s SLL enters global microdrama through GoodShort',
        body: 'Major Korean studio SLL unveiled its first original microdrama, “Code Name: Villain Stepmom,” with global app GoodShort — 60 episodes at about 90 seconds each, live worldwide on GoodShort since July 22 and pushed to trade press July 30. The fantasy premise follows a former agent reincarnated as a villainous stepmother inside a 1980s drama.',
        why: 'Asian long-form studios are starting to treat international microdrama apps as standalone distribution channels. For Western platforms, that means more content built directly for global short-drama audiences, carrying K-drama production values and East Asian web-novel setups — sharpening the supply side of the market.',
        source: 'Señal News',
        sourceTitle: 'SLL steps into short-form market with global micro-drama debut “Code Name: Villain Stepmom”',
        href: 'https://senalnews.com/en/content/sll-steps-into-short-form-market-with-global-micro-drama-debut-code-name-villain-stepmom'
      },
      {
        date: 'JUL 29–30, 2026',
        title: 'The Verge stops hedging: “the vertical video takeover is here”',
        body: 'In a column tying the week’s threads together, The Verge argued TikTok’s vertical format has spread across YouTube, Instagram, streaming, and effectively every major platform as products converge on mobile-first viewing. Its framing is blunt: the format war is decided; what is left is the fight over who owns the audience once they are there.',
        why: 'Once mainstream tech press treats vertical as settled infrastructure, the narrative window shifts. The question is no longer whether audiences will accept vertical, but who captures the attention now that everyone has a feed — reframing every 2026 pitch around distribution and attention.',
        source: 'The Verge',
        sourceTitle: 'The vertical video takeover is here',
        href: 'https://www.theverge.com/column/970756/vertical-video-tiktok-youtube-instagram-streaming-facebook'
      }
    ],
    sources: 'The Hollywood Reporter · Warner Bros. Discovery Pressroom · BroadwayWorld · LateNighter · Omdia via Advanced Television and Señal News · Deadline · Variety · dentsu · Prolific North · FormatBiz · The Verge · The Vertical Bloom (Open Gardens)'
  },
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

const issue = computed(() => issues[normalizePath(route.path)] || issues['/news/building-permits'])
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
          <span>{{ issue.quickReads.length }} signals</span>
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
