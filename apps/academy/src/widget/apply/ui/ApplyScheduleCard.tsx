import { cn } from '@repo/util'
import { ReactNode } from 'react'

type Props = {
  className?: string
}

function Date({ className, children, ...rest }: PropsNeedChildren<Props>) {
  return (
    <div
      className={cn('text-left text-gray-2', className)}
      {...rest}>
      {children}
    </div>
  )
}

function Icon({ className, children }: PropsNeedChildren<Props>) {
  return (
    <div className={cn('flex h-16 w-16 items-center justify-center', className)}>{children}</div>
  )
}

function Title({ children }: PropsNeedChildren) {
  return <h5 className='text-text-title-2'>{children}</h5>
}

type ApplyScheduleContainerProps = {
  date: ReactNode
  icon: ReactNode
  title: ReactNode
}

function ApplyScheduleContainer({ icon, title, date }: ApplyScheduleContainerProps) {
  return (
    <section
      className={cn(
        'relative h-[288px] w-[290px] flex-shrink-0 rounded-2xl bg-white p-8 pb-[5.875rem]'
      )}>
      {date}
      <div className='absolute left-1/2 top-1/2 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center gap-4'>
        {icon}
        {title}
      </div>
    </section>
  )
}

export const ApplyScheduleCard = Object.assign(ApplyScheduleContainer, {
  Date,
  Icon,
  Title
})
