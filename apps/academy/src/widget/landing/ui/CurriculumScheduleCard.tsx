import { cn, formatDate } from '@repo/util'
import { cva, VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import { PropsWithChildren, ReactNode } from 'react'

import rangeEllipse from '/public/svg/range-ellipse.svg'

type Props = {
  className?: string
}

const subjectStyles = cva(
  'flex items-center justify-center gap-[8px] border border-glass-stroke border-box bg-curriculum-subject-background-gradient px-4 py-8',
  {
    variants: {
      borderRadius: {
        none: '',
        tl: 'rounded-tl-[16px]',
        tr: 'rounded-tr-[16px]',
        both: 'rounded-tl-[16px] rounded-tr-[16px]'
      }
    },
    defaultVariants: {
      borderRadius: 'none'
    }
  }
)

type SubjectProps = {
  className?: string
  isFirst?: boolean
  isLast?: boolean
  isSingle?: boolean
} & VariantProps<typeof subjectStyles>

function Subject({
  className,
  children,
  isFirst,
  isLast,
  isSingle
}: PropsWithChildren<SubjectProps>) {
  const borderRadius = isSingle ? 'both' : isFirst ? 'tl' : isLast ? 'tr' : 'none'

  return (
    <div className={cn(subjectStyles({ borderRadius }), className)}>
      <h4 className={cn('text-text-title-1 font-normal')}>{children}</h4>
    </div>
  )
}

function Title({ children }: { children: ReactNode }) {
  return <h2 className='mb-8 text-text-heading-3 font-semibold'>{children}</h2>
}

function Description({ children }: { children: ReactNode }) {
  return <span className='mb-[40px] block h-[64px] text-balance break-keep'>{children}</span>
}

function Stack({ children }: { children: ReactNode }) {
  return (
    <div className='flex max-h-[88px] items-center justify-center text-balance rounded-lg bg-white/60 px-4 py-8 backdrop-blur-[7px]'>
      {children}
    </div>
  )
}

function DateRange({ startDate, endDate }: { startDate: Date; endDate: Date }) {
  return (
    <div className='mt-12 flex justify-between'>
      <span>{formatDate(startDate)}</span>
      <span>{formatDate(endDate)}</span>
    </div>
  )
}

export type ContentCardProps = {
  subject: ReactNode
  title: ReactNode
  description?: ReactNode
  stack?: ReactNode
  startDate: Date
  endDate: Date
}

function ContentList({ className, children }: PropsNeedChildren<Props>) {
  return <ul className={cn('flex w-full max-w-[1244px] gap-px', className)}>{children}</ul>
}

function List({
  subject,
  title,
  description,
  stack,
  startDate,
  endDate,
  boundaryProps
}: ContentCardProps & {
  boundaryProps: { isFirst: boolean; isLast: boolean; isSingle: boolean }
}) {
  return (
    <li className='flex w-full flex-col gap-2'>
      <Subject {...boundaryProps}>{subject}</Subject>
      <div className='px-8 py-14 text-center shadow-[0_0_20px_0_rgba(0,0,0,0.1)] backdrop-blur-[7px]'>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        {stack && <Stack>{stack}</Stack>}
        <DateRange
          startDate={startDate}
          endDate={endDate}
        />

        <div className='mt-4 flex justify-center'>
          <Image
            src={rangeEllipse}
            alt='rangeEllipse'
          />
        </div>
      </div>
    </li>
  )
}

type ContentsProps = {
  contents: ReactNode
}

function ContentsContainer({
  contents,
  isBackground = true
}: ContentsProps & { isBackground?: boolean }) {
  return (
    <section
      className={`relative flex w-full justify-center gap-8 ${isBackground ? 'bg-curriculum-contents-background-gradient' : ''}`}>
      <div className='absolute bottom-[60px] left-8 right-8 z-[1] m-auto h-px max-w-[1180px] bg-green'></div>
      {contents}
    </section>
  )
}

export const CurriculumScheduleCard = Object.assign(ContentsContainer, {
  ContentList,
  List
})
