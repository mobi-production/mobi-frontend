import Image from 'next/image'

import landingStatisticImage from '/public/webp/landing/statistics-banner-bg.webp'

import { StatisticCardList } from './StatisticCardList'

export function LandingStatisticsBanner() {
  return (
    <section className='relative flex h-[34.125rem] w-full items-center justify-center'>
      <Image
        src={landingStatisticImage}
        alt='landing-statistics-banner-image'
        layout='fill'
        objectFit='cover'
        quality={100}
      />
      <StatisticCardList />
    </section>
  )
}
