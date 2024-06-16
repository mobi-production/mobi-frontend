import { ImageSlider } from '@repo/ui'
import Image from 'next/image'

import { MobiDescriptionImages } from '../constants/MobiDescription'

export function MobiDescriptionImagesSlider() {
  return (
    <ImageSlider
      spacing='lg'
      direction='vertical'>
      {MobiDescriptionImages.map((image) => (
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
  )
}
