import Image from 'next/image'

import ArrowWebp from '/public/webp/arrow-down.webp'

type Props = {
  isToggle: boolean
}

export function FAQToggleButton({ isToggle }: Props) {
  return (
    <button className={`transform duration-200 ${isToggle ? 'rotate-180' : ''}`}>
      <Image
        className='mobile:w-4'
        src={ArrowWebp}
        alt='arrow toggle icon'
      />
    </button>
  )
}
