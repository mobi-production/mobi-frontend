import { DescriptionCard } from '@/widget/apply/ui/DescriptionCard'

export function DescriptionCardList() {
  return (
    <div className='flex w-full justify-between'>
      <DescriptionCard
        image={
          <DescriptionCard.Img
            src='/webp/apply-description-1.webp'
            alt='description-1'
          />
        }
        info={
          <>
            <DescriptionCard.Title>
              소규모 인원관리와 <br /> 방향성을 알려주는 단체
            </DescriptionCard.Title>
            <DescriptionCard.Description>
              다른 인터넷 강의 사이트와는 다르게 운영진의 가용 역량에 따라
              <br /> 인원 수를 제한하고 정말 열정있는 소규모의 인원을 선별하여 좋은 방향성을
              <br />
              가지고 학습할 수 있도록 조언을 해드리고 있어요.
            </DescriptionCard.Description>
          </>
        }
      />
      <DescriptionCard
        image={
          <DescriptionCard.Img
            src='/webp/apply-description-2.webp'
            alt='description-2'
          />
        }
        info={
          <>
            <DescriptionCard.Title>
              운영비를 제외한 이윤을 <br />
              소외 계층을 위해 기부
            </DescriptionCard.Title>
            <DescriptionCard.Description>
              모비가 존재할 수 있는 이유는 선한 영향력을 넓히고 싶은 많은 분들이 모였기 <br />
              때문이에요. 운영비를 제외한 이윤을 소외계층에 기부하고 분기마다 봉사활동에 <br />
              직접 참여하고 있어요.
            </DescriptionCard.Description>
          </>
        }
      />
    </div>
  )
}
