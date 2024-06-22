import Image from 'next/image'

import { APPLY_SCHEDULE_ITEM } from '@/widget/apply/constants'
import { ApplyScheduleCard } from '@/widget/apply/ui/ApplyScheduleCard'

export function ApplyScheduleCardList() {
  return (
    <div className='mobile: grid w-full max-w-[1244px] grid-cols-4 justify-items-center gap-4 mobile:grid-cols-1 mobileAndTablet:grid-cols-1 tablet:grid-cols-2 tabletAndLaptop:grid-cols-3'>
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
