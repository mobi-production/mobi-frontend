'use client'

import { ImageSlider } from '@repo/ui'
import Image from 'next/image'

import { MOBI_DESCRIPTION_IMAGES } from '@/widget/landing/constants'

export function MobiDescriptionImagesSlider() {
  return (
    <div className='relative mt-[5rem] h-screen overflow-hidden'>
      <ImageSlider
        className='mt-[-50rem] h-[200rem] animate-vertical-slider'
        spacing='lg'
        direction='vertical'>
        {MOBI_DESCRIPTION_IMAGES.map((image) => (
          <div key={image.id}>
            <Image
              src={image.src}
              alt={`${image.id}번째 이미지`}
              width={500}
              height={350}
            />
          </div>
        ))}
      </ImageSlider>
    </div>
  )
}
