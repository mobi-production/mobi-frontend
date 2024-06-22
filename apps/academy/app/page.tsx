import { Button } from '@repo/ui'

import { CurriculumScheduleContents, CurriculumScheduleSection } from '@/widget/landing/ui'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Button
        className='border-[2px] border-black'
        size='small'
        intent='primary'>
        academy
      </Button>
      <CurriculumScheduleSection
        title={
          <CurriculumScheduleSection.title className='text-center'>
            모비 프론트 2기 <br />
            커리큘럼 및 일정
          </CurriculumScheduleSection.title>
        }
        info={<CurriculumScheduleContents />}
      />
    </main>
  )
}
