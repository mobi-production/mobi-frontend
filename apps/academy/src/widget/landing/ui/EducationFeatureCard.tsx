import { cn } from '@repo/util'
import { ReactNode } from 'react'

type CardImageProps = {
  className?: string
}
function Image({ className, children }: PropsNeedChildren<CardImageProps>) {
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  )
}

type Props = {
  className?: string
}
function Title({ className, children }: PropsNeedChildren<Props>) {
  return <h2 className={cn('mb-[32px] text-text-heading-3', className)}>{children}</h2>
}

function DescriptionList({ className, children }: PropsNeedChildren<Props>) {
  return <ul className={cn('flex-col', className)}>{children}</ul>
}

function Description({ className, children }: PropsNeedChildren<Props>) {
  return (
    <li className={cn('text-text-body-1', className)}>
      <span className='font-normal text-gray-1'>{children}</span>
    </li>
  )
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
        'flex h-[23.125rem] w-[77.75rem] flex-row items-center rounded-[1rem] bg-transparent',
        className
      )}>
      <div>{image}</div>
      <div className='border-color-gray-4 flex h-[23.125rem] w-[38.875rem] flex-col justify-center rounded-br-[1rem] rounded-tr-[1rem] border bg-white pl-[4rem] shadow-[0_0_2.5rem_0_rgba(0,0,0,0.05)]'>
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
