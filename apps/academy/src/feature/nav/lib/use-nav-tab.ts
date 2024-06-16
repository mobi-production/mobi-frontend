import { cn } from '@repo/util'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import type { NavTexts } from '../constants/navTabs'

export const useNavTab = () => {
  const router = useRouter()
  const [landingTab, setLandingTab] = useState<string>('')

  const handleTabLogo = () => {
    router.push('/')
    setLandingTab('')
  }

  const handleTabClick = (text: NavTexts, href: string) => {
    router.push(href)
    setLandingTab(text)
  }

  const handleTabClassName = (isTargetTab: boolean) =>
    cn(
      'cursor-pointer hover:text-primary hover:font-bold text-text-body-1 px-6 py-8',
      `${isTargetTab && 'text-base font-bold text-primary leading-[120%]'}`
    )

  return { landingTab, handleTabLogo, handleTabClick, handleTabClassName }
}
