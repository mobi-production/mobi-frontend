import { StaticImageData } from 'next/image'

import charitySlideImage01 from '/public/webp/landing/landing-charity-slide-01.webp'
import charitySlideImage02 from '/public/webp/landing/landing-charity-slide-02.webp'
import charitySlideImage03 from '/public/webp/landing/landing-charity-slide-03.webp'
import charitySlideImage04 from '/public/webp/landing/landing-charity-slide-04.webp'

type CharitySlideImagesProps = {
  id: number
  src: StaticImageData
  alt: string
}

export const CHARITY_SLIDE_IMAGES: CharitySlideImagesProps[] = [
  {
    id: 1,
    src: charitySlideImage01,
    alt: 'charity_slide_image_01'
  },
  {
    id: 2,
    src: charitySlideImage02,
    alt: 'charity_slide_image_02'
  },
  {
    id: 3,
    src: charitySlideImage03,
    alt: 'charity_slide_image_03'
  },
  {
    id: 4,
    src: charitySlideImage04,
    alt: 'charity_slide_image_04'
  }
]
