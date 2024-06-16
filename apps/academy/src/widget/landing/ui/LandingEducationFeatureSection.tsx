import { cn } from '@repo/util'
import { ReactNode } from 'react'

type Props = {
  className?: string
}

function Title({ className, children }: PropsNeedChildren<Props>) {
  return (
    <h2 className={cn('text-center text-[48px] font-bold text-black', className)}>{children}</h2>
  )
}

function Info({ className, children }: PropsNeedChildren<Props>) {
  return <h2 className={className}>{children}</h2>
}

type LandingEducationFeatureSectionProps = {
  title: ReactNode
  info: ReactNode
} & Props

function LandingEducationFeatureSectionContainer({
  title,
  info,
  className
}: LandingEducationFeatureSectionProps) {
  return (
    <section className={cn('flex w-full flex-col items-center justify-center', className)}>
      {title}
      {info}
    </section>
  )
}

export const LandingEducationFeatureSection = Object.assign(
  LandingEducationFeatureSectionContainer,
  {
    Title,
    Info
  }
)
