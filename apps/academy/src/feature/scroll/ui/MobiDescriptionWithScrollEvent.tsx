'use client'

import { useRef } from 'react'

import { MOBI_DESCRIPTION } from '@/widget/landing/constants'
import { MobiDescriptionCardList } from '@/widget/landing/ui'
import { MobiDescriptionImagesSlider } from '@/widget/landing/ui/MobiDescriptionImagesSlider'

import { useScrollLayoutChange } from '../lib'

export const MobiDescriptionWithScrollEvent = () => {
  const scrollContentRef = useRef<HTMLDivElement>(null)

  const length = MOBI_DESCRIPTION.length
  const currentIndex = useScrollLayoutChange(scrollContentRef, length)

  return (
    <div className='relative flex h-screen overflow-hidden'>
      <MobiDescriptionCardList
        ref={scrollContentRef}
        currentIndex={currentIndex}
      />
      <MobiDescriptionImagesSlider />
    </div>
  )
}
