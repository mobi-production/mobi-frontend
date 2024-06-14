import { cn } from '@repo/util'
import { ReactNode } from 'react'

type Props = {
  className?: string
}

function Icon({ children, className, ...rest }: PropsNeedChildren<Props>) {
  return (
    <div
      className={cn('flex h-16 w-16 items-center justify-center', className)}
      {...rest}>
      {children}
    </div>
  )
}

function Title({ children, className, ...rest }: PropsNeedChildren<Props>) {
  return (
    <h4
      className={cn('text-text-title-1 leading-8', className)}
      {...rest}>
      {children}
    </h4>
  )
}

type BenefitContainerProps = {
  icon: ReactNode
  title: ReactNode
  info: ReactNode
} & Props

function BenefitContainer({ icon, title, info, className, ...rest }: BenefitContainerProps) {
  return (
    <section
      className={cn(
        'flex h-[332px] w-[392px] flex-shrink-0 flex-col items-start gap-8 rounded-2xl bg-gray-5 p-8',
        className
      )}
      {...rest}>
      <div className='flex flex-col items-start gap-4'>
        {icon}
        {title}
      </div>
      <span
        className={cn('text-text-body-1', 'text-gray-1', className)}
        {...rest}>
        {info}
      </span>
    </section>
  )
}

export const BenefitCard = Object.assign(BenefitContainer, {
  Icon,
  Title
})
