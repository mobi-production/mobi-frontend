import { ApplyCardList } from '@/widget/apply/ui/ApplyCardList'

export function ApplyPriceBanner() {
  return (
    <section className='relative max-h-fit w-full'>
      <div className='absolute z-10 h-full w-full bg-gray-2'>{/*  배경색*/}</div>
      <div className='relative z-20 flex flex-col items-center gap-8 py-[140px]'>
        <h1 className='text-text-heading-2 text-white'>배우고싶다면?</h1>
        <div className='xl:w-full xl:max-w-[1244px]'>
          <ApplyCardList />
        </div>
      </div>
    </section>
  )
}
