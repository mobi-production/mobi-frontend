import Image from 'next/image'

import { APPLY_CONTENT } from '@/widget/apply/constants'
import { PriceBannerCardList } from '@/widget/apply/ui/PriceBannerCardList'

export function PriceBanner() {
  return (
    <section className='relative max-h-fit w-full'>
      <div className='absolute z-10 h-full w-full'>
        <Image
          className='mobile-hidden'
          src='/webp/apply/bottom-banner-desktop.webp'
          alt='bottom-banner'
          fill
          objectFit='cover'
        />
        <Image
          className='desktop-hidden'
          src='/webp/apply/bottom-banner-mobile.webp'
          alt='bottom-banner'
          fill
          objectFit='cover'
        />
      </div>
      <div className='apply-box relative z-20 flex flex-col items-center gap-8 mobile:gap-10 mobileAndTablet:gap-10'>
        <h1 className='text-text-heading-2 text-white mobile:text-text-heading-3 mobileAndTablet:text-text-heading-3'>
          {APPLY_CONTENT.price_banner.title}
        </h1>
        <PriceBannerCardList />
      </div>
    </section>
  )
}
