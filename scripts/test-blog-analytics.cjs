const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const source = fs.readFileSync('public/blog-analytics.js', 'utf8');
const KEY = 'plotparty:tracking-consent:v1';
const GA_ID = 'G-RM2QS8V0LE';

function setup({ choice = null, raw, blocked = false, noRoot = false, href = 'https://plotparty.ai/blog/example?utm_source=google&token=private&email=private%40example.com#secret' } = {}) {
  const listeners = new Map();
  function events(target) {
    return {
      addEventListener(name, fn) {
        const key = target + ':' + name;
        listeners.set(key, [...(listeners.get(key) || []), fn]);
      }
    };
  }
  class Element {
    constructor(id) {
      this.id = id;
      this.hidden = true;
      this.attributes = {};
      Object.assign(this, events(id));
    }
    setAttribute(name, value) { this.attributes[name] = value; }
    focus() { document.activeElement = this; }
    closest(selector) { return selector === 'a[href]' ? this.link || null : null; }
    getBoundingClientRect() { return { top: this.top ?? 0, height: this.height ?? 1000 }; }
  }
  const ids = ['blog-tracking-consent', 'blog-cookie-panel', 'blog-cookie-open', 'blog-cookie-close', 'blog-cookie-accept', 'blog-cookie-reject', 'blog-cookie-error', 'article'];
  const elements = Object.fromEntries(ids.map(id => [id, new Element(id)]));
  const scripts = [];
  const cookieWrites = [];
  const document = {
    ...events('document'), title: 'Example article',
    referrer: 'https://plotparty.ai/home?email=private@example.com#private',
    getElementById: id => noRoot && id === 'blog-tracking-consent' ? null : elements[id],
    createElement: () => ({}),
    head: { appendChild: script => scripts.push(script) },
    get cookie() { return '_ga=123; _ga_RM2QS8V0LE=456; auth_session=keep'; },
    set cookie(value) { cookieWrites.push(value); }
  };
  function storage(initial = {}) {
    const result = { ...initial };
    Object.defineProperties(result, {
      getItem: { value(key) { if (blocked) throw new Error('blocked'); return result[key] ?? null; } },
      setItem: { value(key, value) { if (blocked) throw new Error('blocked'); result[key] = value; } },
      removeItem: { value(key) { delete result[key]; } }
    });
    return result;
  }
  const localStorage = storage({
    ...(raw !== undefined ? { [KEY]: raw } : choice ? { [KEY]: JSON.stringify({ choice, at: Date.now() }) } : {}),
    'ga_purchase:old': '1', auth_token: 'keep'
  });
  const sessionStorage = storage({ amplitude_session: 'old', auth_session: 'keep' });
  let reloads = 0;
  const location = new URL(href);
  location.reload = () => { reloads++; };
  const window = { ...events('window'), location, innerHeight: 500 };
  const context = vm.createContext({ window, document, localStorage, sessionStorage, URL, Element });
  const run = () => vm.runInContext(source, context);
  const emit = (target, name, event = {}) => (listeners.get(target + ':' + name) || []).forEach(fn => fn(event));
  run();
  const calls = () => JSON.parse(JSON.stringify((window.dataLayer || []).map(entry => Array.from(entry))));
  return { window, document, localStorage, sessionStorage, elements, scripts, cookieWrites, run, emit, calls, reloads: () => reloads, Element };
}

for (const [name, options] of [
  ['missing choice', {}],
  ['rejection', { choice: 'rejected' }],
  ['expired choice', { raw: JSON.stringify({ choice: 'accepted', at: Date.now() - 181 * 86400000 }) }],
  ['future choice', { raw: JSON.stringify({ choice: 'accepted', at: Date.now() + 86400000 }) }],
  ['invalid JSON', { raw: '{invalid' }],
  ['blocked storage', { choice: 'accepted', blocked: true }]
]) test(`${name}: no Google script, config or event`, () => {
  const env = setup(options);
  assert.equal(env.scripts.length, 0);
  assert.deepEqual(env.calls(), []);
  env.emit('window', 'scroll');
  assert.deepEqual(env.calls(), []);
});

