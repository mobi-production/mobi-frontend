import Image from 'next/image'

import { DESCRIPTION_ITEMS } from '@/widget/apply/constants'

import { DescriptionCard } from './DescriptionCard'

export function DescriptionCardList() {
  return (
    <div className='grid w-full max-w-[1244px] grid-cols-3 justify-between justify-items-center gap-4 mobile:grid-cols-1 mobile:flex-col mobileAndTablet:grid-cols-1 mobileAndTablet:flex-col tablet:grid-cols-2 tabletAndLaptop:grid-cols-2'>
      {DESCRIPTION_ITEMS.map((item, index) => {
        const { icon, iconClass, title, description, alt } = item
        return (
          <DescriptionCard
            key={index}
            icon={
              <DescriptionCard.Icon className={iconClass}>
                <Image
                  src={icon}
                  alt={alt}
                />
              </DescriptionCard.Icon>
            }
            title={<DescriptionCard.Title>{title}</DescriptionCard.Title>}
            info={description}
          />
        )
      })}
    </div>
  )
}
