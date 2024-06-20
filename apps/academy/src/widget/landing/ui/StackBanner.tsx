import Image from 'next/image'

import { STACK_IMAGES } from '@/widget/landing/constants'

export function StackBanner() {
  return (
    <section className='flex gap-8'>
      {STACK_IMAGES.map((image) => (
        <Image
          key={image.id}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </section>
  )
}
