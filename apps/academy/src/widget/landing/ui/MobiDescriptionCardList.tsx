import { MobiDescription } from '../constants/MobiDescription'
import { MobiDescriptionCard } from './MobiDescriptionCard'

export function MobiDescriptionCardList() {
  return (
    <div className='flex w-full'>
      <div>
        {MobiDescription.map((description) => (
          <MobiDescriptionCard
            key={description.id}
            title={
              <MobiDescriptionCard.ContentMapSection
                renderItems={description.title}
                Component={MobiDescriptionCard.Title}
                className='mb-16'
              />
            }
            subtitle={
              <MobiDescriptionCard.ContentMapSection
                renderItems={description.subtitle}
                Component={MobiDescriptionCard.Subtitle}
                className='mb-8'
              />
            }
            detail={
              <MobiDescriptionCard.ContentMapSection
                renderItems={description.detail}
                Component={MobiDescriptionCard.Detail}
                className='mb-8'
              />
            }
          />
        ))}
      </div>
    </div>
  )
}
