import { ApplyButton } from '@/feature/link/ui'
import { ApplyScheduleCardList } from '@/widget/apply/ui/ApplyScheduleCardList'

export function ApplyScheduleBanner() {
  return (
    <div className='flex w-full flex-col gap-20 bg-gray-5 py-[140px] text-center'>
      <h2 className='text-text-heading-2'>모비 2기 1과정 지원 일정</h2>
      <div className='flex w-full flex-col items-center gap-16'>
        <ApplyScheduleCardList />
        <ApplyButton />
      </div>
    </div>
  )
}
