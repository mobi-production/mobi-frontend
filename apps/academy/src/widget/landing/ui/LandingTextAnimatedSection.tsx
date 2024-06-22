/** Todo: 애니메이션 효과 추가 예정 */
export function LandingTextAnimatedSection() {
  return (
    <div className='relative flex h-screen flex-col items-center justify-center'>
      <h2 className='mobile-hidden text-center text-text-heading-1'>
        모비에서는 이런 것을 경험 할 수 있어요
      </h2>
      <h2 className='desktop-hidden text-heading-1 text-center text-text-heading-3'>
        모비에서는 이런 것을
        <br /> 경험 할 수 있어요
      </h2>
    </div>
  )
}
