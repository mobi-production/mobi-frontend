export type NavTexts = '지원하기' | '프로젝트' | '갤러리'

export type NavTab = {
  text: NavTexts
  href: string
}

export const NAV_TABS: NavTab[] = [
  { text: '지원하기', href: '/apply' },
  { text: '프로젝트', href: '/' },
  { text: '갤러리', href: '/' }
]
