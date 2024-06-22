import { Button } from '@repo/ui'

import { FAQCardList, FAQSection } from '@/widget/landing/ui'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Button
        className='border-[2px] border-black'
        size='small'
        intent='primary'>
        academy
      </Button>
      <FAQSection
        title={<FAQSection.title>자주 묻는 질문</FAQSection.title>}
        faq={<FAQCardList />}
      />
    </main>
  )
}
