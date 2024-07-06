import { cn, formatDate } from '@repo/util'
import { cva } from 'class-variance-authority'
import Image from 'next/image'
import { ReactNode } from 'react'

import rangeEllipse from '/public/svg/range-ellipse.svg'
import { CurriculumGroupType } from '@/types/landing'
import type { ContentCardProps } from '@/widget/landing/constants'
import { getBorderRadius } from '@/widget/landing/util'

type Props = {
  className?: string
}

type GroupIndexProps = {
  index: number
  group: CurriculumGroupType
}

type SubjectProps = Props & PropsNeedChildren & GroupIndexProps

const subjectStyles = cva(
  'flex items-center justify-center gap-2 border border-glass-stroke border-box bg-curriculum-subject-background-gradient px-4 py-8',
  {
    variants: {
      borderRadius: {
        none: '',
        tl: 'rounded-tl-2xl',
        tr: 'rounded-tr-2xl',
        both: 'rounded-t-2xl'
      }
    },
    defaultVariants: {
      borderRadius: 'none'
    }
  }
)

function Subject({ className, children, index, group }: SubjectProps) {
  const borderRadius = getBorderRadius(group, index)

  return (
    <div
      className={cn(
        subjectStyles({ borderRadius }),
        'mobile:rounded-t-2xl mobileAndTablet:rounded-t-2xl tablet:rounded-t-2xl',
        className
      )}>
      <h4 className='text-text-title-1 font-normal'>{children}</h4>
    </div>
  )
}

function Title({ children }: PropsNeedChildren) {
  return <h2 className='mb-8 break-keep text-text-heading-3 font-semibold'>{children}</h2>
}

function Description({ children }: PropsNeedChildren) {
  return <span className='mb-10 block h-16 text-balance break-keep mobile:h-auto'>{children}</span>
}

function Stack({ children }: PropsNeedChildren) {
  return (
    <div className='flex max-h-[88px] items-center justify-center text-balance rounded-lg bg-white/60 px-4 py-8 backdrop-blur-[7px]'>
      {children}
    </div>
  )
}

function DateRange({ startDate, endDate }: { startDate: Date; endDate: Date }) {
  return (
    <div className='mt-12 flex justify-between mobile:mt-10'>
      <span className='text-text-body-2 font-normal text-green mobile:text-text-body-3'>
        {formatDate(startDate)}
      </span>
      <span className='text-text-body-2 font-normal text-green mobile:text-text-body-3'>
        {formatDate(endDate)}
      </span>
    </div>
  )
}

function ContentList({
  className,
  children,
  group
}: PropsNeedChildren<Props> & { group: CurriculumGroupType }) {
  return (
    <ul
      className={cn(
        'grid w-full max-w-[1244px] gap-4 mobile:px-5 mobileAndTablet:px-5 tablet:px-5 tabletAndLaptop:px-5',
        {
          'grid-cols-1 mobile:grid-cols-1 mobileAndTablet:grid-cols-1 tablet:grid-cols-1': true,
          'grid-cols-3 gap-px mobile:gap-4 mobileAndTablet:gap-4 tablet:gap-4':
            group === 1 || group === 2,
          'grid-cols-1': group === 3 || group === 4
        },
        className
      )}>
      {children}
    </ul>
  )
}

function List({
  subject,
  title,
  description,
  stack,
  startDate,
  endDate,
  idx,
  group
}: ContentCardProps & GroupIndexProps) {
  return (
    <li className='flex w-full flex-col gap-2 mobile:relative mobileAndTablet:relative tablet:relative'>
      <div className='absolute bottom-[60px] left-8 right-8 z-[1] m-auto h-px max-w-[1180px] bg-green mobile:left-6 mobile:right-6' />
      <Subject
        index={idx}
        group={group}>
        {subject}
      </Subject>
      <div className='px-8 py-14 text-center shadow-[0_0_20px_0_rgba(0,0,0,0.1)] backdrop-blur-[7px] mobile:px-6'>
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

type ContentsContainerProps = {
  contents: ReactNode
  isBackground?: boolean
}

function ContentsContainer({ contents, isBackground = true }: ContentsContainerProps) {
  return (
    <section
      className={cn(
        'relative flex w-full justify-center gap-8',
        isBackground &&
          'bg-curriculum-contents-background-gradient mobile:bg-none mobileAndTablet:bg-none tablet:bg-none'
      )}>
      {contents}
    </section>
  )
}

export const CurriculumScheduleCard = Object.assign(ContentsContainer, {
  ContentList,
  List
})
