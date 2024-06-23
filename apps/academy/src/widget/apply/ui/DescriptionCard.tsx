import { cn } from '@repo/util'
import Image from 'next/image'
import { ComponentPropsWithoutRef } from 'react'

type Props = {
  className?: string
}

function Img({ ...rest }: ComponentPropsWithoutRef<typeof Image>) {
  return (
    <>
      <Image
        className='mobile-hidden'
        height={394}
        width={592}
        {...rest}
      />
      <Image
        className='desktop-hidden w-full'
        height={212}
        width={320}
        {...rest}
      />
    </>
  )
}

function Title({ className, children }: PropsNeedChildren<Props>) {
  return (
    <h4
      className={cn(
        'whitespace-pre-wrap text-text-title-1 mobile:text-text-title-1 mobileAndTablet:text-text-title-1',
        className
      )}>
      {children}
    </h4>
  )
}

function Description({ className, children, ...rest }: PropsNeedChildren<Props>) {
  return (
    <h4
      className={cn('whitespace-pre-wrap', 'text-text-body-1', 'text-gray-1', className)}
      {...rest}>
      {children}
    </h4>
  )
}

type DescriptionContainerProps = {
  image?: React.ReactNode
  info?: React.ReactNode
}

function DescriptionContainer({ info, image }: DescriptionContainerProps) {
  return (
    <section className='col-span-1 rounded-t-2xl'>
      {image}
      <div className='flex w-full flex-col items-start gap-8 whitespace-pre-wrap bg-gray-5 px-8 py-6 mobile:px-4 mobile:py-[32px] mobileAndTablet:px-4 mobileAndTablet:py-[32px]'>
        {info}
      </div>
    </section>
  )
}

export const DescriptionCard = Object.assign(DescriptionContainer, { Img, Title, Description })
