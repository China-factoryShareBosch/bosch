import defaultSettings from '@/settings'

const title = defaultSettings.title || 'CC-AT/IB2 NJP'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
