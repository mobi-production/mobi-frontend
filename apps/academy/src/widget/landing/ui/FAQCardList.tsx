import { FAQ_LIST } from '@/widget/landing/constants'

import { FAQCard } from './FAQCard'

export function FAQCardList() {
  return (
    <ul className='flex w-full flex-col gap-5 mobile:gap-4'>
      {FAQ_LIST.map((faq) => (
        <FAQCard
          idx={faq.idx}
          key={faq.idx}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </ul>
  )
}
