import Image from 'next/image'

import { APPLY_CONTENT } from '@/widget/apply/constants'

export function TopBanner() {
  return (
    <section className='relative h-screen w-full'>
      <div className='absolute z-10 h-full w-full bg-apply-background-gradient' />
      <Image
        className='mobile-hidden object-cover'
        src='/webp/apply/top-banner-desktop.webp'
        alt='apply-top-banner'
        fill={true}
      />
      <Image
        className='desktop-hidden object-cover'
        src='/webp/apply/top-banner-mobile.webp'
        alt='apply-top-banner'
        fill={true}
      />
      <div className='relative z-20 flex flex-col items-center gap-8 pt-[22.5rem] mobile:pt-[10.75rem] mobileAndTablet:pt-[10.75rem]'>
        <h1 className='text-text-heading-1 mobile:text-text-heading-2 mobileAndTablet:text-text-heading-2'>
          {APPLY_CONTENT.top_banner.title}
        </h1>
        <h5 className='overflow-auto text-center text-text-title-2 mobile:w-80 mobile:whitespace-pre-wrap mobile:text-text-body-1 mobileAndTablet:w-80 mobileAndTablet:whitespace-pre-wrap mobileAndTablet:text-text-body-1'>
          {APPLY_CONTENT.top_banner.subTitle}
        </h5>
      </div>
    </section>
  )
}
