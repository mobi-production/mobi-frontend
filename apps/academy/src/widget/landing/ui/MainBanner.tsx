'use client'

import Image from 'next/image'

import { NavigationButton } from '@/feature/link/ui/NavigationButton'

export function MainBanner() {
  return (
    <div className='relative h-screen w-full'>
      <Image
        className='object-cover'
        src='/webp/landing/landing-top-banner-bg.webp'
        alt='landing-top-banner-background'
        fill
      />
      <div className='z-1 relative flex h-screen w-full flex-col items-center justify-center gap-6'>
        <div className='text-text-title-2'>MOBI</div>
        <div className='text-text-heading-1'>모두의 꿈을 이끄는 비전. 모비</div>
        <div className='text-center text-text-title-2 font-normal'>
          <div>
            모비는 교육기관에서 수업을 듣기에는 금액적, 시간적으로 부담스럽거나 이전에 사전 학습을
            통해
          </div>
          <div>
            실무를 경험하고 싶은 대학생이 최소한의 비용과 작은 부담으로 입문할 수 있도록 실무진이
            멘토링 해주며 올바른 방향성을 제시하는 단체입니다.
          </div>
        </div>
        <div>
          모비의 수익금은 최소한의 운영비를 제외하고 소외 계층과 어려운 이웃에게 기부하고 있습니다.
        </div>
        <div>
          <NavigationButton
            href='/apply'
            intent='ghost'
            rounded='full'
            size='large'
            className='font-semibold text-green'>
            지원하기
          </NavigationButton>
        </div>
      </div>
    </div>
  )
}
