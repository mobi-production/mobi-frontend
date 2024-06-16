'use client'

import { Button } from '@repo/ui'

import { useMoveToOtherPage } from '@/feature/link/lib'

export function NavigationButton() {
  const onClick = useMoveToOtherPage()
  return (
    <Button
      className='box-content flex items-center justify-center'
      intent='apply'
      size='big'
      onClick={onClick}>
      지원하기
    </Button>
  )
}
