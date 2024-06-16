import { useEffect, useState } from 'react'

type ImageSliderProps = {
  translateValue: number
  speed: number
}

export const useImageSlider = ({ translateValue, speed }: ImageSliderProps) => {
  const [currentPosition, setCurrentPosition] = useState<number>(0)

  const moveImage = () => {
    setCurrentPosition((prev: number) => prev + translateValue)
  }

  useEffect(() => {
    setCurrentPosition((prev: number) => prev++)
    const slideInterval = setInterval(() => moveImage(), speed)

    return () => clearInterval(slideInterval)
  }, [currentPosition])

  return { currentPosition }
}
