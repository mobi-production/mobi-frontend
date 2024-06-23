import Image from 'next/image'

export function ApplyTopBannerBackGround() {
  return (
    <>
      <Image
        className='mobile-hidden object-cover'
        src='/webp/apply/top-banner-desktop.webp'
        alt='apply-top-banner'
        fill={true}
      />
      <Image
        className='desktop-hidden object-cover'
        src='/webp/apply/top-banner-mobile.webp'
        alt='apply-top-banner'
        fill={true}
      />
    </>
  )
}
