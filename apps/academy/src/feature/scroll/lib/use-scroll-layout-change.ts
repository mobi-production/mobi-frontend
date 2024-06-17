import { RefObject, useEffect, useState } from 'react'

export const useScrollLayoutChange = (ref: RefObject<HTMLDivElement>, length: number) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    let wheeling: number | undefined
    let observed: boolean

    const handleScroll = (e: WheelEvent) => {
      e.preventDefault()
      clearTimeout(wheeling)
      if (!observed) return
      wheeling = window.setTimeout(() => {
        if (e.deltaY > 0 && currentIndex < length - 1) {
          setCurrentIndex(currentIndex + 1)
        } else if (e.deltaY < 0 && currentIndex > 0) {
          setCurrentIndex(currentIndex - 1)
        }

        wheeling = undefined
      }, 300)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            observed = true
          } else {
            observed = false
          }
        })
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    window.addEventListener('wheel', handleScroll)

    return () => {
      window.removeEventListener('wheel', handleScroll)
      observer.disconnect()
    }
  }, [ref, currentIndex])

  return currentIndex
}
