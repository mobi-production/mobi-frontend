import { cn } from '@repo/util'
import Image from 'next/image'

import { pretendard } from '@/common/font'
import { APPLY_CONTENT } from '@/widget/apply/constants'
import {
  ApplySection,
  DescriptionCardList,
  OperatingCardList,
  PriceBanner,
  ScheduleBanner,
  TopBanner
} from '@/widget/apply/ui'

export function ApplyPage() {
  return (
    <main className={cn(pretendard.className, 'flex w-full flex-col items-center')}>
      <TopBanner />
      <ApplySection
        title={
          <>
            <ApplySection.title className='mobile-hidden'>
              {APPLY_CONTENT.description_section.title}
            </ApplySection.title>
            <ApplySection.title className='desktop-hidden text-balance'>
              {APPLY_CONTENT.description_section.mobile_title}
            </ApplySection.title>
          </>
        }
        info={<DescriptionCardList />}
      />
      <ApplySection
        title={
          <div className='flex flex-col gap-12 whitespace-pre-wrap'>
            <ApplySection.title>{APPLY_CONTENT.communication_section.title}</ApplySection.title>
            <div className='flex flex-col gap-4'>
              <span className='whitespace-pre-wrap'>
                {APPLY_CONTENT.communication_section.sub_title_1}
              </span>
              <span className='whitespace-pre-wrap'>
                {APPLY_CONTENT.communication_section.sub_title_2}
              </span>
            </div>
          </div>
        }
        info={
          <>
            <Image
              className='mobile-hidden w-full rounded-2xl object-cover'
              src='/webp/apply/middle-banner-desktop.webp'
              alt='apply-middle-banner'
              height='360'
              width='1244'
            />
            <Image
              className='desktop-hidden w-full rounded-2xl object-cover'
              src='/webp/apply/middle-banner-mobile.webp'
              alt='apply-middle-banner'
              height='200'
              width='320'
            />
          </>
        }
      />
      <ApplySection
        title={
          <>
            <ApplySection.title className='mobile-hidden'>
              {APPLY_CONTENT.operating_cost_section.title}
            </ApplySection.title>
            <ApplySection.title className='desktop-hidden text-balance'>
              {APPLY_CONTENT.operating_cost_section.title}
            </ApplySection.title>
          </>
        }
        info={<OperatingCardList />}
      />
      <PriceBanner />
      <ScheduleBanner />
    </main>
  )
}
