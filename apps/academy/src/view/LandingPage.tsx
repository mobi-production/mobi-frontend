import { cn } from '@repo/util'

import { pretendard } from '@/common/font'
import {
  LandingCharityImageSlide,
  LandingTextAnimatedSection,
  MobiDescriptionWithScrollEvent
} from '@/feature/scroll/ui'
import {
  CurriculumScheduleContents,
  CurriculumScheduleSection,
  FAQCardList,
  FAQSection,
  LandingCharityInfoSection,
  LandingEducationFeatureListSection,
  LandingStatisticsBanner,
  MainBanner
} from '@/widget/landing/ui'

export function LandingPage() {
  return (
    <main className={cn(pretendard.className, 'flex w-full flex-col items-center')}>
      {/* LandingPage Top Section */}
      <MainBanner />
      <MobiDescriptionWithScrollEvent />

      {/* LandingPage Center Section */}
      <LandingCharityInfoSection
        title={
          <>
            <LandingCharityInfoSection.Title className='mobile-hidden'>
              {'모비는\n' + '최소한의 운영비를 제외하고 기부하고있어요.'}
            </LandingCharityInfoSection.Title>
            <LandingCharityInfoSection.Title className='desktop-hidden text-text-heading-3'>
              {'모비는\n' + '최소한의 운영비를\n' + '제외하고\n' + '기부하고있어요.'}
            </LandingCharityInfoSection.Title>
          </>
        }
        description={
          <LandingCharityInfoSection.Description className='mobile:pl-[1.25rem] mobile:pr-[1.25rem]'>
            {'모비가 최소한의 금액으로 이러한 질 좋은 콘텐츠 제공이 가능한 이유는 모비의 설립 취지에 있습니다.\n' +
              '모비는 운영비용을 제외한 금액을 개인의 이윤으로 추구하지 않습니다.\n' +
              '초과분의 금액은 소외 계층을 위해 직접 기부하고 전달하며, 매 분기마다 운영진들이 모두 자발적 봉사에 참여하여 어려운 이웃을 돕고 있어요.\n\n' +
              '이렇게 좋은 뜻을 가진 운영진들이 모여 봉사 활동도 하고 재능 기부도 하는 선한 영향력을 가진 단체이기 때문에\n' +
              '이 모든 서비스가 저렴한 비용으로 제공될 수 있어요!\n'}
          </LandingCharityInfoSection.Description>
        }
        images={
          <LandingCharityInfoSection.ImageSlider>
            <LandingCharityImageSlide />
          </LandingCharityInfoSection.ImageSlider>
        }
      />
      <LandingStatisticsBanner />
      <LandingTextAnimatedSection />
      <LandingEducationFeatureListSection />

      {/* LandingPage Bottom Section */}
      <CurriculumScheduleSection
        title={
          <CurriculumScheduleSection.title className='text-center'>
            모비 프론트 2기 <br />
            커리큘럼 및 일정
          </CurriculumScheduleSection.title>
        }
        info={<CurriculumScheduleContents />}
      />
      <FAQSection
        title={<FAQSection.title>자주 묻는 질문</FAQSection.title>}
        faq={<FAQCardList />}
      />
    </main>
  )
}
