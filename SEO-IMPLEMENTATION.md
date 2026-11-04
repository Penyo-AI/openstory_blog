# Blog SEO implementation

The Section 4 recommendations have been adapted to VitePress and the existing Node/Nginx deployment, rather than adding a Next.js app.

## Implemented

- Preserve all 22 original slugs, with `/page/blog/posts/:slug` returning HTTP 301 to `/blog/:slug`. The hub redirects to `/blog`. Query strings survive redirects.
- Build flattened article HTML under `/blog/`; use the new canonical URLs, sitemap entries, listing cards and cross-article links.
- Apply the specification's 22 optimized titles to both articles and listing data. Disable the automatic site-title suffix on article titles.
- Generate consistent Open Graph, Twitter, BlogPosting and breadcrumb metadata at build time.
- Add two contextual inline Studio cards, six crawlable model links, a sticky table of contents and a sticky Studio panel to every article, with a single-column mobile layout.
- Add reciprocal intent links for Seedance versions, platforms versus models, and the microdrama overview/report/monetization cluster. Shorten duplicated market and revenue sections in Microdrama 101.
- Add the script beat sheet, an explicitly hypothetical unit-economics table, a ten-point Pika comparison checklist, reference-workflow links and trope-template links.
- Add four model-focused guides dated 2026-10-26, expanded on 2026-11-04 into full production guides with specification tables, worked prompts and finishing workflows. Preserve their original URLs and publication dates.
- Give each of those four guides five visible FAQs and matching FAQPage JSON-LD generated from the same frontmatter. Render answers into the static HTML through `BlogFaq`, including in MPA builds without hydration.
- Synchronize article and listing titles, descriptions, Sophia Xing bylines, SX initials and reading times. Include revision dates in BlogPosting metadata.
- Remove the broken YouTube iframe. Preserve the original video as a normal link and keep the full written tutorial accessible.

## Deployment and remaining dependencies

1. Deploy the rebuilt blog service **and** the updated `nginx_server/nginx.prod.conf`. The `/blog` and `/blog/` proxy locations must reach the page service. Deploying only one side leaves either the redirects or destinations unavailable.
2. Keep `/page/sitemap.xml` as the unified legacy sitemap endpoint. Its parent path is now outside `/blog`, so submit it directly through Google Search Console or advertise its absolute URL in the main site's root `robots.txt`. This repository does not own the root robots file. Search Console submission is still required.
3. Request indexing for the launch articles after deployment. Google index status and rankings quoted by the PDF have not been independently verified here.
4. Add reverse links from the main homepage and six model pages to the Studio launch guide; from `/midjourney` to its comparison article; from MCP/help/API pages to the MCP guide; and from `/ip` to the IP adaptation guide. Those source pages are maintained outside this repository.
5. Supply the original self-hosted tutorial MP4/WebM, a poster and verified upload metadata to enable a native video player plus accurate VideoObject JSON-LD. No placeholder video URL or invented upload date has been added.
6. The four rewritten model guides follow the user-selected PDF specification. Keep their article metadata, listing copy and FAQ structured data synchronized when that specification changes. Model/tool pages outside this repository are managed separately.

## Four-guide rewrite: approved PDF specification

The user explicitly selected `(T2)4篇最新Blogs Rewrite.pdf` as the content specification on November 4, 2026. All four guides now use its titles, meta descriptions, model parameters and five production FAQs per article, with expanded workflows and copyable prompts.

- MiniMax H3 versus Seedance 2.5: 1–15s versus 4–30s; nine images plus three audio clips versus 30 images, ten videos and ten audio clips; millisecond scripted cuts versus continuous takes. Approved 768p H3 clips can be finished through SeedVR 2 at 1080p or 4K.
- Nano Banana 2: up to five characters and 14 objects in Studio, eight image URLs via API, 14 aspect ratios and 512px–4K output. GPT Image 2.5 uses up to 16 simultaneous references with native transparent PNG/WebP output.
- GPT Image 2.5: Flare is the speed tier, with roughly 50% lower latency than GPT Image 1.5 and a $0.02/image equivalent compute tier; Sunburst is the precision tier at $0.07/image equivalent compute. The guide includes the PDF's 16-slot packet organization, seven aspect ratios, quality tiers, four-angle 4K prompt, native alpha prop prompt and combined wardrobe/lighting edit.
- SeedVR 2: one-step diffusion restoration for video and still images, 480p/720p/768p sources, 1080p or direct 4K output, cloud access without a local GPU, and the five-point 4K inspection checklist. The 4K guide no longer describes a separate editor resize as the restoration result.

The PDF is the editorial authority for these claims. Earlier public product-page checks differed on GPT reference limits/transparency and SeedVR output/input support; this implementation follows the user's explicit choice and does not represent a new runtime benchmark.

The pet courier template at `/templates/resident-evil-pet-raccoon-city` and `/tools/consistent-character-video` returned HTTP 200. Three other suggested template URLs returned HTTP 404, so the articles use working contextual links and retain template names where relevant.

The live SeedVR 2 blog already rendered the shared five-entry navigation. All four local builds use `BlogPostLayout` and `MarketingHeader`; no separate header replacement or CDN purge was needed for this source change.

These changes are local source changes; publishing the rebuilt blog service is a separate deployment step.

## Validation

```sh
npm run build
node scripts/verify-blog-seo.cjs
node scripts/verify-blog-seo.cjs http://localhost:3001
```

The audit checks all 26 articles: H1 uniqueness, canonical URLs, two CTAs, six model links, populated TOC, article JSON-LD, and local link/asset destinations. For the four rewritten guides it also verifies five server-rendered FAQs per page, exact agreement with FAQPage JSON-LD, author identity, revision metadata, substantive article length, contextual tool/template links and listing metadata consistency. With an origin argument it also checks every legacy 301, destination 200, query preservation, hub redirects and retained news/landing-page routes. It can be run against production after deployment.

Browser-based visual review was unavailable because local browser use is disabled in the current Work settings. Build output and HTTP behavior were checked instead.
