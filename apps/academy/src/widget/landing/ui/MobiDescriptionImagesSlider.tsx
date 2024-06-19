'use client'

import { ImageSlider } from '@repo/ui'
import Image from 'next/image'

import { MOBI_DESCRIPTION_IMAGES } from '@/widget/landing/constants'

export function MobiDescriptionImagesSlider() {
  const ImageArray = [...MOBI_DESCRIPTION_IMAGES.reverse(), ...MOBI_DESCRIPTION_IMAGES]
  return (
    <div className='relative mt-[5rem] h-screen overflow-hidden'>
      <ImageSlider
        className='vertical-slider mt-[-140rem] h-[200rem]'
        spacing='lg'
        direction='vertical'>
        {ImageArray.map((image) => (
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
