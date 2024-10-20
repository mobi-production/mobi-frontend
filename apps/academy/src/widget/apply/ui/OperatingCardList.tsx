import { OPERATING_COST_ITEMS } from '@/widget/apply/constants'
import { OperatingCard } from '@/widget/apply/ui/OperatingCard'

export function OperatingCardList() {
  return (
    <div className='mobileAndTablet:gap4 grid grid-cols-2 gap-[3.75rem] mobile:grid-cols-1 mobile:gap-4 mobileAndTablet:grid-cols-1'>
      {OPERATING_COST_ITEMS.map((item, index) => {
        const { icon, alt, title, description } = item
        return (
          <OperatingCard
            key={index}
            image={
              <OperatingCard.Img
                src={icon}
                alt={alt}
              />
            }
            info={
              <>
                <OperatingCard.Title>{title}</OperatingCard.Title>
                <OperatingCard.Description>{description}</OperatingCard.Description>
              </>
            }
          />
        )
      })}
    </div>
  )
}
