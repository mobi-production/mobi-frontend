'use client'

import { useState } from 'react'

export function useToggle(initialState: boolean = false) {
  const [isToggle, setIsToggle] = useState<boolean>(initialState)
  const toggle = () => setIsToggle((prev) => !prev)
  return { isToggle, toggle }
}
