'use client'

import { Button } from '@repo/ui'
import { blankOpener } from '@repo/util'

export function ResponsiveSupportedApplyButton() {
  return (
    <>
      <Button
        className='mobile-hidden'
        intent='apply'
        size='big'
        rounded='full'
        onClick={blankOpener(process.env.ACADEMY_APPLY_FORM_URL)}>
        지원하기
      </Button>
      <Button
        className='desktop-hidden'
        intent='apply'
        size='big'
        rounded='full'
        onClick={blankOpener(process.env.ACADEMY_APPLY_FORM_URL)}>
        지원하기
      </Button>
    </>
  )
}
