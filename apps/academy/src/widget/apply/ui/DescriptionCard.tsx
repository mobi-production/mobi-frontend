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
      className={cn('whitespace-pre-wrap text-text-title-1', className)}
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
        'mobileAndTablet:p:6 flex h-[20.75rem] w-[24.5rem] flex-shrink-0 flex-col items-start gap-8 rounded-2xl bg-gray-5 p-8 mobile:h-auto mobile:w-full mobile:p-6 mobile:py-8 mobileAndTablet:h-auto mobileAndTablet:w-full mobileAndTablet:py-8',
        className
      )}
      {...rest}>
      <div className='flex flex-col items-start gap-4'>
        {icon}
        {title}
      </div>
      <span
        className={cn(
          'text-text-body-1 text-gray-1 mobile:text-text-body-1 mobileAndTablet:text-text-body-1',
          className
        )}
        {...rest}>
        {info}
      </span>
    </section>
  )
}

export const DescriptionCard = Object.assign(BenefitContainer, {
  Icon,
  Title
})
