import { useEffect, useRef, useState } from 'react'

type ExtendedCSSProperties = React.CSSProperties & {
  '--position': string
  '--shape': string
}

type UseScrollGradientAnimationReturn = {
  sectionRef: React.RefObject<HTMLDivElement>
  isSticky: boolean
  gradientStyle: ExtendedCSSProperties
  stickyPosition: {
    '--position': string
  }
}

export function useTextScrollAnimation(): UseScrollGradientAnimationReturn {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isSticky, setIsSticky] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY
      setScrollPosition(currentPosition)

      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop
        const sectionHeight = sectionRef.current.offsetHeight
        const progress = (currentPosition - sectionTop) / sectionHeight

        if (progress >= 1) {
          setIsSticky(false)
        } else {
          setIsSticky(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const gradientPosition = `${(scrollPosition / 15) % 100}% 50%`

  return {
    sectionRef,
    isSticky,
    gradientStyle: {
      '--position': gradientPosition,
      '--shape': '25% 200%',
      transition: 'transform 0.1s ease'
    },
    stickyPosition: {
      '--position': gradientPosition
    }
  }
}
