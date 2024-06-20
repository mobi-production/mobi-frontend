import { DESCRIPTION_CARD_ITEM } from '@/widget/apply/constants'
import { DescriptionCard } from '@/widget/apply/ui/DescriptionCard'

export function DescriptionCardList() {
  return (
    <div className='mobileAndTablet:gap4 grid grid-cols-2 gap-[3.75rem] mobile:grid-cols-1 mobile:gap-4 mobileAndTablet:grid-cols-1'>
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
