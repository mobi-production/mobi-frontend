'use client'

import { useTextScrollAnimation } from '../lib'

export function LandingTextAnimatedSection() {
  const { sectionRef, isSticky, gradientStyle } = useTextScrollAnimation()

  return (
    <div>
      <div className='mobile-hidden'>
        <div
          ref={sectionRef}
          className={`relative flex h-screen flex-col items-center justify-center ${isSticky ? 'sticky top-0' : ''}`}>
          <div
            className={`flex h-screen w-full items-center justify-center ${isSticky ? 'sticky top-0' : ''}`}>
            <h2
              className='bg-[radial-gradient(var(--shape)_at_var(--position),#FFF,#1B1B1C)] bg-clip-text text-center text-text-heading-1 text-transparent'
              style={gradientStyle}>
              모비에서는 이런 것을 경험 할 수 있어요
            </h2>
            <div
              className='absolute -left-[700px] top-0 flex h-full w-full items-center justify-center'
              style={{
                ...gradientStyle,
                transform: `translateX(${gradientStyle['--position']})`
              }}
            />
          </div>
        </div>
        <div className='h-screen' />
      </div>
      <div className='desktop-hidden flex h-screen w-full items-center justify-center'>
        <h2 className='desktop-hidden text-heading-1 bg-gradient-to-r from-[#191919] to-[#d1d1d1] bg-clip-text text-center text-text-heading-3 text-transparent'>
          모비에서는 이런 것을
          <br /> 경험 할 수 있어요
        </h2>
      </div>
    </div>
  )
}
