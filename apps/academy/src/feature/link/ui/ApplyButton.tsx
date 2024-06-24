'use client'

import { Button } from '@repo/ui'
import { blankOpener } from '@repo/util'

export function ApplyButton() {
  return (
    <>
      <Button
        className='mobile-hidden box-content'
        intent='apply'
        size='big'
        onClick={blankOpener(process.env.ACADEMY_APPLY_FORM_URL)}
        rounded='full'>
        <div className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]'>
          지원하기
        </div>
      </Button>
      <Button
        className='desktop-hidden box-content'
        intent='apply'
        onClick={blankOpener(process.env.ACADEMY_APPLY_FORM_URL)}
        rounded='full'>
        <div className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]'>
          지원하기
        </div>
      </Button>
    </>
  )
}
