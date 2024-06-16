import { cn } from '@repo/util'

import { pretendard } from '@/common/font'
import { MobiDescriptionCardList, MobiDescriptionImagesSlider } from '@/widget/landing/ui'
import { MainBanner } from '@/widget/landing/ui/MainBanner'

export function LandingPage() {
  return (
    <main className={cn(pretendard.className, 'flex w-full flex-col items-center')}>
      <MainBanner />
      <div className='flex pt-[8.75rem]'>
        <MobiDescriptionCardList />
        <MobiDescriptionImagesSlider />
      </div>
    </main>
  )
}
