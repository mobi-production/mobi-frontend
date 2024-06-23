'use client'
import Image from 'next/image'

import { useCloneRollingBanner } from '@/feature/rolling/lib'
import { STACK_IMAGES } from '@/widget/landing/constants'

export function StackBanner() {
  const { cloneCreated } = useCloneRollingBanner()

  return (
    <div className='relative flex overflow-hidden'>
      <StackImageList className='animate-stack-banner-loop' />
      <StackImageList
        className='absolute left-0 top-0 animate-stack-banner-continuous'
        isRendered={cloneCreated}
      />
    </div>
  )
}

type Props = {
  className: string
  isRendered?: boolean
}

function StackImageList({ className, isRendered = true }: Props) {
  if (!isRendered) return null
  return (
    <ul className={`rolling-list flex gap-8 ${className}`}>
      {STACK_IMAGES.map((image) => (
        <li
          key={image.id}
          className='h-24 w-24 flex-none'>
          <Image
            src={image.src}
            alt={image.alt}
            width={96}
            height={96}
          />
        </li>
      ))}
    </ul>
  )
}
