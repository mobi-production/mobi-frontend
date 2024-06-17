import { cn } from '@repo/util'
import { ReactNode } from 'react'

type CardImageProps = {
  bgGradient: string
  className?: string
}
function Image({ bgGradient, className, children }: PropsNeedChildren<CardImageProps>) {
  const gradientClass = `bg-${bgGradient}`

  return (
    <div
      className={cn(
        'relative flex h-[370px] w-[622px] items-center justify-center p-4',
        gradientClass,
        className
      )}>
      {children}
    </div>
  )
}

type Props = {
  className?: string
}
function Title({ className, children }: PropsNeedChildren<Props>) {
  return (
    <h2 className={cn('mb-[32px] text-[36px] font-semibold text-black', className)}>{children}</h2>
  )
}

function DescriptionList({ className, children }: PropsNeedChildren<Props>) {
  return <ul className={cn('flex-col', className)}>{children}</ul>
}

function Description({ className, children }: PropsNeedChildren<Props>) {
  return <li className={cn('text-[16px] font-normal text-gray-1', className)}>{children}</li>
}

type EducationFeatureCardProps = {
  image: ReactNode
  title: ReactNode
  info: ReactNode
  className?: string
}

function EducationFeatureCardContainer({
  image,
  title,
  info,
  className
}: EducationFeatureCardProps) {
  return (
    <section
      className={cn(
        'flex h-[370px] w-[1244px] flex-row items-center rounded-[16px] bg-white',
        className
      )}>
      <div>{image}</div>
      <div className='pb-[77px] pl-[64px] pr-[64px] pt-[77px]'>
        {title}
        {info}
      </div>
    </section>
  )
}

export const EducationFeatureCard = Object.assign(EducationFeatureCardContainer, {
  Image,
  Title,
  DescriptionList,
  Description
})
