import Image from 'next/image'

import { SCHEDULE_ITEMS } from '@/widget/apply/constants'

import { ScheduleBannerCard } from './ScheduleBannerCard'

export function ScheduleBannerCardList() {
  return (
    <div className='mobile: grid w-full max-w-[1244px] grid-cols-4 justify-items-center gap-4 mobile:grid-cols-1 mobileAndTablet:grid-cols-1 tablet:grid-cols-2 tabletAndLaptop:grid-cols-3'>
      {SCHEDULE_ITEMS.map((item, index) => {
        {
          const { icon, title, date, alt } = item
          return (
            <ScheduleBannerCard
              key={index}
              date={<ScheduleBannerCard.Date>{date}</ScheduleBannerCard.Date>}
              icon={
                <ScheduleBannerCard.Icon>
                  <Image
                    src={icon}
                    alt={alt}
                  />
                </ScheduleBannerCard.Icon>
              }
              title={<ScheduleBannerCard.Title>{title}</ScheduleBannerCard.Title>}
            />
          )
        }
      })}
    </div>
  )
}
