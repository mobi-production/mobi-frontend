import { ReactNode } from 'react'

import { EducationFeatureCard } from './EducationFeatureCard'

type Props = {
  bgGradient: string
  image: ReactNode
  title: ReactNode
  descriptions: ReactNode[]
}

export function EducationFeatureCardContent({ bgGradient, image, title, descriptions }: Props) {
  return (
    <EducationFeatureCard
      image={
        <EducationFeatureCard.Image
          className={`${bgGradient} relative flex h-[23.125rem] w-[38.875rem] items-center justify-center rounded-bl-[1rem] rounded-tl-[1rem] p-4`}>
          {image}
        </EducationFeatureCard.Image>
      }
      title={<EducationFeatureCard.Title>{title}</EducationFeatureCard.Title>}
      info={
        <EducationFeatureCard.DescriptionList>
          {descriptions.map((desc, index) => (
            <EducationFeatureCard.Description
              className='mb-[1.5rem]'
              key={index}>
              {desc}
            </EducationFeatureCard.Description>
          ))}
        </EducationFeatureCard.DescriptionList>
      }
    />
  )
}
