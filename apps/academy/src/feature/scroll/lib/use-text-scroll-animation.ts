import { useEffect, useRef, useState } from 'react'

type UseTextScrollAnimationReturn = {
  sectionRef: React.RefObject<HTMLDivElement>
  isFixed: boolean
  getTranslateX: () => number
}
export function useTextScrollAnimation(): UseTextScrollAnimationReturn {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isFixed, setIsFixed] = useState(false)
  const [isScrollable, setIsScrollable] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY
      setScrollPosition(currentPosition)

      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop
        const sectionHeight = sectionRef.current.offsetHeight
        if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
          setIsFixed(true)
        } else {
          setIsFixed(false)
        }

        if (getTranslateX() < window.innerWidth) {
          setIsScrollable(false)
        } else {
          setIsScrollable(true)
        }

        if (!isScrollable) {
          window.scrollTo(0, currentPosition)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: false })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsScrollable(false)
          } else {
            setIsScrollable(true)
          }
        })
      },
      {
        threshold: 0.1
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isScrollable])

  const getTranslateX = () => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight
      const progress = (scrollPosition - sectionTop) / sectionHeight
      return Math.min(Math.max(progress * window.innerWidth, 0), window.innerWidth)
    }
    return 0
  }

  return {
    sectionRef,
    isFixed,
    getTranslateX
  }
}
