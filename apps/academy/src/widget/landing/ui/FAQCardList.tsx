import { FAQ_DATA } from '@/widget/landing/constants'

import { FAQCard } from './FAQCard'

export function FAQCardList() {
  return (
    <ul className='flex w-full flex-col gap-5'>
      {FAQ_DATA.map((faq) => (
        <FAQCard
          key={faq.idx}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </ul>
  )
}
