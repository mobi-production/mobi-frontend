'use client'

import { forwardRef } from 'react'

import { MOBI_DESCRIPTION } from '@/widget/landing/constants'
import { MobiDescriptionCard } from '@/widget/landing/ui'

type MobiDescriptionCardListProps = {
  currentIndex: number
}

export const MobiDescriptionCardList = forwardRef<HTMLDivElement, MobiDescriptionCardListProps>(
  ({ currentIndex }, ref) => {
    return (
      <div
        className='w-full pt-[8.75rem]'
        ref={ref}>
        {MOBI_DESCRIPTION.map((description, index) => (
          <MobiDescriptionCard
            key={description.id}
            className={`${index === currentIndex ? 'block' : 'hidden'}`}
            title={
              <MobiDescriptionCard.ContentMapSection
                renderItems={description.title}
                Component={MobiDescriptionCard.Title}
                className='mb-16'
              />
            }
            subtitle={
              <MobiDescriptionCard.ContentMapSection
                renderItems={description.subtitle}
                Component={MobiDescriptionCard.Subtitle}
                className='mb-8'
              />
            }
            detail={
              <MobiDescriptionCard.ContentMapSection
                renderItems={description.detail}
                Component={MobiDescriptionCard.Detail}
                className='mb-8'
              />
            }
          />
        ))}
      </div>
    )
  }
)

MobiDescriptionCardList.displayName = 'MobiDescriptionCardList'
