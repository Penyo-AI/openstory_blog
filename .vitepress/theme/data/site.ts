export const APP_BASE_URL = 'https://app.plotparty.ai'

export function appUrl(path = '') {
  return `${APP_BASE_URL}${path}`
}
