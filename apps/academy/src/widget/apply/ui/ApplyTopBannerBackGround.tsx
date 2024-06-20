import Image from 'next/image'

export function ApplyTopBannerBackGround() {
  return (
    <>
      <Image
        className='object-cover'
        src='/webp/apply/top-banner.webp'
        alt='apply-top-banner'
        objectPosition='center left'
        fill={true}
      />
    </>
  )
}
