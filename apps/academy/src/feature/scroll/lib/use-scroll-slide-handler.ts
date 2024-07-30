import { useEffect } from 'react'

export function useScrollSlideHandler(
  scrollContainerRef: React.RefObject<HTMLDivElement | null>,
  startScrollThreshold: number,
  speedFactor: number
) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      if (scrollContainerRef.current && scrollTop >= startScrollThreshold) {
        const distance = (scrollTop - startScrollThreshold) * speedFactor
        scrollContainerRef.current.scrollLeft = distance
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll)
        } else {
          window.removeEventListener('scroll', handleScroll)
        }
      })
    })

    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current)
    }

    return () => {
      if (scrollContainerRef.current) {
        observer.unobserve(scrollContainerRef.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollContainerRef, startScrollThreshold, speedFactor])
}
