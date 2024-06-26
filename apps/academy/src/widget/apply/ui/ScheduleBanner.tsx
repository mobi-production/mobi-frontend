import { ResponsiveSupportedApplyButton } from '@/feature/link/ui'
import { APPLY_CONTENT } from '@/widget/apply/constants'

import { ScheduleBannerCardList } from './ScheduleBannerCardList'

export function ScheduleBanner() {
  return (
    <div className='apply-box flex w-full flex-col gap-20 bg-gray-5 text-center'>
      <h2 className='whitespace-pre-wrap text-text-heading-2 mobile:text-text-heading-3 mobileAndTablet:text-text-heading-3'>
        {APPLY_CONTENT.schedule_banner.title}
      </h2>
      <div className='flex flex-col items-center gap-16'>
        <ScheduleBannerCardList />
        <ResponsiveSupportedApplyButton />
      </div>
    </div>
  )
}
