import { cn } from '@repo/util'
import { ReactNode } from 'react'

type TitleProps = {
  className?: string
}

function Title({ className, children }: PropsNeedChildren<TitleProps>) {
  return <h1 className={cn('text-heading-2 pt-[140px]', className)}>{children}</h1>
}

type DescriptionProps = {
  className?: string
}

function Description({ className, children }: PropsNeedChildren<DescriptionProps>) {
  return <p className={cn('text-body-1 text-center text-[#545454]', className)}>{children}</p>
}

type ImageSliderProps = {
  className?: string
}

function ImageSlider({ className, children }: PropsNeedChildren<ImageSliderProps>) {
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
    <section className='flex w-full flex-col items-center gap-[80px]'>
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