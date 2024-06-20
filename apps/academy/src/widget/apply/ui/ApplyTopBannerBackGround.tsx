import Image from 'next/image'

export function ApplyTopBannerBackGround() {
  return (
    <>
      <Image
        className='object-cover mobile:hidden mobileAndTablet:hidden'
        src='/webp/apply/top-banner-desktop.webp'
        alt='apply-top-banner'
        fill={true}
      />
      <Image
        className='object-cover tablet:hidden tabletAndLaptop:hidden desktop:hidden'
        src='/webp/apply/top-banner-mobile.webp'
        alt='apply-top-banner'
        fill={true}
      />
    </>
  )
}
