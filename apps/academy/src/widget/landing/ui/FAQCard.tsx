'use client'
import { useToggle } from '@repo/hook'
import { cn } from '@repo/util'
import React, { PropsWithChildren } from 'react'

import { FAQToggleButton } from '@/feature/toggle/ui'
import type { FaqList } from '@/widget/landing/constants'

type Props = {
  className?: string
}

type QuestionProps = {
  isToggle: boolean
  openToggle: () => void
  closeToggle: () => void
} & PropsNeedChildren<Props>

function Question({ className, children, isToggle, openToggle, closeToggle }: QuestionProps) {
  return (
    <div
      onClick={isToggle ? closeToggle : openToggle}
      className={cn(
        'flex w-full cursor-pointer items-center justify-between rounded-lg border px-8 py-6 mobile:px-4 mobile:py-6',
        {
          'border-gray-4': !isToggle,
          'border-primary bg-primary bg-opacity-5': isToggle
        },
        className
      )}>
      <div className='flex gap-2'>
        <h4 className='text-text-title-2 text-secondary mobile:text-text-body-1'>Q</h4>
        <h4 className='text-text-title-2 mobile:text-text-body-1'>{children}</h4>
      </div>
      <FAQToggleButton isToggle={isToggle} />
    </div>
  )
}

type AnswerProps = PropsWithChildren<Props> & {
  isToggle: boolean
}

function Answer({ isToggle, children }: AnswerProps) {
  return (
    <div
      className={cn('transition-max-height overflow-hidden ease-in-out', {
        'max-h-0 duration-300': !isToggle,
        'max-h-screen duration-700': isToggle
      })}>
      <div className='px-8 pb-10 pt-6 text-gray-1 mobile:px-0 mobile:py-6'>{children}</div>
    </div>
  )
}

function FAQCardContainer({ idx, question, answer }: FaqList) {
  const { isToggle, openToggle, closeToggle } = useToggle()

  return (
    <li
      key={idx}
      className='w-full max-w-[1244px]'>
      <Question
        isToggle={isToggle}
        openToggle={openToggle}
        closeToggle={closeToggle}>
        {question}
      </Question>
      <Answer isToggle={isToggle}>{answer}</Answer>
    </li>
  )
}

export const FAQCard = Object.assign(FAQCardContainer)
