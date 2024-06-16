'use client'

import { useEffect, useRef, useState } from 'react'

import { MobiDescriptionImagesSlider } from '@/feature/imageSlider/ui'
import { MobiDescriptionCardList } from '@/widget/landing/ui'

export const MobiDescriptionWithScrollEvent = () => {
  const scrollContentRef = useRef<HTMLDivElement>(null)

  const [activeSectionIndex, setActiveSectionIndex] = useState(0)

  const handleWheel = (event: WheelEvent) => {
    if (!scrollContentRef.current) return
    const { deltaY } = event
    const newScrollTop = scrollContentRef.current.scrollTop + deltaY
    const sections = Array.from(scrollContentRef.current.children)
    let currentSectionIndex = 1

    for (let i = 1; i <= sections.length; i++) {
      const section = sections[i]
      if (section instanceof HTMLDivElement) {
        const { offsetTop, offsetHeight } = section
        if (newScrollTop >= offsetTop && newScrollTop < offsetTop + offsetHeight) {
          currentSectionIndex = i + 1
          break
        }
      }
    }

    setActiveSectionIndex(currentSectionIndex)
    scrollContentRef.current.scrollTo({ top: newScrollTop })
  }

  useEffect(() => {
    if (!scrollContentRef.current) return
    scrollContentRef.current.addEventListener('wheel', handleWheel)
    return () => {
      if (!scrollContentRef.current) return
      scrollContentRef.current.removeEventListener('wheel', handleWheel)
    }
  }, [activeSectionIndex])

  return (
    <div
      className='relative flex h-screen overflow-hidden'
      onScroll={(e) => console.log('scrolling', e)}>
      <MobiDescriptionCardList
        ref={scrollContentRef}
        activeSectionIndex={activeSectionIndex}
      />
      <MobiDescriptionImagesSlider />
    </div>
  )
}
