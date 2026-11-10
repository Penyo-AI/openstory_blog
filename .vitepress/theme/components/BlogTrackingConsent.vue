<template>
  <div id="blog-tracking-consent">
    <div class="blog-cookie-settings">
      <button id="blog-cookie-open" type="button" aria-controls="blog-cookie-panel" aria-expanded="false" hidden>Cookie preferences</button>
    </div>
    <section id="blog-cookie-panel" class="blog-cookie-panel" aria-labelledby="blog-cookie-title" hidden>
      <div class="blog-cookie-inner">
        <div>
          <div class="blog-cookie-heading">
            <h2 id="blog-cookie-title">Your cookie preferences</h2>
            <button id="blog-cookie-close" type="button" aria-label="Close cookie preferences" hidden>×</button>
          </div>
          <p>With your permission, we use Google Analytics to understand which articles people read and how they use Plot Party.</p>
          <details>
            <summary>How is this choice shared?</summary>
            <p>Your choice also applies on Plot Party's main website, where it controls optional analytics, marketing, session replay and error reporting. Essential site features remain available either way.</p>
          </details>
          <p id="blog-cookie-error" role="status" hidden>We couldn't save your preference. Analytics remains off. Please allow site storage and try again.</p>
        </div>
        <div>
          <div class="blog-cookie-actions">
            <button id="blog-cookie-reject" type="button">Reject optional</button>
            <button id="blog-cookie-accept" type="button">Accept optional</button>
          </div>
          <div class="blog-cookie-note">
            <span>Change your choice anytime.</span>
            <a href="https://plotparty.ai/privacy">Privacy policy</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
[hidden] { display: none !important; }
.blog-cookie-settings { text-align: center; padding: 16px 24px 24px; }
.blog-cookie-settings button { min-height: 44px; padding: 8px; color: #59616e; font-size: 13px; text-decoration: underline; text-underline-offset: 3px; cursor: pointer; }
.blog-cookie-panel { position: fixed; inset: auto 0 0; z-index: 10000; max-height: calc(100dvh - 24px); overflow-y: auto; overscroll-behavior: contain; padding: 24px max(24px, env(safe-area-inset-right)) max(24px, env(safe-area-inset-bottom)) max(24px, env(safe-area-inset-left)); border-top: 2px solid #202124; background: #fff; color: #202124; box-shadow: 0 -12px 40px #2021241a; color-scheme: light; }
.blog-cookie-inner { display: grid; grid-template-columns: minmax(0, 1fr) 340px; align-items: center; gap: 32px; max-width: 1280px; margin: 0 auto; }
.blog-cookie-heading { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.blog-cookie-heading h2 { margin: 0; font-size: 20px; font-weight: 700; line-height: 1.3; }
.blog-cookie-heading button { flex-shrink: 0; width: 44px; height: 44px; font-size: 24px; cursor: pointer; }
.blog-cookie-panel p { margin: 10px 0; font-size: 14px; line-height: 1.65; color: #59616e; }
.blog-cookie-panel details { font-size: 13px; line-height: 1.6; }
.blog-cookie-panel summary { cursor: pointer; text-decoration: underline; text-underline-offset: 3px; }
.blog-cookie-actions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.blog-cookie-actions button { min-height: 44px; padding: 12px 16px; border: 1px solid #202124; border-radius: 999px; background: #202124; color: #fff; font-size: 13px; font-weight: 600; line-height: 1.4; cursor: pointer; }
.blog-cookie-actions button:hover { background: #44474c; }
.blog-cookie-note { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 12px; margin-top: 12px; font-size: 12px; color: #59616e; }
.blog-cookie-note a { text-decoration: underline; text-underline-offset: 3px; }
#blog-tracking-consent :is(button, a, summary):focus-visible { outline: 2px solid #202124; outline-offset: 4px; }
@media (max-width: 900px) { .blog-cookie-inner { grid-template-columns: minmax(0, 1fr); gap: 20px; } }
</style>
