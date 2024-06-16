import { cn } from '@repo/util'
import { ReactNode } from 'react'

type Props = {
  className?: string
}

function Title({ children, className }: PropsNeedChildren<Props>) {
  return <h6 className={cn('text-[18px] font-semibold text-[#545454]', className)}>{children}</h6>
}

function Count({ children, className }: PropsNeedChildren<Props>) {
  return <h1 className={cn('text-[64px] font-bold text-[#191919]', className)}>{children}</h1>
}

type StatisticCardProps = {
  title: ReactNode
  count: ReactNode
} & Props

function StatisticCardContainer({ title, count, className }: StatisticCardProps) {
  return (
    <section
      className={cn(
        'relative z-10 flex h-[226px] w-[395px] flex-col items-center justify-center gap-[16px] rounded-[8px] border-[1px] border-white bg-white pb-[64px] pl-[32px] pr-[32px] pt-[64px]',
        className
      )}
      style={{
        border: '1px solid rgba(255, 255, 255, 0.97)',
        background: 'rgba(255, 255, 255, 0.60)',
        backdropFilter: 'blur(7px)',
        WebkitBackdropFilter: 'blur(7px)'
      }}>
      {title}
      {count}
    </section>
  )
}

export const StatisticCard = Object.assign(StatisticCardContainer, {
  title: Title,
  count: Count
})
