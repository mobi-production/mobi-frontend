'use client'

import { Button } from '@repo/ui'

import { useMoveToApplyLink } from '@/feature/link/lib'

export function ApplyButton() {
  const onClick = useMoveToApplyLink()
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
