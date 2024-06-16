import { ReactNode } from 'react'

import { EducationFeatureCard } from './EducationFeatureCard'

type Props = {
  imageBg: string
  image: ReactNode
  title: ReactNode
  descriptions: ReactNode[]
}

export function EducationFeatureCardContent({ imageBg, image, title, descriptions }: Props) {
  return (
    <EducationFeatureCard
      image={<EducationFeatureCard.Image bgImage={imageBg}>{image}</EducationFeatureCard.Image>}
      title={<EducationFeatureCard.Title>{title}</EducationFeatureCard.Title>}
      info={
        <EducationFeatureCard.DescriptionList>
          {descriptions.map((desc, index) => (
            <EducationFeatureCard.Description
              className='mb-[24px]'
              key={index}>
              {desc}
            </EducationFeatureCard.Description>
          ))}
        </EducationFeatureCard.DescriptionList>
      }
    />
  )
}
