import { cn } from '@repo/util'
import { ReactNode } from 'react'

type CurriculumScheduleProps = {
  className?: string
}

function CurriculumScheduleTitle({
  className,
  children
}: PropsNeedChildren<CurriculumScheduleProps>) {
  return (
    <h2 className={cn('text-text-heading-2 mobile:text-text-heading-3', className)}>{children}</h2>
  )
}

type Props = {
  title: ReactNode
  info: ReactNode
}

function CurriculumScheduleContainer({ title, info }: Props) {
  return (
    <section className='flex w-full flex-col items-center gap-20 bg-curriculum-background-gradient pb-[160px] pt-[140px]'>
      {title}
      {info}
    </section>
  )
}

export const CurriculumScheduleSection = Object.assign(CurriculumScheduleContainer, {
  title: CurriculumScheduleTitle
})
