import { cn } from '@repo/util'
import Image from 'next/image'
import { PropsWithChildren, ReactNode } from 'react'

import ArrowWebp from '/public/webp/arrow-down.webp'

type Props = {
  className?: string
}

function Question({ className, children }: PropsNeedChildren<Props>) {
  return (
    <div
      className={cn(
        'flex w-full justify-between rounded-lg border border-gray-4 px-8 py-6',
        className
      )}>
      <div className='flex gap-2 text-text-title-2'>
        <h4 className='text-secondary'>Q</h4>
        <h4>{children}</h4>
      </div>
      <div>
        <Image
          src={ArrowWebp}
          alt='arrow toggle icon'
        />
      </div>
    </div>
  )
}

function Answer({ children }: PropsWithChildren<Props>) {
  return (
    <div className='px-8 pb-10 pt-6'>
      <span className='text-gray-1'>{children}</span>
    </div>
  )
}

type FAQCarsProps = {
  question: ReactNode
  answer: ReactNode
}

function FAQCardContainer({ question, answer }: FAQCarsProps) {
  return (
    <div className='xl:w-full xl:max-w-[1244px]'>
      {question}
      {answer}
    </div>
  )
}
export const FAQCard = Object.assign(FAQCardContainer, {
  Question,
  Answer
})
