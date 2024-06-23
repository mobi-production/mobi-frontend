import Image from 'next/image'

import { EducationFeatureCardContent } from './EducationFeatureCardContent'
import { LandingEducationFeatureSection } from './LandingEducationFeatureSection'

const ExampleImage = (
  <>
    <Image
      src={`data:image/svg+xml;charset=UTF-8,<svg width='384' height='242' xmlns='http://www.w3.org/2000/svg'><rect width='384' height='242' fill='%23cccccc'/><text x='50%' y='50%' font-family='Arial' font-size='20' fill='%23777777' dy='.3em' text-anchor='middle'>384x242</text></svg>`}
      alt='Placeholder Image'
      className='mobile-hidden'
      width={384}
      height={242}
    />
    <Image
      src={`data:image/svg+xml;charset=UTF-8,<svg width='256' height='160' xmlns='http://www.w3.org/2000/svg'><rect width='256' height='160' fill='%23cccccc'/><text x='50%' y='50%' font-family='Arial' font-size='20' fill='%23777777' dy='.3em' text-anchor='middle'>256x160</text></svg>`}
      alt='Placeholder Image'
      className='desktop-hidden'
      width={256}
      height={160}
    />
  </>
)

export function LandingEducationFeatureListSection() {
  return (
    <section>
      <LandingEducationFeatureSection
        className='mobile-pt-0 pb-[8.75rem] pt-[8.75rem] mobile:pb-0'
        title={
          <>
            <LandingEducationFeatureSection.Title className='mobile-hidden mb-[5rem]'>
              체계적인 커리큘럼으로부터 배우는 <span className='text-primary'>코딩</span>부터!
            </LandingEducationFeatureSection.Title>
            <LandingEducationFeatureSection.Title className='desktop-hidden mb-[5rem] text-text-heading-3'>
              체계적인 커리큘럼으로부터
              <br /> 배우는 <span className='text-primary'>코딩</span>부터!
            </LandingEducationFeatureSection.Title>
          </>
        }
        info={
          <LandingEducationFeatureSection.Info className='flex flex-col gap-[1.5rem]'>
            <EducationFeatureCardContent
              bgGradient='bg-landing-card-background-gradient-green'
              image={ExampleImage}
              title={'체계적인 커리큘럼을 통해\n' + '학습 플로우 제공'}
              mobileTitle='체계적인 커리큘럼을 통해 학습 플로우 제공'
              descriptions={
                '언제나 무료로 개방되어있는 프리코스부터 시작하여\n' +
                '멘토링 없이 저렴하게 상시 지원할 수 있는 일반 과정,\n' +
                '나아가 제한된 인원을 수용하여 실무진들이 멘토링하는 패스과정까지! \n\n' +
                '모비를 찾는 모든 분들이 필요로 하는 방향성을 제공 해드릴게요.'
              }
              mobileDescriptions={
                '언제나 무료로 개방되어있는 프리코스부터 시작하여 멘토링 없이 저렴하게 상시 지원할 수 있는 일반 과정, 나아가 제한된 인원을 수용하여 실무진들이 멘토링하는 패스과정까지!\n\n' +
                '모비를 찾는 모든 분들이 필요로 하는 방향성을 제공 해드릴게요.'
              }
            />
            <EducationFeatureCardContent
              bgGradient='bg-landing-card-background-gradient-purple'
              image={ExampleImage}
              title={'매 과정 학습을 복기할 수 있는\n' + 'AI 퀴즈'}
              mobileTitle='매 과정 학습을 복기할 수 있는 AI 퀴즈'
              descriptions={
                '퀴즈에서 틀리면 AI 모비봇이 여러분들에게 정답에 대한\n' +
                '힌트와 조언을 줄거에요! \n\n' +
                '퀴즈를 풀며 활동 내역을 쌓아가며 오늘 내가 학습을 무사히 \n' +
                '마쳤는지 무엇을 배웠는지 체크리스트를 통해 확인해봐요.'
              }
              mobileDescriptions={
                '퀴즈에서 틀리면 AI 모비봇이 여러분들에게 정답에 대한 힌트와 조언을 줄거에요!\n\n' +
                '퀴즈를 풀며 활동 내역을 쌓아가며 오늘 내가 학습을 무사히 마쳤는지 무엇을 배웠는지 체크 리스트를 통해 확인해봐요.'
              }
            />
          </LandingEducationFeatureSection.Info>
        }
      />
      <LandingEducationFeatureSection
        className='mobile-pt-[4.375rem] pb-[8.75rem] pt-[8.75rem] mobile:pb-[4.375rem]'
        title={
          <LandingEducationFeatureSection.Title className='mb-[5rem]'>
            조별 학습과 페어프로그래밍을 통한 <span className='text-primary'>협업</span>
          </LandingEducationFeatureSection.Title>
        }
        info={
          <LandingEducationFeatureSection.Info className='flex flex-col gap-[1.5rem]'>
            <EducationFeatureCardContent
              bgGradient='bg-landing-card-background-gradient-orange'
              image={ExampleImage}
              title={'페어가 모여 하나의 팀으로\n' + '학습 진행'}
              mobileTitle='페어가 모여 하나의 팀으로 학습 진행'
              descriptions={
                '같은 기수 내에서 학습 시간대가 비슷한 인원끼리\n' +
                '페어와 또 페어가 모여 하나의 조를 이루어 학습을 진행합니다.\n\n' +
                '매주 본인의 학습 내용을 발표하는 WIL\n' +
                '그새 정이 들어버린 페어들과 학습 내용을 공유해요!\n\n' +
                '힘든 시간을 이기고 나면 끈끈해진 전우애가 함께 할 거에요!'
              }
              mobileDescriptions={
                '같은 기수 내에서 학습 시간대가 비슷한 인원끼리 페어와 또 페어가 모여 하나의 조를 이루어 학습을 진행합니다.\n\n' +
                '매주 본인의 학습 내용을 발표하는 WIL 그새 정이 들어버린 페어들과 학습 내용을 공유해요!\n\n' +
                '힘든 시간을 이기고 나면 끈끈해진 전우애가 함께 할 거에요!'
              }
            />
          </LandingEducationFeatureSection.Info>
        }
      />
      <LandingEducationFeatureSection
        className='pb-[8.75rem] pt-[8.75rem]'
        title={
          <LandingEducationFeatureSection.Title className='mb-[5rem]'>
            동기부여를 위한 학습 <span className='text-primary'>플래너와 관리</span>
          </LandingEducationFeatureSection.Title>
        }
        info={
          <LandingEducationFeatureSection.Info className='flex flex-col gap-[1.5rem]'>
            <EducationFeatureCardContent
              bgGradient='bg-landing-card-background-gradient-red'
              image={ExampleImage}
              title={'학습 동기 부여를 위한\n' + '자체 학습 플래너 시스템'}
              mobileTitle='학습 동기 부여를 위한 자체 학습 플래너 시스템'
              descriptions={
                '학습 플래너 시스템을 통해 학습 시간을 확인하고 다른 기수\n' +
                '또는 다른 페어들과 경쟁합니다.\n\n' +
                '경쟁에서 이기면 상위권 페어에게 경품 응모가 가능한\n' +
                '포인트도 드리고 있어요!'
              }
              mobileDescriptions={
                '학습 플래너 시스템을 통해 학습 시간을 확인하고 다른 기수 또는 다른 페어들과 경쟁합니다.\n\n' +
                '경쟁에서 이기면 상위권 페어에게 경품 응모가 가능한 포인트도 드리고 있어요!'
              }
            />
            <EducationFeatureCardContent
              bgGradient='bg-landing-card-background-gradient-blue'
              image={ExampleImage}
              title='나만의 플래너'
              mobileTitle='나만의 플래너'
              descriptions={
                '강의 수강, 질문에 관한 답변 등 사용하는 활동에 따라\n' +
                '나만의 플래너를 채워갈 수 있어요.\n\n' +
                '또한 멘토들의 리뷰와 애정 가득한 격려가 매주 쏟아집니다.\n' +
                '혼자서 가는 것이 아니라 늘 함께 있다는 기분이 들게 해드릴게요!'
              }
              mobileDescriptions={
                '강의 수강, 질문에 관한 답변 등 사용하는 활동에 따라 나만의 플래너를 채워갈 수 있어요.\n\n' +
                '또한 멘토들의 리뷰와 애정 가득한 격려가 매주 쏟아집니다. 혼자서 가는 것이 아니라 늘 함께 있다는 기분이 들게 해드릴게요!'
              }
            />
          </LandingEducationFeatureSection.Info>
        }
      />
      <LandingEducationFeatureSection
        className='pb-[8.75rem] pt-[8.75rem]'
        title={
          <LandingEducationFeatureSection.Title className='mb-[5rem]'>
            실무진의 멘토링과 코드 리뷰까지!
          </LandingEducationFeatureSection.Title>
        }
        info={
          <LandingEducationFeatureSection.Info className='flex flex-col gap-[1.5rem]'>
            <EducationFeatureCardContent
              bgGradient='bg-landing-card-background-gradient-green'
              image={ExampleImage}
              title={'모비만이 가능한\n' + '상세한 과제 리뷰'}
              mobileTitle={'모비만이 가능한 상세한\n' + '과제 리뷰'}
              descriptions={
                '실무진의 상세한 과제 리뷰를 통해 안티 패턴을 해결하고\n' +
                '미처 발견하지 못한 에러들을 발견할 수 있어요!\n\n' +
                '국가지원을 받는 부트캠프를 제외하고는 오직 좋은 뜻으로 모인\n' +
                '실무진들이 포진해 있는 모비만이 가능한 리뷰입니다.'
              }
              mobileDescriptions={
                '실무진의 상세한 과제 리뷰를 통해 안티 패턴을 해결하고 미처 발견하지 못한 에러들을 발견할 수 있어요!\n\n' +
                '국가지원을 받는 부트캠프를 제외하고는 오직 좋은 뜻으로 모인 실무진들이 포진해 있는 모비만이 가능한 리뷰입니다.'
              }
            />
            <EducationFeatureCardContent
              bgGradient='bg-landing-card-background-gradient-lavender'
              image={ExampleImage}
              title='반면 교사 학습'
              mobileTitle='반면 교사 학습'
              descriptions='다른 조의 모범 사례와 비교하며 반면 교사 학습을 진행해요!'
              mobileDescriptions='다른 조의 모범 사례와 비교하며 반면 교사 학습을 진행해요!'
            />
          </LandingEducationFeatureSection.Info>
        }
      />
    </section>
  )
}
