import { DESCRIPTION_CARD_ITEM } from '@/widget/apply/constants/description-card-items'
import { DescriptionCard } from '@/widget/apply/ui/DescriptionCard'

export function DescriptionCardList() {
  return (
    <div className='flex w-full justify-between'>
      {DESCRIPTION_CARD_ITEM.map((item, index) => {
        const { icon, alt, title, description } = item
        return (
          <DescriptionCard
            key={index}
            image={
              <DescriptionCard.Img
                src={icon}
                alt={alt}
              />
            }
            info={
              <>
                <DescriptionCard.Title>{title}</DescriptionCard.Title>
                <DescriptionCard.Description>{description}</DescriptionCard.Description>
              </>
            }
          />
        )
      })}
    </div>
  )
}
