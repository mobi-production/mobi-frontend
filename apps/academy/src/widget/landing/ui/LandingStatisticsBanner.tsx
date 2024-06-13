import Image from 'next/image'

import { StatisticCardList } from './StatisticCardList'

export function LandingStatisticsBanner() {
  return (
    <section className='relative flex h-[546px] w-full items-center justify-center'>
      <Image
        className='absolute top-0'
        src='/png/landing/statistics-banner-bg.png'
        alt='landing-statistics-banner-image'
        layout='fill'
        objectFit='cover'
        quality={100}
      />
      <StatisticCardList />
    </section>
  )
}
