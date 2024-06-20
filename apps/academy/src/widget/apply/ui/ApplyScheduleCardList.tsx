import Image from 'next/image'

import { APPLY_SCHEDULE_ITEM } from '@/widget/apply/constants'
import { ApplyScheduleCard } from '@/widget/apply/ui/ApplyScheduleCard'

export function ApplyScheduleCardList() {
  return (
    <div className='mobile: flex w-full max-w-[1244px] justify-between mobile:flex-col mobile:gap-4 mobileAndTablet:flex-col mobileAndTablet:gap-4'>
      {APPLY_SCHEDULE_ITEM.map((item, index) => {
        {
          const { icon, title, date, alt } = item
          return (
            <ApplyScheduleCard
              key={index}
              date={<ApplyScheduleCard.Date>{date}</ApplyScheduleCard.Date>}
              icon={
                <ApplyScheduleCard.Icon>
                  <Image
                    src={icon}
                    alt={alt}
                  />
                </ApplyScheduleCard.Icon>
              }
              title={<ApplyScheduleCard.Title>{title}</ApplyScheduleCard.Title>}
            />
          )
        }
      })}
    </div>
  )
}
