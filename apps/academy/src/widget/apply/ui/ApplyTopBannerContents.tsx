import { APPLY_TITLE } from '@/widget/apply/constants'

export function ApplyTopBannerContents() {
  return (
    <div className='relative z-20 flex flex-col items-center gap-8 xl:pt-[360px]'>
      <h1 className='md:text-text-heading-2 xl:text-text-heading-1'>
        {APPLY_TITLE.top_banner.title}
      </h1>
      <h5 className='text-text-title-2'>{APPLY_TITLE.top_banner.subTitle}</h5>
    </div>
  )
}
