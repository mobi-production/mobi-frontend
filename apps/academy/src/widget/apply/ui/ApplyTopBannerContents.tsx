import { APPLY_TITLE } from '@/widget/apply/constants'

export function ApplyTopBannerContents() {
  return (
    <div className='relative z-20 flex flex-col items-center gap-8 pt-[22.5rem] mobile:pt-[10.75rem] mobileAndTablet:pt-[10.75rem]'>
      <h1 className='text-text-heading-1 mobile:text-text-heading-2 mobileAndTablet:text-text-heading-2'>
        {APPLY_TITLE.top_banner.title}
      </h1>
      <h5 className='overflow-auto text-center text-text-title-2 mobile:w-80 mobile:whitespace-pre-wrap mobile:text-text-body-1 mobileAndTablet:w-80 mobileAndTablet:whitespace-pre-wrap mobileAndTablet:text-text-body-1'>
        {APPLY_TITLE.top_banner.subTitle}
      </h5>
    </div>
  )
}
