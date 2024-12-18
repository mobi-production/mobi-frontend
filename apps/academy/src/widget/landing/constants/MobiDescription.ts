export const MOBI_DESCRIPTION = [
  {
    id: 1,
    title: ['모비는', '부트캠프가 아닙니다.'],
    subtitle: ['작은 부담감과 최소한의 비용으로', '질 좋은 교육 컨텐츠를 제공'],
    detail: [
      '모비는 금액적 시간적으로 여유가 없는 부트 캠프가 아니에요.',
      '직장인들이나 아직 학업 중인 대학생들 혹은 국가 지원 대상이 아닌 분들에게',
      '좋은 컨텐츠를 제공합니다.'
    ]
  },
  {
    id: 2,
    title: ['모비는', '부트캠프가 아닙니다.'],
    subtitle: ['배움에 열정적인', '지원자 선별 과정 진행'],
    detail: [
      '단, 그렇다고 배움에 열정적이지 않은 분들을 선별하고 있지 않습니다.',
      '본인에게 주어진 환경에서 정말 최선을 다할 수 있는 분들을 지원자 중에서',
      '선별하여 과정을 진행하고 있습니다.'
    ]
  },
  {
    id: 3,
    title: ['모비는', '인터넷 강의가 아닙니다.'],
    subtitle: ['페어프로그래밍을 통한 동료 학습과 WIL 발표,', '희망자에 한하여 오프라인 만남까지!'],
    detail: [
      '모비는 스스로의 자율성에 모든 학습을 맡기는 인터넷 강의가 아닙니다.',
      '더이상 작심삼일은 그만!',
      '모비는 하나의 커뮤니티로서 서로 자극하며 함께할 수 있어요.'
    ]
  },
  {
    id: 4,
    title: ['모비는', '인터넷 강의가 아닙니다.'],
    subtitle: ['인터넷 강의에는 없는 A부터 Z까지!'],
    detail: [
      '나아가 인터넷 강의에는 없는 팀빌딩과 프로젝트 매니징, 취업을 원하는',
      '이들이 있다면 모의 면접과 이력서 첨삭까지 모든 것을 위한 A부터 Z까지',
      '모두 경험할 수 있습니다.'
    ]
  }
]

export type MobIDescriptionImageType = {
  id: number
  src: string
}

export const MOBI_DESCRIPTION_IMAGES: MobIDescriptionImageType[] = [
  { id: 1, src: '/webp/landing/landing-top-image-1.webp' },
  { id: 2, src: '/webp/landing/landing-top-image-2.webp' },
  { id: 3, src: '/webp/landing/landing-top-image-3.webp' },
  { id: 4, src: '/webp/landing/landing-top-image-4.webp' },
  { id: 5, src: '/webp/landing/landing-top-image-5.webp' },
  { id: 6, src: '/webp/landing/landing-top-image-6.webp' }
]
