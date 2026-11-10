const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { decodeHTML } = require('entities');
const slugs = fs.readdirSync('posts').filter(f => f.endsWith('.md')).map(f => f.slice(0, -3));
const models = ['/seedance/2.5', '/minimax/h3', '/seedvr/2', '/midjourney', '/gpt-image/2.5', '/nano-banana/2'];
const origin = process.argv[2];
const dist = path.resolve('.vitepress/dist');
const rewrittenSlugs = [
  'minimax-h3-vs-seedance-2-5-comparison',
  'nano-banana-2-vs-gpt-image-2-5-vs-midjourney',
  'gpt-image-2-5-flare-vs-sunburst-character-sheet-guide',
  'how-to-upscale-ai-video-to-4k-seedvr-2-guide'
];
const plainText = html => decodeHTML(html.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
async function main() {
  const hub = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
  for (const slug of slugs) assert(hub.includes(`href="/blog/${slug}"`), `Hub includes ${slug}`);
  for (const filename of ['index', ...slugs]) {
    const html = fs.readFileSync(path.join(dist, `${filename}.html`), 'utf8');
    const header = html.match(/<header[\s\S]*?<\/header>/)?.[0] || '';
    for (const label of ['Product &amp; Tools', 'Models', 'Templates', 'Resources', 'Pricing', 'Contact Sales', 'Start Creating']) assert(header.includes(label), `${filename}: shared navigation ${label}`);
    assert(header.includes('/ip?contact=sales'), `${filename}: existing sales dialog destination`);
    assert.equal((html.match(/src="\/blog\/blog-analytics\.js"/g) || []).length, 1, `${filename}: one MPA analytics runtime`);
    assert.equal((html.match(/id="blog-tracking-consent"/g) || []).length, 1, `${filename}: shared cookie preference controls`);
    assert(!/<script[^>]+src="https:\/\/www\.googletagmanager\.com\//.test(html), `${filename}: no Google script before consent`);
  }
  assert.equal(fs.readFileSync(path.join(dist, 'blog-analytics.js'), 'utf8'), fs.readFileSync('public/blog-analytics.js', 'utf8'), 'built analytics runtime is current');
  for (const filename of ['news', 'seedance-2-5']) {
    const html = fs.readFileSync(path.join(dist, `${filename}.html`), 'utf8');
    assert(!html.includes('src="/blog/blog-analytics.js"'), `${filename}: blog tracking stays scoped to /blog`);
  }
  for (const slug of slugs) {
    const html = fs.readFileSync(path.join(dist, `${slug}.html`), 'utf8');
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${slug}: one H1`);
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${slug}: one canonical`);
    assert(html.includes(`href="https://plotparty.ai/blog/${slug}"`), `${slug}: canonical URL`);
    assert.equal((html.match(/class="studio-callout"/g) || []).length, 2, `${slug}: two inline CTAs`);
    assert(html.includes('class="producer-toc"'), `${slug}: table of contents`);
    const toc = html.match(/aria-label="On this page"[\s\S]*?<\/nav>/)?.[0];
    assert(toc?.includes('href="#'), `${slug}: populated table of contents`);
    assert(!html.includes('src=""'), `${slug}: no empty image sources`);
    for (const model of models) assert(html.includes(`href="https://plotparty.ai${model}"`), `${slug}: model ${model}`);
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
    assert(schemas.some(s => s['@graph']?.some(n => n['@type'] === 'BlogPosting')), `${slug}: article structured data`);
    if (rewrittenSlugs.includes(slug)) {
      const graph = schemas.flatMap(schema => schema['@graph'] || [schema]);
      const article = graph.find(node => node['@type'] === 'BlogPosting');
      const faqs = graph.filter(node => node['@type'] === 'FAQPage');
      assert.equal(faqs.length, 1, `${slug}: one FAQPage schema`);
      assert.equal(faqs[0].mainEntity.length, 5, `${slug}: five structured questions`);
      const renderedFaq = [...html.matchAll(/<section aria-labelledby="faq-question-\d+"><h3 id="faq-question-\d+">([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p><\/section>/g)];
      assert.equal(renderedFaq.length, 5, `${slug}: five questions rendered without client JavaScript`);
      assert.deepEqual(renderedFaq.map(([, question, answer]) => ({ question: plainText(question), answer: plainText(answer) })),
        faqs[0].mainEntity.map(item => ({ question: item.name, answer: item.acceptedAnswer.text })), `${slug}: visible FAQ matches structured data`);
      assert.equal(article.author.name, 'Sophia Xing', `${slug}: schema author`);
      assert.equal(article.dateModified, '2026-11-04T00:00:00.000Z', `${slug}: revision date`);
      assert(html.includes('class="blog-avatar">SX</div>'), `${slug}: author initials`);
      assert(html.includes('class="blog-post-author-name">Sophia Xing</p>'), `${slug}: visible author`);
      const body = html.match(/<article\b[\s\S]*?<\/article>/)?.[0] || '';
      assert(plainText(body).split(/\s+/).length >= 1200, `${slug}: substantial production guide`);
      assert(body.includes('<table'), `${slug}: specification or workflow comparison`);
      assert(body.includes('href="https://plotparty.ai/tools/'), `${slug}: contextual tool link`);
      assert(body.includes('href="https://plotparty.ai/templates/'), `${slug}: contextual template link`);
      const metadata = fs.readFileSync('.vitepress/theme/data/posts.ts', 'utf8');
      const listing = JSON.parse(metadata.match(new RegExp(`  \\{\\n    "slug": "${slug}"[\\s\\S]*?\\n  \\}`))[0]);
      assert.equal(listing.title, article.headline, `${slug}: listing title matches article`);
      assert.equal(listing.description, article.description, `${slug}: listing description matches article`);
      assert.equal(listing.author, article.author.name, `${slug}: listing author matches article`);
      assert(html.includes(`· ${listing.readingTime} min read`), `${slug}: reading time matches listing`);
    }
    // Validate every rendered local /blog link and asset against the build output.
    for (const [, url] of html.matchAll(/(?:href|src)="(\/blog\/[^"?#]*)/g)) {
      const relative = decodeURIComponent(url.slice('/blog/'.length));
      const file = relative ? path.join(dist, relative) : path.join(dist, 'index.html');
      assert(fs.existsSync(file) || fs.existsSync(`${file}.html`), `${slug}: local link ${url}`);
    }
    if (origin) {
      const legacy = await fetch(`${origin}/page/blog/posts/${slug}?utm_source=seo-audit`, { redirect: 'manual' });
      assert.equal(legacy.status, 301, `${slug}: legacy 301`);
      assert.equal(legacy.headers.get('location'), `/blog/${slug}?utm_source=seo-audit`, `${slug}: query preserved`);
      assert.equal((await fetch(`${origin}/blog/${slug}`)).status, 200, `${slug}: destination 200`);
    }
  }
  const tutorial = fs.readFileSync(path.join(dist, 'creating-drama-episode-plot-party-tutorial.html'), 'utf8');
  assert(!tutorial.includes('youtube.com/embed'), 'no broken YouTube iframe');
  if (origin) {
    for (const route of ['/page/blog', '/page/blog/', '/blog/']) {
      const response = await fetch(`${origin}${route}`, { redirect: 'manual' });
      assert.equal(response.status, 301); assert.equal(response.headers.get('location'), '/blog');
    }
    for (const route of ['/blog', '/page/news', '/page/news/names-on-the-marquee', '/page/seedance-2-5', '/page/sitemap.xml']) {
      assert.equal((await fetch(`${origin}${route}`)).status, 200, route);
    }
  }
  console.log(`SEO audit passed: ${slugs.length} articles${origin ? ', live redirects and section routes' : ''}.`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
