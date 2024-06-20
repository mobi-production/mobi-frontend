import { getBoundaryProps } from '@repo/util'

import {
  ADVANCED_COURSES,
  EMPLOYMENT_SUPPORT_COURSES,
  INITIAL_COURSES,
  PROJECT_COURSES
} from '@/widget/landing/constants'
import { CurriculumScheduleCard, StackBanner } from '@/widget/landing/ui'

export function CurriculumScheduleContents() {
  return (
    <div className='flex flex-col gap-20'>
      <CurriculumScheduleCard
        contents={
          <CurriculumScheduleCard.ContentList>
            {INITIAL_COURSES.map((cardData, index) => {
              const boundaryProps = getBoundaryProps(index, INITIAL_COURSES.length)
              return (
                <CurriculumScheduleCard.List
                  key={index}
                  {...cardData}
                  boundaryProps={boundaryProps}
                />
              )
            })}
          </CurriculumScheduleCard.ContentList>
        }
      />
      {/* 이미지 롤링 영역 */}
      <StackBanner />
      <CurriculumScheduleCard
        contents={
          <CurriculumScheduleCard.ContentList>
            {ADVANCED_COURSES.map((cardData, index) => {
              const boundaryProps = getBoundaryProps(index, ADVANCED_COURSES.length)
              return (
                <CurriculumScheduleCard.List
                  key={index}
                  {...cardData}
                  boundaryProps={boundaryProps}
                />
              )
            })}
          </CurriculumScheduleCard.ContentList>
        }
      />

      {/* 세 번째 카드 - 단일 콘텐츠 */}
      <CurriculumScheduleCard
        isBackground={false}
        contents={
          <CurriculumScheduleCard.ContentList>
            <CurriculumScheduleCard.List
              {...PROJECT_COURSES}
              boundaryProps={{ isFirst: true, isLast: true, isSingle: true }}
            />
          </CurriculumScheduleCard.ContentList>
        }
      />

      {/* 네 번째 카드 - 단일 콘텐츠 */}
      <CurriculumScheduleCard
        isBackground={false}
        contents={
          <CurriculumScheduleCard.ContentList>
            <CurriculumScheduleCard.List
              {...EMPLOYMENT_SUPPORT_COURSES}
              boundaryProps={{ isFirst: true, isLast: true, isSingle: true }}
            />
          </CurriculumScheduleCard.ContentList>
        }
      />
    </div>
  )
}
