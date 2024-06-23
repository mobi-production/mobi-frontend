'use client'

import { Button } from '@repo/ui'

import { useMoveToApplyLink } from '@/feature/link/lib'

export function ApplyButton() {
  const onClick = useMoveToApplyLink()
  return (
    <>
      <Button
        className='box-content flex items-center justify-center mobile:hidden mobileAndTablet:hidden'
        intent='apply'
        size='big'
        onClick={onClick}>
        지원하기
      </Button>
      <Button
        className='box-content flex items-center justify-center px-0 mobile:mx-5 mobile:w-full mobileAndTablet:mx-5 mobileAndTablet:w-full tablet:hidden tabletAndLaptop:hidden desktop:hidden'
        intent='apply'
        onClick={onClick}>
        지원하기
      </Button>
    </>
  )
}
