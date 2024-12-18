import { cn } from '@repo/util'
import { ReactNode } from 'react'

type Props = {
  className?: string
}

function Title({ className, children }: PropsNeedChildren<Props>) {
  return <h1 className={cn('pt-[140px] text-center text-text-heading-2', className)}>{children}</h1>
}

function Description({ className, children }: PropsNeedChildren<Props>) {
  return (
    <p className={cn('text-center text-text-body-1', className)}>
      <span className='font-normal text-[#545454]'>{children}</span>
    </p>
  )
}

function ImageSlider({ className, children }: PropsNeedChildren<Props>) {
  return <div className={cn('mb-[160px] flex justify-center', className)}>{children}</div>
}

type LandingCharityInfoSectionProps = {
  title: ReactNode
  description: ReactNode
  images: ReactNode
}

export function LandingCharityInfoContainer({
  title,
  description,
  images
}: LandingCharityInfoSectionProps) {
  return (
    <section className='flex w-full flex-col items-center gap-[5rem] whitespace-pre-line'>
      {title}
      {description}
      {images}
    </section>
  )
}

export const LandingCharityInfoSection = Object.assign(LandingCharityInfoContainer, {
  Title,
  Description,
  ImageSlider
})
