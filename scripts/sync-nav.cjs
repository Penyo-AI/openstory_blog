const fs = require('fs')
const path = require('path')

// The blog header renders the main site's Mega-Menu from .vitepress/theme/data/nav.json.
// Source of truth: https://plotparty.ai/shared-nav.json, served by openstory_frontend_v2 from
// src/components/marketing/mega-navigation.ts. Runs before every build. If the endpoint is
// unreachable, the committed snapshot is kept, so a build never fails because of it.
const SOURCE = process.env.SHARED_NAV_URL || 'https://plotparty.ai/shared-nav.json'
const target = path.join(process.cwd(), '.vitepress', 'theme', 'data', 'nav.json')

function valid(data) {
  return data && Array.isArray(data.nav) && data.nav.length > 0 && data.nav.every(group =>
    typeof group.label === 'string' && Array.isArray(group.columns) && group.columns.every(column =>
      typeof column.label === 'string' && Array.isArray(column.links) && column.links.every(link =>
        typeof link.label === 'string' && /^https:\/\/plotparty\.ai\//.test(link.href))))
}

async function main() {
  try {
    const res = await fetch(SOURCE, { signal: AbortSignal.timeout(10000) })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    if (!valid(data)) throw new Error('unexpected shape')
    fs.writeFileSync(target, JSON.stringify(data, null, 2) + '\n')
    console.log(`sync-nav: updated nav.json from ${SOURCE}`)
  } catch (error) {
    console.warn(`sync-nav: kept committed nav.json (${SOURCE}: ${error.message})`)
  }
}

main()
