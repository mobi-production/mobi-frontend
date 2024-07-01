import Image from 'next/image'

import charitySlideImage01 from '../../../../public/webp/landing/landing-charity-slide-01.webp'
import charitySlideImage02 from '../../../../public/webp/landing/landing-charity-slide-02.webp'
import charitySlideImage03 from '../../../../public/webp/landing/landing-charity-slide-03.webp'
import charitySlideImage04 from '../../../../public/webp/landing/landing-charity-slide-04.webp'

export function LandingCharityImageSlide() {
  return (
    <div className='relative h-full w-full overflow-hidden'>
      <div className='animation-vertical-slider flex-row space-y-4'>
        <div className='animation-fade-in w-full'>
          <Image
            src={charitySlideImage01}
            alt='charity_slide_image_01'
            className='h-auto w-full'
          />
        </div>
        <div className='animation-fade-in w-full'>
          <Image
            src={charitySlideImage02}
            alt='charity_slide_image_02'
            className='h-auto w-full'
          />
        </div>
        <div className='animation-fade-in w-full'>
          <Image
            src={charitySlideImage03}
            alt='charity_slide_image_03'
            className='h-auto w-full'
          />
        </div>
        <div className='animation-fade-in w-full'>
          <Image
            src={charitySlideImage04}
            alt='charity_slide_image_04'
            className='h-auto w-full'
          />
        </div>
      </div>
    </div>
  )
}
