'use client'

import { Button } from '@repo/ui'
import { blankOpener } from '@repo/util'

export function ResponsiveSupportedApplyButton() {
  return (
    <>
      <Button
        className='mobile-hidden'
        rounded='full'
        onClick={blankOpener(process.env.ACADEMY_APPLY_FORM_URL)}>
        지원하기
      </Button>
      <Button
        className='desktop-hidden'
        size='full'
        rounded='full'
        onClick={blankOpener(process.env.ACADEMY_APPLY_FORM_URL)}>
        지원하기
      </Button>
    </>
  )
}
