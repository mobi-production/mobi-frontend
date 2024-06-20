import { APPLY_CARD_ITEM } from '@/widget/apply/constants'
import { ApplyCard } from '@/widget/apply/ui/ApplyCard'

export function ApplyCardList() {
  return (
    <div className='flex w-full justify-center gap-[3.75rem]'>
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
