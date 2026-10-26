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
- Add four model-focused guides dated 2026-10-26. They describe test procedures and workflows, not fabricated benchmark results. Model availability and export limits must be checked against the live product.
- Remove the broken YouTube iframe. Preserve the original video as a normal link and keep the full written tutorial accessible.

## Deployment and remaining dependencies

1. Deploy the rebuilt blog service **and** the updated `nginx_server/nginx.prod.conf`. The `/blog` and `/blog/` proxy locations must reach the page service. Deploying only one side leaves either the redirects or destinations unavailable.
2. Keep `/page/sitemap.xml` as the unified legacy sitemap endpoint. Its parent path is now outside `/blog`, so submit it directly through Google Search Console or advertise its absolute URL in the main site's root `robots.txt`. This repository does not own the root robots file. Search Console submission is still required.
3. Request indexing for the launch articles after deployment. Google index status and rankings quoted by the PDF have not been independently verified here.
4. Add reverse links from the main homepage and six model pages to the Studio launch guide; from `/midjourney` to its comparison article; from MCP/help/API pages to the MCP guide; and from `/ip` to the IP adaptation guide. Those source pages are maintained outside this repository.
5. Supply the original self-hosted tutorial MP4/WebM, a poster and verified upload metadata to enable a native video player plus accurate VideoObject JSON-LD. No placeholder video URL or invented upload date has been added.
6. Confirm live product limits and new template/model destinations before publishing marketing claims. New guides avoid presenting unmeasured results as benchmarks.

## Validation

```sh
npm run build
node scripts/verify-blog-seo.cjs
node scripts/verify-blog-seo.cjs http://localhost:3001
```

The audit checks all articles, including new ones: H1 uniqueness, canonical URLs, two CTAs, six model links, populated TOC, article JSON-LD, and local link/asset destinations. With an origin argument it also checks every legacy 301, destination 200, query preservation, hub redirects and retained news/landing-page routes. It can be run against production after deployment.

Browser-based visual review was unavailable because local browser use is disabled in the current Work settings. Build output and HTTP behavior were checked instead.
