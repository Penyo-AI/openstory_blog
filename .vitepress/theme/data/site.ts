export const APP_BASE_URL = 'https://plotparty.ai'

export function appUrl(path = '') {
  return `${APP_BASE_URL}${path}`
}
