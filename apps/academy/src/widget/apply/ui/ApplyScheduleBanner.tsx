import { ApplyButton } from '@/feature/link/ui'
import { APPLY_TITLE } from '@/widget/apply/constants'
import { ApplyBox } from '@/widget/apply/ui/ApplyBox'
import { ApplyScheduleCardList } from '@/widget/apply/ui/ApplyScheduleCardList'

export function ApplyScheduleBanner() {
  return (
    <ApplyBox className='flex w-full flex-col gap-20 bg-gray-5 text-center'>
      <h2 className='text-text-heading-2'>{APPLY_TITLE.schedule_banner.title}</h2>
      <div className='flex flex-col items-center gap-16'>
        <ApplyScheduleCardList />
        <ApplyButton />
      </div>
    </ApplyBox>
  )
}
