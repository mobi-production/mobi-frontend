import { FAQ_DATA } from '@/widget/landing/consts'

import { FAQCard } from './FAQCard'

export function FAQCardList() {
  return (
    <div className='flex w-full flex-col gap-5'>
      {FAQ_DATA.map((faq) => (
        <FAQCard
          key={faq.idx}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  )
}
