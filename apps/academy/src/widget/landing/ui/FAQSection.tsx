import { cn } from '@repo/util'
import { ReactNode } from 'react'

type FAQProps = {
  className?: string
}

function FAQTitle({ className, children }: PropsNeedChildren<FAQProps>) {
  return (
    <h2
      className={cn(
        'text-text-heading-3 md:text-text-heading-3 xl:text-text-heading-2',
        className
      )}>
      {children}
    </h2>
  )
}

type Props = {
  title: ReactNode
  faq: ReactNode
}

function FAQContainer({ title, faq }: Props) {
  return (
    <section className='flex flex-col items-center gap-20 xl:w-full xl:max-w-[1244px]'>
      {title}
      {faq}
    </section>
  )
}

export const FAQSection = Object.assign(FAQContainer, {
  title: FAQTitle
})
