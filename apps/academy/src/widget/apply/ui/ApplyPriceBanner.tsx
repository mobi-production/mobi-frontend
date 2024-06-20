import Image from 'next/image'

import { APPLY_TITLE } from '@/widget/apply/constants'
import { ApplyBox } from '@/widget/apply/ui/ApplyBox'
import { ApplyCardList } from '@/widget/apply/ui/ApplyCardList'

export function ApplyPriceBanner() {
  return (
    <section className='relative max-h-fit w-full'>
      <div className='absolute z-10 h-full w-full'>
        <Image
          className='mobile:hidden mobileAndTablet:hidden'
          src='/webp/apply/bottom-banner-desktop.webp'
          alt='bottom-banner'
          fill
          objectFit='cover'
        />
        <Image
          className='tablet:hidden tabletAndLaptop:hidden desktop:hidden'
          src='/webp/apply/bottom-banner-mobile.webp'
          alt='bottom-banner'
          fill
          objectFit='cover'
        />
      </div>
      <ApplyBox className='relative z-20 flex flex-col items-center gap-8 mobile:gap-10 mobileAndTablet:gap-10'>
        <h1 className='text-text-heading-2 text-white mobile:text-text-heading-3 mobileAndTablet:text-text-heading-3'>
          {APPLY_TITLE.price_banner.title}
        </h1>
        <ApplyCardList />
      </ApplyBox>
    </section>
  )
}
