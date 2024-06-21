import { cn } from '@repo/util'

import { pretendard } from '@/common/font'
import { MobiDescriptionWithScrollEvent } from '@/feature/scroll/ui'
import { MainBanner } from '@/widget/landing/ui'

export function LandingPage() {
  return (
    <main className={cn(pretendard.className, 'flex w-full flex-col items-center')}>
      <MainBanner />
      <MobiDescriptionWithScrollEvent />
    </main>
  )
}
