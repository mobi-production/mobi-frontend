import Image from 'next/image'

import ArrowWebp from '/public/webp/arrow-down.webp'

type Props = {
  onClick: () => void
  isToggle: boolean
}

export function FAQToggleButton({ onClick, isToggle }: Props) {
  return (
    <button
      onClick={onClick}
      className={`transform transition-transform duration-200 ${isToggle ? 'rotate-180' : ''}`}>
      <Image
        className='mobile:w-4'
        src={ArrowWebp}
        alt='arrow toggle icon'
      />
    </button>
  )
}
