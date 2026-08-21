export const APP_BASE_URL = 'https://plotparty.ai'
export const SIGNUP_URL = `${APP_BASE_URL}/home?auth=register`
export const SUBSCRIBE_URL = `${APP_BASE_URL}/home?subscribe=1`

export function appUrl(path = '') {
  if (path === '/home') return SIGNUP_URL
  return `${APP_BASE_URL}${path}`
}
