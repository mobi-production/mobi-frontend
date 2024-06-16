import Image from 'next/image'

import {
  LandingCharityInfoSection,
  LandingEducationFeatureListSection,
  LandingStatisticsBanner,
  LandingTextAnimatedSection
} from '@/widget/landing/ui'

export function LandingPage() {
  return (
    <main>
      {/* LandingPage Top Section */}

      {/* LandingPage Center Section */}
      <LandingCharityInfoSection
        title={
          <LandingCharityInfoSection.Title>
            모비는 <br />
            최소한의 운영비를 제외하고 기부하고있어요.
          </LandingCharityInfoSection.Title>
        }
        description={
          <LandingCharityInfoSection.Description>
            모비가 최소한의 금액으로 이러한 질 좋은 콘텐츠 제공이 가능한 이유는 모비의 설립 취지에
            있습니다. <br />
            모비는 운영비용을 제외한 금액을 개인의 이윤으로 추구하지 않습니다.
            <br />
            초과분의 금액은 소외 계층을 위해 직접 기부하고 전달하며, 매 분기마다 운영진들이 모두
            자발적 봉사에 참여하여 어려운 이웃을 돕고 있어요. <br />
            <br />
            이렇게 좋은 뜻을 가진 운영진들이 모여 봉사 활동도 하고 재능 기부도 하는 선한 영향력을
            가진 단체이기 때문에
            <br /> 이 모든 서비스가 저렴한 비용으로 제공될 수 있어요!
          </LandingCharityInfoSection.Description>
        }
        images={
          <LandingCharityInfoSection.ImageSlider>
            {/* Todo: 실제 슬라이드 기능 컴포넌트 추가하기 */}
            <Image
              className='object-cover'
              src='/svg/landing/charity-sample.svg'
              alt='landing-charity-slide-image'
              height='4060'
              width='2090'
            />
          </LandingCharityInfoSection.ImageSlider>
        }
      />
      <LandingStatisticsBanner />
      <LandingTextAnimatedSection />
      <LandingEducationFeatureListSection />

      {/* <section>
        LandingEducationFeaturesSection
        <div>LandingEducationTitle</div>
        <div>LandingEducationCard</div>
      </section> */}

      {/* LandingPage Bottom Section */}
    </main>
  )
}
