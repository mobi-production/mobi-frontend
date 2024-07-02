import type { ContentCardProps } from '@/widget/landing/ui/CurriculumScheduleCard'

export const INITIAL_COURSES: ContentCardProps[] = [
  {
    idx: 0,
    subject: 'pre-course',
    title: '프리코스',
    description:
      '누구나 지원 가능, 금액적 부담 없이 무료로 해당 과정의 프리 코스를 경험할 수 있어요.',
    stack: 'HTML, CSS, GIT, 개발 용어',
    startDate: new Date(2024, 3, 25),
    endDate: new Date(2024, 5, 30)
  },
  {
    idx: 1,
    subject: 'javascript',
    title: '자바스크립트',
    description:
      '자바스크립트의 자료구조와 실행 컨텍스트까지 딥다이브하여 자바스크립트를 샅샅이 파해쳐보는 시간이에요.',
    stack: 'JavaScript, 협업도구, 문서화',
    startDate: new Date(2024, 6, 1),
    endDate: new Date(2024, 12, 15)
  },
  {
    idx: 2,
    subject: 'react-js',
    title: '리액트',
    description: '리엑트의 동작 원리부터 관심사 분리와 디자인 시스템 적용까지!',
    stack: 'react, react-query, redux, recoil, RHF, jotai, zustand, storybook',
    startDate: new Date(2025, 1, 10),
    endDate: new Date(2025, 6, 30)
  }
]
export const ADVANCED_COURSES: ContentCardProps[] = [
  {
    idx: 0,
    subject: 'typescript',
    title: '타입스크립트',
    description:
      '정적 타입 언어와 동적 언어의 타입의 차이와 타입이 주는 안정성과 생산성 향상을 모두 한번에!',
    startDate: new Date(2024, 3, 25),
    endDate: new Date(2024, 5, 30)
  },
  {
    idx: 1,
    subject: 'next-js',
    title: '넥스트',
    description:
      'SSR과 CSR의 차이를 명확히 확인하고 Dynamic metadata와 og:lmage 설정까지 next JS가 주는 장점을 다양하게 경험해볼 수 있어요.',
    startDate: new Date(2024, 3, 25),
    endDate: new Date(2024, 5, 30)
  },
  {
    idx: 2,
    subject: 'test-code / monorepo',
    title: '심화',
    description:
      '프론트 엔드 테스트 코드의 정의와 필요성, e2e 테스트 및 테스트 자동화부터 모노레포를 활용하여 여러 패키지를 하나의 레포지토리에 관리할 수 있어요!',
    startDate: new Date(2024, 3, 25),
    endDate: new Date(2024, 5, 30)
  }
]

export const PROJECT_COURSES: ContentCardProps = {
  idx: 0,
  subject: '프로젝트',
  title: '팀빌딩, 일정관리, 멘토링',
  startDate: new Date(2025, 2, 1),
  endDate: new Date(2025, 8, 1)
}

export const EMPLOYMENT_SUPPORT_COURSES: ContentCardProps = {
  idx: 0,
  subject: '전 과정 수료자',
  title: '이력서 작성 및 첨삭, 모의 면접과 면접 스터디',
  startDate: new Date(2025, 3, 1),
  endDate: new Date(2025, 9, 1)
}
