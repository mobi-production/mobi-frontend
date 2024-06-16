import { cn } from '@repo/util'
import { ReactNode } from 'react'

type Props = {
  className?: string
}

function Title({ children, className }: PropsNeedChildren<Props>) {
  return <h6 className={cn('text-[18px] font-semibold text-gray-1', className)}>{children}</h6>
}

function Count({ children, className }: PropsNeedChildren<Props>) {
  return <h1 className={cn('text-[64px] font-bold text-black', className)}>{children}</h1>
}

type StatisticCardProps = {
  title: ReactNode
  count: ReactNode
} & Props

function StatisticCardContainer({ title, count, className }: StatisticCardProps) {
  return (
    <section
      className={cn(
        'relative z-10 flex h-[226px] w-[395px] flex-col items-center justify-center gap-[16px] rounded-[8px] border border-white bg-white/60 pb-[64px] pl-[32px] pr-[32px] pt-[64px] backdrop-blur-md',
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
