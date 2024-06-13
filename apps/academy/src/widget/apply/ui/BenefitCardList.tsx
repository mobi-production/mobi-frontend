import Image from 'next/image'

import { BenefitCard } from '@/widget/apply/ui/BenefitCard'

import ComputerSvg from '../../../../public/svg/computer.svg'
import IdeaSvg from '../../../../public/svg/idea.svg'
import MusicSvg from '../../../../public/svg/music.svg'

export function BenefitCardList() {
  return (
    <div className='flex w-full justify-between'>
      <BenefitCard
        icon={
          <BenefitCard.Icon className='px-3 py-[14px]'>
            <Image
              src={ComputerSvg}
              alt='computer'
            />
          </BenefitCard.Icon>
        }
        title={
          <BenefitCard.Title>
            열정적으로 몰입하는 분들과
            <br /> 함께하고 있어요.
          </BenefitCard.Title>
        }
        info='개발을 학습한다는 것은 일반적으로 다른 자격증과 자기계발을 하는 학습과는 다릅니다.'
      />
      <BenefitCard
        icon={
          <BenefitCard.Icon className='p-[14px 14px 10px 16px]'>
            <Image
              src={MusicSvg}
              alt='music'
            />
          </BenefitCard.Icon>
        }
        title={
          <BenefitCard.Title>
            동료들과 함께하는
            <br /> 분위기를 만들고 있어요.
          </BenefitCard.Title>
        }
        info='자신이 학습할 수 있는 시간에는 정말 몰입할 수 있도록 열정적인 동료들과 함께할 수 있도록
          분위기를 만들고자 하고 있어요!'
      />
      <BenefitCard
        icon={
          <BenefitCard.Icon className='px-4 py-[10px]'>
            <Image
              src={IdeaSvg}
              alt='idea'
            />
          </BenefitCard.Icon>
        }
        title={
          <BenefitCard.Title>
            효율적인 학습을 위해
            <br /> 가능한 모든 시간을 투자해주세요.
          </BenefitCard.Title>
        }
        info='바쁜 시간 겨우 짬내서 진행한 학습이 가장 효율적으로 이루어질 수 있도록 가능한 할애 가능한
          모든 시간을 투자해주세요! 무엇보다 소중한 여러분들의 시간 이니까요 :)'
      />
    </div>
  )
}
