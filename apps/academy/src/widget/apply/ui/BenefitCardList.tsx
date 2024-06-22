import Image from 'next/image'

import { BENEFIT_CARD_ITEM } from '@/widget/apply/constants'
import { BenefitCard } from '@/widget/apply/ui/BenefitCard'

export function BenefitCardList() {
  return (
    <div className='grid w-full max-w-[1244px] grid-cols-3 justify-between justify-items-center gap-4 mobile:grid-cols-1 mobile:flex-col mobileAndTablet:grid-cols-1 mobileAndTablet:flex-col tablet:grid-cols-2 tabletAndLaptop:grid-cols-2'>
      {BENEFIT_CARD_ITEM.map((item, index) => {
        const { icon, iconClass, title, description, alt } = item
        return (
          <BenefitCard
            key={index}
            icon={
              <BenefitCard.Icon className={iconClass}>
                <Image
                  src={icon}
                  alt={alt}
                />
              </BenefitCard.Icon>
            }
            title={<BenefitCard.Title>{title}</BenefitCard.Title>}
            info={description}
          />
        )
      })}
    </div>
  )
}
