import { getBoundaryProps } from '@repo/util'

import {
  advancedCourses,
  employmentSupportCourses,
  initialCourses,
  projectCourses
} from '@/widget/landing/constants'
import { CurriculumScheduleCard } from '@/widget/landing/ui'

export function CurriculumScheduleContents() {
  return (
    <div className='flex flex-col gap-20'>
      <CurriculumScheduleCard
        contents={
          <CurriculumScheduleCard.ContentList>
            {initialCourses.map((cardData, index) => {
              const boundaryProps = getBoundaryProps(index, initialCourses.length)
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
      <CurriculumScheduleCard
        contents={
          <CurriculumScheduleCard.ContentList>
            {advancedCourses.map((cardData, index) => {
              const boundaryProps = getBoundaryProps(index, advancedCourses.length)
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
              {...projectCourses}
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
              {...employmentSupportCourses}
              boundaryProps={{ isFirst: true, isLast: true, isSingle: true }}
            />
          </CurriculumScheduleCard.ContentList>
        }
      />
    </div>
  )
}
