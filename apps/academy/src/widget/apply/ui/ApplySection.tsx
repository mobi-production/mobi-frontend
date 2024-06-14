import { cn } from '@repo/util'
import { ReactNode } from 'react'

type ApplyTitleProps = {
  className?: string
}

function ApplyTitle({ className, children }: PropsNeedChildren<ApplyTitleProps>) {
  return (
    <h2 className={cn('leading-[100%] md:text-text-heading-3 xl:text-text-heading-2', className)}>
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
    <section className='flex flex-col py-[140px] xl:w-full xl:max-w-[1244px] xl:items-start'>
      <div className='mb-20'>{title}</div>
      {info}
    </section>
  )
}

export const ApplySection = Object.assign(ApplyContainer, {
  title: ApplyTitle
})
