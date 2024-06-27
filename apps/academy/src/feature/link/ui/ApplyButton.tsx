'use client'

import { Button } from '@repo/ui'
import { blankOpener } from '@repo/util'

export function ApplyButton() {
  return (
    <>
      <Button
        className='mobile-hidden'
        intent='apply'
        size='big'
        onClick={blankOpener(process.env.ACADEMY_APPLY_FORM_URL)}
        rounded='full'>
        지원하기
      </Button>
      <Button
        className='desktop-hidden'
        intent='apply'
        onClick={blankOpener(process.env.ACADEMY_APPLY_FORM_URL)}
        rounded='full'>
        지원하기
      </Button>
    </>
  )
}
