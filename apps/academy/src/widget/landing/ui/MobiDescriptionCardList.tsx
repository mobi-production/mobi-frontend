'use client'

import { forwardRef } from 'react'

import { MOBI_DESCRIPTION } from '../constants'
import { MobiDescriptionCard } from './MobiDescriptionCard'

type MobiDescriptionCardProps = { activeSectionIndex: number }

export const MobiDescriptionCardList = forwardRef<HTMLDivElement, MobiDescriptionCardProps>(
  ({ activeSectionIndex }, ref) => {
    return (
      <div
        className='w-full pt-[8.75rem]'
        ref={ref}>
        {MOBI_DESCRIPTION.map((description) => (
          <MobiDescriptionCard
            isVisible={description.id === activeSectionIndex}
            key={description.id}
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
