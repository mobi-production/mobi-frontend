import { cn } from '@repo/util'
import Image from 'next/image'

import { pretendard } from '@/common/font'
import { APPLY_TITLE } from '@/widget/apply/constants'
import {
  ApplyPriceBanner,
  ApplyScheduleBanner,
  ApplySection,
  ApplyTopBanner,
  BenefitCardList,
  DescriptionCardList
} from '@/widget/apply/ui'

export function ApplyPage() {
  return (
    <main className={cn(pretendard.className, 'flex w-full flex-col items-center')}>
      <ApplyTopBanner />
      <ApplySection
        title={
          <>
            <ApplySection.title className='mobile:hidden mobileAndTablet:hidden'>
              {APPLY_TITLE.section_1.title}
            </ApplySection.title>
            <ApplySection.title className='tablet:hidden tabletAndLaptop:hidden desktop:hidden'>
              {APPLY_TITLE.section_1.mobile_title}
            </ApplySection.title>
          </>
        }
        info={<BenefitCardList />}
      />
      <ApplySection
        title={
          <div className='flex flex-col gap-12 whitespace-pre-wrap'>
            <ApplySection.title>{APPLY_TITLE.section_2.title}</ApplySection.title>
            <div className='flex flex-col gap-4'>
              <span className='whitespace-pre-wrap'>{APPLY_TITLE.section_2.sub_title_1}</span>
              <span className='whitespace-pre-wrap'>{APPLY_TITLE.section_2.sub_title_2}</span>
            </div>
          </div>
        }
        info={
          <>
            <Image
              className='rounded-2xl object-cover mobile:hidden mobileAndTablet:hidden'
              src='/webp/apply/middle-banner-desktop.webp'
              alt='apply-middle-banner'
              height='360'
              width='1244'
            />
            <Image
              className='rounded-2xl object-cover tablet:hidden tabletAndLaptop:hidden desktop:hidden'
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
            <ApplySection.title className='mobile:hidden mobileAndTablet:hidden'>
              {APPLY_TITLE.section_3.title}
            </ApplySection.title>
            <ApplySection.title className='tablet:hidden tabletAndLaptop:hidden desktop:hidden'>
              {APPLY_TITLE.section_3.mobile_title}
            </ApplySection.title>
          </>
        }
        info={<DescriptionCardList />}
      />
      <ApplyPriceBanner />
      <ApplyScheduleBanner />
    </main>
  )
}
