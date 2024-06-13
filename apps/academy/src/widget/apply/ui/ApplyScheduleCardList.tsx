import Image from 'next/image'

import { ApplyScheduleCard } from '@/widget/apply/ui/ApplyScheduleCard'

import CalenderSvg from '../../../../public/svg/calender.svg'
import ChatSvg from '../../../../public/svg/chat.svg'
import MailSvg from '../../../../public/svg/mail.svg'
import SendSvg from '../../../../public/svg/send.svg'

export function ApplyScheduleCardList() {
  return (
    <div className='flex justify-between xl:w-full xl:max-w-[1244px]'>
      <ApplyScheduleCard
        date={<ApplyScheduleCard.Date>2024.03.25</ApplyScheduleCard.Date>}
        icon={
          <ApplyScheduleCard.Icon>
            <Image
              src={MailSvg}
              alt='mail-icon'
            />
          </ApplyScheduleCard.Icon>
        }
        title={<ApplyScheduleCard.Title>지원 신청</ApplyScheduleCard.Title>}
      />
      <ApplyScheduleCard
        date={<ApplyScheduleCard.Date>2024.03.25</ApplyScheduleCard.Date>}
        icon={
          <ApplyScheduleCard.Icon>
            <Image
              src={CalenderSvg}
              alt='calender-icon'
            />
          </ApplyScheduleCard.Icon>
        }
        title={<ApplyScheduleCard.Title>1차 합격자 선정</ApplyScheduleCard.Title>}
      />
      <ApplyScheduleCard
        date={<ApplyScheduleCard.Date>2024.03.25</ApplyScheduleCard.Date>}
        icon={
          <ApplyScheduleCard.Icon>
            <Image
              src={ChatSvg}
              alt='chat-icon'
            />
          </ApplyScheduleCard.Icon>
        }
        title={<ApplyScheduleCard.Title>면접 및 간단한 담소</ApplyScheduleCard.Title>}
      />
      <ApplyScheduleCard
        date={<ApplyScheduleCard.Date>2024.03.25</ApplyScheduleCard.Date>}
        icon={
          <ApplyScheduleCard.Icon>
            <Image
              src={SendSvg}
              alt='send-icon'
            />
          </ApplyScheduleCard.Icon>
        }
        title={<ApplyScheduleCard.Title>최종 합격자 발표</ApplyScheduleCard.Title>}
      />
    </div>
  )
}
