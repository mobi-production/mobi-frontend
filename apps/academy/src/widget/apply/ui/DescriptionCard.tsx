import { cn } from '@repo/util'
import Image from 'next/image'
import { ComponentPropsWithoutRef } from 'react'

type Props = {
  className?: string
}

function Img({ width = 592, height = 394, ...rest }: ComponentPropsWithoutRef<typeof Image>) {
  return (
    <Image
      width={width}
      height={height}
      {...rest}
    />
  )
}

function Title({ className, children }: PropsNeedChildren<Props>) {
  return <h4 className={cn('text-text-title-1', className)}>{children}</h4>
}

function Description({ className, children, ...rest }: PropsNeedChildren<Props>) {
  return (
    <span
      className={cn('text-text-body-1', 'text-gray-1', className)}
      {...rest}>
      {children}
    </span>
  )
}

type DescriptionContainerProps = {
  image?: React.ReactNode
  info?: React.ReactNode
}

function DescriptionContainer({ info, image }: DescriptionContainerProps) {
  return (
    <section className='flex-shrink-0 rounded-t-2xl'>
      {image}
      <div className='flex flex-col items-start gap-8 bg-gray-5 px-8 py-6'>{info}</div>
    </section>
  )
}

export const DescriptionCard = Object.assign(DescriptionContainer, { Img, Title, Description })
