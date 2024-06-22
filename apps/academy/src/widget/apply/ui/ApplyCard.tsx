import { cn } from '@repo/util'
import Image from 'next/image'
import { ReactNode } from 'react'

import EllipseSvg from '/public/svg/apply/ellipse.svg'

type Props = {
  className?: string
}

function Title({ className, children }: PropsNeedChildren<Props>) {
  return (
    <h4
      className={cn(
        'w-full border-b border-b-gray-4 pb-6 text-center text-text-heading-3',
        className
      )}>
      {children}
    </h4>
  )
}

type PriceProps = {
  price: number
}

function Price({ price }: PriceProps) {
  return (
    <span>
      <span className='text-text-heading-2 text-secondary'>{price.toLocaleString()}</span> 각 과정당
    </span>
  )
}

function DescriptionList({ className, children }: PropsNeedChildren<Props>) {
  return <ul className={cn('flex flex-col items-center gap-3', className)}>{children}</ul>
}

function List({ className, children }: PropsNeedChildren<Props>) {
  return (
    <li
      className={cn(
        'flex gap-2 text-center text-text-body-1 mobile:text-start mobileAndTablet:text-start',
        'text-gray-1',
        className
      )}>
      <Image
        className='flex items-center justify-center'
        src={EllipseSvg}
        alt='Ellipse'
      />
      <span>{children}</span>
    </li>
  )
}

type ApplyCardProps = {
  title: ReactNode
  price: ReactNode
  info: ReactNode
}

function DescriptionContainer({ info, title, price }: ApplyCardProps) {
  return (
    <section className='filter-[0.438rem] box-content flex flex-col items-center gap-8 rounded-2xl bg-white px-8 py-16 mobile:px-6 mobile:py-10 mobileAndTablet:px-6 mobileAndTablet:py-10'>
      {title}
      {price}
      {info}
    </section>
  )
}

export const ApplyCard = Object.assign(DescriptionContainer, {
  Title,
  Price,
  DescriptionList,
  List
})
