import { ApplyTopBannerBackGround } from '@/widget/apply/ui/ApplyTopBannerBackGround'
import { ApplyTopBannerContents } from '@/widget/apply/ui/ApplyTopBannerContents'
export function ApplyTopBanner() {
  return (
    <section className='relative h-screen w-full'>
      <div className='absolute z-10 h-full w-full bg-apply-background-gradient' />
      <ApplyTopBannerBackGround />
      <ApplyTopBannerContents />
    </section>
  )
}
