<template>
  <footer class="marketing-footer" aria-label="Social links">
    <div class="marketing-footer__inner">
      <a
        href="https://discord.gg/MwDgZzweMc"
        target="_blank"
        rel="noreferrer"
        class="marketing-footer__link"
        aria-label="Join our Discord server"
      >
        <svg class="marketing-footer__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      </a>

      <a
        href="mailto:sophia@plotparty.ai"
        class="marketing-footer__link"
        aria-label="Send email to sophia@plotparty.ai"
      >
        <svg class="marketing-footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6.75h16a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8.5a1 1 0 0 1 1-1Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="m4 8 8 5 8-5" />
        </svg>
      </a>

      <a
        href="https://cal.com/sophia-xing/plot-party-onboarding-fridays"
        target="_blank"
        rel="noreferrer"
        class="marketing-footer__link"
        aria-label="Schedule a meeting"
      >
        <svg class="marketing-footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <rect x="3.75" y="4.75" width="16.5" height="15.5" rx="2" />
          <path stroke-linecap="round" d="M8 3.75v3M16 3.75v3M3.75 9.5h16.5" />
        </svg>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.marketing-footer {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding: 0;
}

.marketing-footer__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid rgba(229, 231, 235, 0.8);
  border-radius: 1rem;
  background: rgba(243, 244, 246, 0.9);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(8px);
  padding: 8px 16px;
}

.marketing-footer__link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: #374151;
  text-decoration: none;
  transition: color 0.2s ease;
}

.marketing-footer__link:hover {
  color: #2563eb;
}

.marketing-footer__icon {
  width: 24px;
  height: 24px;
  transition: transform 0.2s ease;
}

.marketing-footer__link:hover .marketing-footer__icon {
  transform: scale(1.1);
}
</style>
