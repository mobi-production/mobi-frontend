import { FAQ_DATA } from '@/widget/landing/consts'

import { FAQCard } from './FAQCard'

export function FAQCardList() {
  return (
    <div>
      {FAQ_DATA.map((faq) => (
        <FAQCard
          key={faq.idx}
          question={<FAQCard.Question>{faq.question}</FAQCard.Question>}
          answer={<FAQCard.Answer>{faq.answer}</FAQCard.Answer>}
        />
      ))}
    </div>
  )
}
