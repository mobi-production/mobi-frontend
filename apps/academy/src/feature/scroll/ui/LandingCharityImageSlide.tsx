'use client'
import Image from 'next/image'
import { useRef } from 'react'

import charitySlideImage01 from '../../../../public/webp/landing/landing-charity-slide-01.webp'
import charitySlideImage02 from '../../../../public/webp/landing/landing-charity-slide-02.webp'
import charitySlideImage03 from '../../../../public/webp/landing/landing-charity-slide-03.webp'
import charitySlideImage04 from '../../../../public/webp/landing/landing-charity-slide-04.webp'
import { useScrollSlideHandler } from '../lib'

export function LandingCharityImageSlide() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  useScrollSlideHandler(scrollContainerRef, 1720, 0.8)

  return (
    <div className='relative h-auto w-full overflow-hidden'>
      <div
        ref={scrollContainerRef}
        className='flex h-auto w-full space-x-4 overflow-x-hidden'>
        <div className='w-[30%] flex-none'>
          <Image
            src={charitySlideImage01}
            alt='charity_slide_image_01'
            width={500}
            height={350}
          />
        </div>
        <div className='w-[30%] flex-none'>
          <Image
            src={charitySlideImage02}
            alt='charity_slide_image_02'
            width={500}
            height={350}
          />
        </div>
        <div className='w-[30%] flex-none'>
          <Image
            src={charitySlideImage03}
            alt='charity_slide_image_03'
            width={500}
            height={350}
          />
        </div>
        <div className='w-[30%] flex-none'>
          <Image
            src={charitySlideImage04}
            alt='charity_slide_image_04'
            width={500}
            height={350}
          />
        </div>
      </div>
    </div>
  )
}
