'use client'
import { useToggle } from '@repo/hook'
import { cn } from '@repo/util'
import React, { PropsWithChildren, ReactNode } from 'react'

import { FAQToggleButton } from '@/feature/link/ui'

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
      className={cn(
        'flex w-full justify-between rounded-lg border px-8 py-6',
        {
          'border-gray-4': !isToggle,
          'border-primary bg-primary bg-opacity-5': isToggle
        },
        className
      )}>
      <div className='flex gap-2 text-text-title-2'>
        <h4 className='text-secondary'>Q</h4>
        <h4>{children}</h4>
      </div>
      <FAQToggleButton
        onClick={isToggle ? closeToggle : openToggle}
        isToggle={isToggle}
      />
    </div>
  )
}

type AnswerProps = PropsWithChildren<Props> & {
  isToggle: boolean
}

function Answer({ isToggle, children }: AnswerProps) {
  return (
    <div
      className={cn('transition-max-height overflow-hidden duration-700 ease-in-out', {
        'max-h-0': !isToggle,
        'max-h-screen': isToggle
      })}>
      <div className='px-8 pb-10 pt-6 text-gray-1'>{children}</div>
    </div>
  )
}

type FAQCardProps = {
  question: ReactNode
  answer: ReactNode
}

function FAQCardContainer({ question, answer }: FAQCardProps) {
  const { isToggle, openToggle, closeToggle } = useToggle()

  return (
    <div className='xl:w-full xl:max-w-[1244px]'>
      <Question
        isToggle={isToggle}
        openToggle={openToggle}
        closeToggle={closeToggle}>
        {question}
      </Question>
      <Answer isToggle={isToggle}>{answer}</Answer>
    </div>
  )
}

export const FAQCard = Object.assign(FAQCardContainer)
