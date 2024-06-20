import CalenderSvg from '/public/svg/apply/calender.svg'
import ChatSvg from '/public/svg/apply/chat.svg'
import MailSvg from '/public/svg/apply/mail.svg'
import SendSvg from '/public/svg/apply/send.svg'

type ApplyScheduleItems = {
  icon: string
  alt: string
  title: string
  date: string
}

export const APPLY_SCHEDULE_ITEM: ApplyScheduleItems[] = [
  {
    icon: MailSvg,
    alt: 'mail-icon',
    title: '지원 신청',
    date: '2024.03.25'
  },
  {
    icon: CalenderSvg,
    alt: 'calender-icon',
    title: '1차 합격자 선정',
    date: '2024.03.25'
  },
  {
    icon: ChatSvg,
    alt: 'chat-icon',
    title: '면접 및 간단한 담소',
    date: '2024.03.25'
  },
  {
    icon: SendSvg,
    alt: 'send-icon',
    title: '최종 합격자 발표',
    date: '2024.03.25'
  }
]
