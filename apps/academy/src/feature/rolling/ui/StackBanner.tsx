'use client'
import Image from 'next/image'

import { useCloneRollingBanner } from '@/feature/rolling/lib'
import { STACK_IMAGES } from '@/widget/landing/constants'

export function StackBanner() {
  const { cloneCreated } = useCloneRollingBanner()

  const imageList = (className: string) => (
    <div className={`rolling-list flex gap-8 ${className}`}>
      {STACK_IMAGES.map((image) => (
        <div
          key={image.id}
          className='h-[96px] w-[96px] flex-none'>
          <Image
            src={image.src}
            alt={image.alt}
            width={96}
            height={96}
          />
        </div>
      ))}
    </div>
  )

  return (
    <div className='relative flex overflow-hidden'>
      {imageList('curriculum-stack-original')}
      {cloneCreated && imageList('clone')}
    </div>
  )
}
