import { ApplyCard } from '@/widget/apply/ui/ApplyCard'

export function ApplyCardList() {
  return (
    <div className='flex w-full justify-between'>
      <ApplyCard
        title={<ApplyCard.Title>정기 과정</ApplyCard.Title>}
        price={<ApplyCard.Price price={29800} />}
        info={
          <ApplyCard.DescriptionList>
            <ApplyCard.List className='font-medium'>
              멘토링 리뷰 포함, 인원 제한이 없어요
            </ApplyCard.List>
            <ApplyCard.List>
              정기 과정은 각 과정을 <span className='font-semibold text-red'>수료하면</span> 다음
              과정에 무조건 합류할 수 있어요.
            </ApplyCard.List>
            <ApplyCard.List>
              이전 과정을 모두 수료하지 못하면 다음 과정을 지원할 수 없어요.
            </ApplyCard.List>
          </ApplyCard.DescriptionList>
        }
      />
      <ApplyCard
        title={<ApplyCard.Title>일반 과정</ApplyCard.Title>}
        price={<ApplyCard.Price price={19800} />}
        info={
          <ApplyCard.DescriptionList>
            <ApplyCard.List className='font-medium text-red'>
              일반 과정 신청자는 페어 활동이나 멘토링을 받을 수 없어요.
            </ApplyCard.List>
            <ApplyCard.List>
              시간과 인원 제한 없이 모비의 교육 컨텐츠만 열람이 가능해요.
            </ApplyCard.List>
            <ApplyCard.List>일반 과정 수료자는 다음 과정에 우선순위로 선발해요.</ApplyCard.List>
          </ApplyCard.DescriptionList>
        }
      />
    </div>
  )
}
