import { cn } from '@repo/util'
import { ReactNode } from 'react'

import { EducationFeatureCard } from './EducationFeatureCard'

type Props = {
  bgGradient: string
  image: ReactNode
  title: ReactNode
  mobileTitle: ReactNode
  descriptions: string
  mobileDescriptions: string
  className?: string
}

export function EducationFeatureCardContent({
  bgGradient,
  image,
  title,
  mobileTitle,
  descriptions,
  mobileDescriptions,
  className
}: Props) {
  return (
    <EducationFeatureCard
      className={cn('whitespace-pre-line', className)}
      image={
        <EducationFeatureCard.Image
          className={`${bgGradient} relative flex h-[23.125rem] w-[38.875rem] items-center justify-center rounded-bl-[1rem] rounded-tl-[1rem] p-4 mobile:h-[15rem] mobile:w-[20rem] mobile:rounded-bl-[0rem] mobile:rounded-tr-[1rem]`}>
          {image}
        </EducationFeatureCard.Image>
      }
      title={
        <>
          <EducationFeatureCard.Title className='mobile-hidden'>{title}</EducationFeatureCard.Title>
          <EducationFeatureCard.Title className='desktop-hidden'>
            {mobileTitle}
          </EducationFeatureCard.Title>
        </>
      }
      info={
        <EducationFeatureCard.DescriptionList>
          <EducationFeatureCard.Description className='mobile-hidden'>
            {descriptions}
          </EducationFeatureCard.Description>
          <EducationFeatureCard.Description className='desktop-hidden'>
            {mobileDescriptions}
          </EducationFeatureCard.Description>
        </EducationFeatureCard.DescriptionList>
      }
    />
  )
}
