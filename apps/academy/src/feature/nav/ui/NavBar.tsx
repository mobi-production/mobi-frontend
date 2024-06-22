'use client'

import type { NavTab } from '@/feature/nav/constants'
import { NAV_TABS } from '@/feature/nav/constants'
import { useNavTab } from '@/feature/nav/lib'
import { Nav } from '@/widget/nav/Nav'

export function NavBar() {
  const { landingTab, handleTabLogo, handleTabClick, handleTabClassName } = useNavTab()
  const handleTapClick = (tab: NavTab) => () => {
    handleTabClick(tab.text, tab.href)
  }

  return (
    <Nav
      logo={
        <Nav.Logo
          intent='empty'
          className='absolute left-[10rem] top-3 text-center text-green'>
          <span
            className='cursor-pointer text-text-heading-3'
            onClick={handleTabLogo}>
            MOBI
          </span>
        </Nav.Logo>
      }
      navTabs={
        <Nav.TabSection className='mx-auto'>
          {NAV_TABS.map((tab) => (
            <Nav.Tab
              key={tab.text}
              className={handleTabClassName(tab.text === landingTab)}
              onClick={handleTapClick(tab)}>
              {tab.text}
            </Nav.Tab>
          ))}
        </Nav.TabSection>
      }></Nav>
  )
}
