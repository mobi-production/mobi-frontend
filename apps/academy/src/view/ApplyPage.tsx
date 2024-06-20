import { cn } from '@repo/util'
import Image from 'next/image'

import { pretendard } from '@/common/font'
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
          <ApplySection.title>
            하루 평균 4시간 이상
            <br />
            학습이 가능하신 분
          </ApplySection.title>
        }
        info={<BenefitCardList />}
      />
      <ApplySection
        title={
          <div className='flex flex-col gap-12'>
            <ApplySection.title>
              다른 사람과 소통하고 공유하는 것에
              <br /> 스스럼이 없는 분
            </ApplySection.title>
            <div className='flex flex-col gap-4'>
              <span>
                개발자는 정말 다양한 이해 관계자들과 소통해야하고 또 협업해야하는 직업군입니다.
              </span>
              <span>본인이 작성한 코드와 맥락을 과감없이 다른 분들에게 공유할 수 있어야해요!</span>
            </div>
          </div>
        }
        info={
          <Image
            className='rounded-2xl object-cover'
            src='/webp/apply/middle-banner.webp'
            alt='apply-middle-banner'
            height='360'
            width='1244'
          />
        }
      />
      <ApplySection
        title={
          <ApplySection.title>
            모비에서는 원활한 운영을 위해 <br />
            운영비를 받고 있어요
          </ApplySection.title>
        }
        info={<DescriptionCardList />}
      />
      <ApplyPriceBanner />
      <ApplyScheduleBanner />
    </main>
  )
}
