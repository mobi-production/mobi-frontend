// import Image from 'next/image'

// import { STACK_IMAGES } from '@/widget/landing/constants'

// export function StackBanner() {
//   return (
//     <section className='flex gap-8'>
//       {STACK_IMAGES.map((image) => (
//         <Image
//           key={image.id}
//           src={image.src}
//           alt={image.alt}
//         />
//       ))}
//     </section>
//   )
// }

'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

import { STACK_IMAGES } from '../constants'

export function StackBanner() {
  const rollerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const roller = rollerRef.current
    if (roller) {
      const clone = roller.cloneNode(true) as HTMLDivElement
      clone.classList.add('clone')
      roller.parentNode?.appendChild(clone)

      roller.classList.add('original')
    }
  }, [])

  return (
    <div className='relative flex overflow-hidden'>
      <div
        ref={rollerRef}
        className='rolling-list flex gap-8'>
        {STACK_IMAGES.map((image) => (
          <div
            key={image.id}
            className='h-[96px] w-[96px] flex-none'>
            <Image
              src={image.src}
              alt={image.alt}
              width={96}
              height={96} // Image height 추가
            />
          </div>
        ))}
      </div>
    </div>
  )
}
