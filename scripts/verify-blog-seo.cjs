const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const slugs = fs.readdirSync('posts').filter(f => f.endsWith('.md')).map(f => f.slice(0, -3));
const models = ['/seedance/2.5', '/minimax/h3', '/seedvr/2', '/midjourney', '/gpt-image/2.5', '/nano-banana/2'];
const origin = process.argv[2];
const dist = path.resolve('.vitepress/dist');
async function main() {
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
