/* Shared GA4 property and consent format with openstory_frontend_v2.
 * A plain deferred script is intentional: VitePress runs in MPA mode.
 */
(function () {
  'use strict';
  if (window.__plotPartyBlogAnalytics) return;
  const root = document.getElementById('blog-tracking-consent');
  if (!root) return;
  window.__plotPartyBlogAnalytics = true;

  const GA_ID = 'G-RM2QS8V0LE';
  const CONSENT_KEY = 'plotparty:tracking-consent:v1';
  const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
  const attributionKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'gbraid', 'wbraid'];
  const panel = document.getElementById('blog-cookie-panel');
  const open = document.getElementById('blog-cookie-open');
  const close = document.getElementById('blog-cookie-close');
  const accept = document.getElementById('blog-cookie-accept');
  const reject = document.getElementById('blog-cookie-reject');
  const error = document.getElementById('blog-cookie-error');
  let started = false;
  const milestones = new Set();

  function readConsent() {
    try {
      const value = JSON.parse(localStorage.getItem(CONSENT_KEY) || 'null');
      if (value && Date.now() - value.at >= 0 && Date.now() - value.at < MAX_AGE &&
          (value.choice === 'accepted' || value.choice === 'rejected')) return value.choice;
    } catch { /* Blocked or malformed storage never enables tracking. */ }
    return null;
  }

  function cleanUrl(value, keepAttribution) {
    try {
      const url = new URL(value);
      if (!['https:', 'http:'].includes(url.protocol)) return '';
      for (const key of Array.from(url.searchParams.keys())) {
        if (!keepAttribution || !attributionKeys.includes(key)) url.searchParams.delete(key);
      }
      url.hash = '';
      return url.href;
    } catch { return ''; }
  }

  function pageParameters() {
    return {
      content_group: 'blog',
      page_location: cleanUrl(window.location.href, true),
      page_title: document.title,
      page_referrer: cleanUrl(document.referrer, false)
    };
  }

  function stopTracking() {
    window['ga-disable-' + GA_ID] = true;
  }

  function track(event, params) {
    if (!started) return;
    if (readConsent() !== 'accepted') { stopTracking(); return; }
    window.gtag('event', event, Object.assign({}, pageParameters(), params, {
      send_to: GA_ID,
      transport_type: 'beacon'
    }));
  }

  function startTracking() {
    if (started || readConsent() !== 'accepted') return;
    started = true;
    window['ga-disable-' + GA_ID] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, Object.assign({}, pageParameters(), {
      send_page_view: false,
      cookie_domain: 'auto',
      cookie_path: '/'
    }));
    // Exactly one manual view per document; no GTM container or second GA tag.
    track('page_view');
    const script = document.createElement('script');
    script.id = 'blog-google-analytics';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);
  }

  function clearTrackingStorage() {
    // Same optional-tracker cleanup as the main site. Leave auth storage intact.
    for (const storage of [localStorage, sessionStorage]) {
      for (const key of Object.keys(storage)) {
        if (/^(AMP_|amplitude|invitation_visit_|invitation_visitor_|visitor_uuid|ga_purchase:)/i.test(key)) storage.removeItem(key);
      }
    }
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.split('=')[0].trim();
      if (!/^(_ga|_gid|_gat|AMP_|amplitude|os_visitor_uuid)/i.test(name)) continue;
      document.cookie = name + '=; Max-Age=0; Path=/';
      const domains = window.location.hostname.split('.');
      for (let i = 0; i < domains.length - 1; i++) {
        document.cookie = name + '=; Max-Age=0; Path=/; Domain=.' + domains.slice(i).join('.');
      }
    }
  }

  function showPanel(editing) {
    panel.hidden = false;
    close.hidden = !editing;
    open.setAttribute('aria-expanded', 'true');
    if (editing) reject.focus();
  }

  function closePanel() {
    if (readConsent() === null) return;
    panel.hidden = true;
    open.setAttribute('aria-expanded', 'false');
    open.focus();
  }

  function choose(choice) {
    // Stop an already running SDK immediately when consent is withdrawn.
    if (choice === 'rejected') stopTracking();
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, at: Date.now() }));
      if (readConsent() !== choice) throw new Error('Preference not saved');
    } catch {
      stopTracking();
      error.hidden = false;
      return;
    }
    if (choice === 'rejected') {
      try { clearTrackingStorage(); } catch { /* Reload still stops the SDK. */ }
    }
    // Matches the main site: unload all optional SDKs after a preference change.
    window.location.reload();
  }

  open.hidden = false;
  open.addEventListener('click', function () { showPanel(readConsent() !== null); });
  close.addEventListener('click', closePanel);
  accept.addEventListener('click', function () { choose('accepted'); });
  reject.addEventListener('click', function () { choose('rejected'); });
  panel.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closePanel();
  });
  window.addEventListener('storage', function (event) {
    if (event.key === CONSENT_KEY || event.key === null) {
      stopTracking();
      window.location.reload();
    }
  });
  window.addEventListener('pageshow', function (event) {
    if (readConsent() !== consent) {
      stopTracking();
      window.location.reload();
    } else if (event.persisted) {
      milestones.clear();
      track('page_view');
    }
  });

  document.addEventListener('click', function (event) {
    if (event.defaultPrevented || !(event.target instanceof Element)) return;
    const link = event.target.closest('a[href]');
    if (!link) return;
    const url = new URL(link.href, window.location.href);
    if (!['https:', 'http:'].includes(url.protocol) ||
        !['plotparty.ai', 'www.plotparty.ai', 'app.plotparty.ai'].includes(url.hostname) ||
        /^\/(blog|page)(\/|$)/.test(url.pathname)) return;
    track('blog_to_web_click', {
      link_url: cleanUrl(url.href, false),
      link_domain: url.hostname,
      link_path: url.pathname,
      link_placement: link.closest('article') ? 'article' : link.closest('header') ? 'navigation' : 'other'
    });
  });

  window.addEventListener('scroll', function () {
    const article = document.getElementById('article');
    if (!started || !article) return;
    const rect = article.getBoundingClientRect();
    if (rect.height <= 0) return;
    const percent = Math.min(100, Math.max(0, (window.innerHeight - rect.top) / rect.height * 100));
    for (const milestone of [25, 50, 75, 90]) {
      if (percent >= milestone && !milestones.has(milestone)) {
        milestones.add(milestone);
        track('blog_scroll', { percent_scrolled: milestone });
      }
    }
  }, { passive: true });

  const consent = readConsent();
  if (consent === null) showPanel(false);
  if (consent === 'accepted') startTracking();
}());
