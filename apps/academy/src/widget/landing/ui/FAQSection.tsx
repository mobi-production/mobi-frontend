import { cn } from '@repo/util'
import { ReactNode } from 'react'

type Props = {
  className?: string
}

function FAQTitle({ className, children }: PropsNeedChildren<Props>) {
  return (
    <h2 className={cn('text-text-heading-2 mobile:text-text-heading-3', className)}>{children}</h2>
  )
}

type FAQProps = {
  title: ReactNode
  faq: ReactNode
}

function FAQContainer({ title, faq }: FAQProps) {
  return (
    <section className='my-[140px] flex w-full max-w-[1244px] flex-col items-center gap-20 mobile:my-[70px] mobile:gap-10 mobile:px-5 mobileAndTablet:px-5 tablet:px-5 tabletAndLaptop:px-5'>
      {title}
      {faq}
    </section>
  )
}

export const FAQSection = Object.assign(FAQContainer, {
  title: FAQTitle
})
