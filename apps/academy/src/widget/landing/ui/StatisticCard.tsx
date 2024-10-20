import { cn } from '@repo/util'
import { ReactNode } from 'react'

type Props = {
  className?: string
}

function Title({ children, className }: PropsNeedChildren<Props>) {
  return (
    <h6 className={cn('text-text-title-3', className)}>
      <span className='text-[#545454]'>{children}</span>
    </h6>
  )
}

function Count({ children, className }: PropsNeedChildren<Props>) {
  return <h1 className={cn('text-text-heading-1', className)}>{children}</h1>
}

type StatisticCardProps = {
  title: ReactNode
  count: ReactNode
} & Props

function StatisticCardContainer({ title, count, className }: StatisticCardProps) {
  return (
    <section
      className={cn(
        'relative z-10 flex h-[14.125rem] w-[24.688rem] flex-col items-center justify-center gap-[1rem] rounded-[0.5rem] border border-white bg-white/60 pb-[4rem] pl-[2rem] pr-[2rem] pt-[4rem] backdrop-blur-md mobile:w-[20rem]',
        className
      )}>
      {title}
      {count}
    </section>
  )
}

export const StatisticCard = Object.assign(StatisticCardContainer, {
  title: Title,
  count: Count
})
