import { FAQCardList, FAQSection } from '@/widget/landing/ui'

export function FAQ() {
  return (
    <FAQSection
      title={<FAQSection.title>자주 묻는 질문</FAQSection.title>}
      faq={<FAQCardList />}
    />
  )
}
