import Image from 'next/image'

export function ApplyTopBanner() {
  return (
    <section className='relative h-screen w-full'>
      <div className='absolute z-10 h-full w-full bg-apply-background-gradient' />
      <Image
        className='object-cover'
        src='/webp/apply/top-banner.webp'
        alt='apply-top-banner'
        fill={true}
      />
      <div className='relative z-20 flex flex-col items-center gap-8 xl:pt-[360px]'>
        <h1 className='md:text-text-heading-2 xl:text-text-heading-1'>모비 지원하기</h1>
        <span className='text-text-title-2'>
          모비에서는 이러한 분들과 함께 발전하기를 바라고 있어요.
        </span>
      </div>
    </section>
  )
}
