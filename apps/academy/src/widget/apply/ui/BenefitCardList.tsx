import Image from 'next/image'

import { BENEFIT_CARD_ITEM } from '@/widget/apply/constants'
import { BenefitCard } from '@/widget/apply/ui/BenefitCard'

export function BenefitCardList() {
  return (
    <div className='flex w-full justify-between md:flex-col'>
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
