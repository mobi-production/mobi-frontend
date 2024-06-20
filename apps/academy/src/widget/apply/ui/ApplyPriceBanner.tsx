import Image from 'next/image'

import { APPLY_TITLE } from '@/widget/apply/constants'
import { ApplyBox } from '@/widget/apply/ui/ApplyBox'
import { ApplyCardList } from '@/widget/apply/ui/ApplyCardList'

export function ApplyPriceBanner() {
  return (
    <section className='relative max-h-fit w-full'>
      <div className='absolute z-10 h-full w-full'>
        <Image
          src='/webp/apply/bottom-banner.webp'
          alt='bottom-banner'
          fill
          objectFit='cover'
          quality={100}
        />
      </div>
      <ApplyBox>
        <div className='relative z-20 flex flex-col items-center gap-8'>
          <h1 className='text-text-heading-2 text-white'>{APPLY_TITLE.price_banner.title}</h1>
          <ApplyCardList />
        </div>
      </ApplyBox>
    </section>
  )
}
