'use client'

import { ImageSlider } from '@repo/ui'
import Image from 'next/image'

import { MOBI_DESCRIPTION_IMAGES } from '../constants'

export function MobiDescriptionImagesSlider() {
  return (
    <div className='relative h-screen'>
      <ImageSlider
        className='vertical-scroll'
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
