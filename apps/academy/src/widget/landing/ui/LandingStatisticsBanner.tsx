import Image from 'next/image'

import landingStatisticImage from '/public/webp/landing/statistics-banner-bg.webp'
import landingStatisticMobileImage from '/public/webp/landing/statistics-banner-bg-mobile.webp'

import { StatisticCardList } from './StatisticCardList'

export function LandingStatisticsBanner() {
  return (
    <section className='relative flex h-[34.125rem] w-full items-center justify-center mobile:h-[53.125rem]'>
      <Image
        src={landingStatisticImage}
        alt='landing-statistics-banner-image'
        className='mobile-hidden'
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
      />
      <Image
        src={landingStatisticMobileImage}
        alt='landing-statistics-banner-image-mobile'
        className='desktop-hidden'
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
      />
      <StatisticCardList />
    </section>
  )
}
