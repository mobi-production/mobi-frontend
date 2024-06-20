import ComputerSvg from '/public/svg/apply/computer.svg'
import IdeaSvg from '/public/svg/apply/idea.svg'
import MusicSvg from '/public/svg/apply/music.svg'

type ApplyScheduleItems = {
  icon: string
  alt: string
  iconClass: string
  title: string
  description: string
}

export const BENEFIT_CARD_ITEM: ApplyScheduleItems[] = [
  {
    icon: ComputerSvg,
    iconClass: 'px-3 py-[14px]',
    alt: 'computer',
    title: '열정적으로 몰입하는 분들과 함께하고 있어요.',
    description:
      '개발을 학습한다는 것은 일반적으로 다른 자격증과 자기계발을 하는 학습과는 다릅니다.'
  },
  {
    icon: MusicSvg,
    iconClass: 'p-[14px 14px 10px 16px]',
    alt: 'music',
    title: '동료들과 함께하는\n' + '분위기를 만들고 있어요.',
    description:
      '자신이 학습할 수 있는 시간에는 정말 몰입할 수 있도록 열정적인 동료들과 함께할 수 있도록 분위기를 만들고자 하고 있어요!'
  },
  {
    icon: IdeaSvg,
    iconClass: 'px-4 py-[10px]',
    alt: 'idea',
    title: '효율적인 학습을 위해\n' + '가능한 모든 시간을 투자해주세요.',
    description:
      '바쁜 시간 겨우 짬내서 진행한 학습이 가장 효율적으로 이루어질 수 있도록 가능한 할애 가능한 모든 시간을 투자해주세요! 무엇보다 소중한 여러분들의 시간이니까요 :)'
  }
]
