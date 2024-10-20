import { cn } from '@repo/util'
import { ReactNode } from 'react'

type ApplyTitleProps = {
  className?: string
}

function ApplyTitle({ className, children }: PropsNeedChildren<ApplyTitleProps>) {
  return (
    <h2
      className={cn(
        'w-[42rem] whitespace-pre-wrap text-text-heading-2 mobile:w-80 mobile:text-text-heading-3 mobileAndTablet:w-80 mobileAndTablet:text-text-heading-3',
        className
      )}>
      {children}
    </h2>
  )
}

type Props = {
  title: ReactNode
  info: ReactNode
}

function ApplyContainer({ title, info }: Props) {
  return (
    <section className='flex w-full max-w-[1244px] flex-col items-start'>
      <div className='apply-box'>
        <div className='mb-20 mobile:mb-10 mobileAndTablet:mb-10'>{title}</div>
        {info}
      </div>
    </section>
  )
}

export const ApplySection = Object.assign(ApplyContainer, {
  title: ApplyTitle
})
