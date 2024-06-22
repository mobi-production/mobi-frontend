import { APPLY_CARD_ITEM } from '@/widget/apply/constants'
import { ApplyCard } from '@/widget/apply/ui/ApplyCard'

export function ApplyCardList() {
  return (
    <div className='grid w-full max-w-[1244px] grid-cols-2 justify-center gap-[3.75rem] mobile:grid-cols-1 mobileAndTablet:grid-cols-1'>
      {APPLY_CARD_ITEM.map((apply_card, card_index) => {
        const { title, price, intro } = apply_card
        return (
          <ApplyCard
            key={card_index}
            title={<ApplyCard.Title>{title}</ApplyCard.Title>}
            price={<ApplyCard.Price price={price} />}
            info={
              <ApplyCard.DescriptionList>
                {intro.map((item, intro_index) => (
                  <ApplyCard.List
                    key={intro_index}
                    className={item.className}>
                    {item.content}
                  </ApplyCard.List>
                ))}
              </ApplyCard.DescriptionList>
            }
          />
        )
      })}
    </div>
  )
}
