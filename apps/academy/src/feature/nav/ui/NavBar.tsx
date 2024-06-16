'use client'

import { Nav } from '@/widget/nav/Nav'

import { NAV_TABS } from '../constants'
import { useNavTab } from '../lib'

export function NavBar() {
  const { landingTab, handleTabLogo, handleTabClick, handleTabClassName } = useNavTab()

  return (
    <Nav
      logo={
        <Nav.NavLogo
          intent='empty'
          className='absolute left-[10rem] top-3 text-center text-green'>
          <span
            className='cursor-pointer text-text-heading-3'
            onClick={handleTabLogo}>
            MOBI
          </span>
        </Nav.NavLogo>
      }
      navTabs={
        <Nav.NavTabSection className='mx-auto'>
          {NAV_TABS.map((tab) => (
            <Nav.NavTab
              key={tab.text}
              className={handleTabClassName(tab.text === landingTab)}
              onClick={() => handleTabClick(tab.text, tab.href)}>
              {tab.text}
            </Nav.NavTab>
          ))}
        </Nav.NavTabSection>
      }></Nav>
  )
}
