import { StackBanner } from '@/feature/rolling/ui'
import {
  ADVANCED_COURSES,
  EMPLOYMENT_SUPPORT_COURSES,
  INITIAL_COURSES,
  PROJECT_COURSES
} from '@/widget/landing/constants'
import { CurriculumScheduleCard } from '@/widget/landing/ui'

export function CurriculumScheduleContents() {
  return (
    <div className='flex w-full flex-col gap-20'>
      <div className='flex flex-col gap-20 mobile:gap-4'>
        <CurriculumScheduleCard
          contents={
            <CurriculumScheduleCard.ContentList group={1}>
              {INITIAL_COURSES.map((course) => (
                <CurriculumScheduleCard.List
                  key={course.idx}
                  index={course.idx}
                  group={1}
                  {...course}
                />
              ))}
            </CurriculumScheduleCard.ContentList>
          }
        />
        <CurriculumScheduleCard
          contents={
            <CurriculumScheduleCard.ContentList group={2}>
              {ADVANCED_COURSES.map((course) => (
                <CurriculumScheduleCard.List
                  key={course.idx}
                  index={course.idx}
                  group={2}
                  {...course}
                />
              ))}
            </CurriculumScheduleCard.ContentList>
          }
        />
      </div>
      <StackBanner />
      <div className='flex flex-col gap-20 mobile:gap-4'>
        <CurriculumScheduleCard
          isBackground={false}
          contents={
            <CurriculumScheduleCard.ContentList group={3}>
              <CurriculumScheduleCard.List
                index={PROJECT_COURSES.idx}
                group={3}
                {...PROJECT_COURSES}
              />
            </CurriculumScheduleCard.ContentList>
          }
        />
        <CurriculumScheduleCard
          isBackground={false}
          contents={
            <CurriculumScheduleCard.ContentList group={4}>
              <CurriculumScheduleCard.List
                index={EMPLOYMENT_SUPPORT_COURSES.idx}
                group={4}
                {...EMPLOYMENT_SUPPORT_COURSES}
              />
            </CurriculumScheduleCard.ContentList>
          }
        />
      </div>
    </div>
  )
}