test('existing main-site consent loads one GA tag and one sanitized blog page view', () => {
  const env = setup({ choice: 'accepted' });
  env.run();
  env.emit('window', 'pageshow', { persisted: false });
  assert.equal(env.scripts.length, 1);
  assert.equal(env.scripts[0].src, `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
  const config = env.calls().filter(call => call[0] === 'config');
  const views = env.calls().filter(call => call[1] === 'page_view');
  assert.equal(config.length, 1);
  assert.equal(config[0][2].send_page_view, false);
  assert.equal(config[0][2].cookie_path, '/');
  assert.equal(config[0][2].cookie_domain, 'auto');
  assert.equal(views.length, 1);
  for (const params of [config[0][2], views[0][2]]) {
    assert.equal(params.content_group, 'blog');
    assert.equal(params.page_location, 'https://plotparty.ai/blog/example?utm_source=google');
    assert.equal(params.page_referrer, 'https://plotparty.ai/home');
    assert(!JSON.stringify(params).includes('private'));
  }
  assert.equal(env.elements['blog-cookie-panel'].hidden, true);
  assert.equal(env.elements['blog-cookie-open'].hidden, false);
});

test('a first-time visitor can accept using the main-site preference format', () => {
  const env = setup();
  assert.equal(env.elements['blog-cookie-panel'].hidden, false);
  assert.equal(env.elements['blog-cookie-close'].hidden, true);
  env.emit('blog-cookie-accept', 'click');
  const saved = JSON.parse(env.localStorage.getItem(KEY));
  assert.equal(saved.choice, 'accepted');
  assert.equal(typeof saved.at, 'number');
  assert.equal(env.reloads(), 1);
  assert.equal(setup({ raw: JSON.stringify(saved) }).scripts.length, 1);
});

test('withdrawing consent disables GA, clears tracking only, and reloads', () => {
  const env = setup({ choice: 'accepted' });
  env.emit('blog-cookie-open', 'click');
  assert.equal(env.elements['blog-cookie-panel'].hidden, false);
  assert.equal(env.document.activeElement.id, 'blog-cookie-reject');
  env.emit('blog-cookie-reject', 'click');
  assert.equal(env.window[`ga-disable-${GA_ID}`], true);
  assert.equal(JSON.parse(env.localStorage.getItem(KEY)).choice, 'rejected');
  assert.equal(env.localStorage.getItem('ga_purchase:old'), null);
  assert.equal(env.sessionStorage.getItem('amplitude_session'), null);
  assert.equal(env.localStorage.getItem('auth_token'), 'keep');
  assert.equal(env.sessionStorage.getItem('auth_session'), 'keep');
  assert(env.cookieWrites.some(cookie => cookie.includes('Domain=.plotparty.ai')));
  assert(env.cookieWrites.every(cookie => !cookie.includes('auth_session')));
  assert.equal(env.reloads(), 1);
  const before = env.calls().length;
  env.emit('window', 'scroll');
  assert.equal(env.calls().length, before);
});

test('blocked preference writes leave GA off and show an accessible error', () => {
  const env = setup({ blocked: true });
  env.emit('blog-cookie-accept', 'click');
  assert.equal(env.scripts.length, 0);
  assert.equal(env.elements['blog-cookie-error'].hidden, false);
  assert.equal(env.reloads(), 0);
});

test('Escape closes preference editing and returns focus to the opener', () => {
  const env = setup({ choice: 'rejected' });
  env.emit('blog-cookie-open', 'click');
  env.emit('blog-cookie-panel', 'keydown', { key: 'Escape' });
  assert.equal(env.elements['blog-cookie-panel'].hidden, true);
  assert.equal(env.document.activeElement.id, 'blog-cookie-open');
  assert.equal(env.elements['blog-cookie-open'].attributes['aria-expanded'], 'false');
});

test('main-site CTA clicks are separate from blog navigation and strip destination queries', () => {
  const env = setup({ choice: 'accepted' });
  for (const href of ['https://plotparty.ai/home?auth=register#private', 'https://plotparty.ai/blog/another', 'https://plotparty.ai/page/news', 'https://example.com/tools', 'mailto:private@example.com']) {
    const target = new env.Element('link-child');
    target.link = { href, closest: selector => selector === 'article' ? {} : null };
    env.emit('document', 'click', { target });
  }
  const clicks = env.calls().filter(call => call[1] === 'blog_to_web_click');
  assert.equal(clicks.length, 1);
  assert.equal(clicks[0][2].content_group, 'blog');
  assert.equal(clicks[0][2].link_url, 'https://plotparty.ai/home');
  assert.equal(clicks[0][2].link_placement, 'article');
  assert.equal(clicks[0][2].transport_type, 'beacon');
});

test('article reading milestones fire only once each', () => {
  const env = setup({ choice: 'accepted' });
  env.emit('window', 'scroll');
  env.emit('window', 'scroll');
  env.elements.article.top = -500;
  env.emit('window', 'scroll');
  env.emit('window', 'scroll');
  const scrolls = env.calls().filter(call => call[1] === 'blog_scroll');
  assert.deepEqual(scrolls.map(call => call[2].percent_scrolled), [25, 50, 75, 90]);
});

test('cross-tab changes and clearing storage stop the loaded SDK before reloading', () => {
  for (const key of [KEY, null]) {
    const env = setup({ choice: 'accepted' });
    env.emit('window', 'storage', { key });
    assert.equal(env.window[`ga-disable-${GA_ID}`], true);
    assert.equal(env.reloads(), 1);
  }
});

test('a cached page adopts consent changes made on the main site', () => {
  for (const [before, after] of [['rejected', 'accepted'], ['accepted', 'rejected']]) {
    const env = setup({ choice: before });
    env.localStorage.setItem(KEY, JSON.stringify({ choice: after, at: Date.now() }));
    env.emit('window', 'pageshow', { persisted: true });
    assert.equal(env.reloads(), 1);
    assert.equal(env.window[`ga-disable-${GA_ID}`], true);
  }
});

test('restoring an accepted cached page counts a new visit without loading another SDK', () => {
  const env = setup({ choice: 'accepted' });
  env.emit('window', 'pageshow', { persisted: true });
  assert.equal(env.scripts.length, 1);
  assert.equal(env.calls().filter(call => call[1] === 'page_view').length, 2);
});

test('pages without the blog consent component do not initialize analytics', () => {
  const env = setup({ choice: 'accepted', noRoot: true });
  assert.equal(env.scripts.length, 0);
  assert.deepEqual(env.calls(), []);
});
