'use client'
import Image from 'next/image'
import { useRef } from 'react'

import charitySlideImage01 from '/public/webp/landing/landing-charity-slide-01.webp'
import { CHARITY_SLIDE_IMAGES } from '@/widget/landing/constants'

import { useScrollSlideHandler } from '../lib'

export function LandingCharityImageSlide() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  useScrollSlideHandler(scrollContainerRef, 1720, 0.9)

  return (
    <div className='relative h-auto w-full overflow-hidden'>
      <div
        ref={scrollContainerRef}
        className='flex h-auto w-full space-x-4 overflow-x-hidden'>
        {CHARITY_SLIDE_IMAGES.map((image, index) => (
          <div
            key={index}
            className='mobile-hidden w-[30%] flex-none'>
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={350}
            />
          </div>
        ))}
      </div>
      <div className='desktop-hidden w-full'>
        <Image
          src={charitySlideImage01}
          alt='charity_slide_image_01'
          width={300}
          height={150}
        />
      </div>
    </div>
  )
}
