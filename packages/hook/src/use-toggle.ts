'use client'

import { useState } from 'react'

export function useToggle(initialState: boolean = false) {
  const [isToggle, setIsToggle] = useState<boolean>(initialState)
  const openToggle = () => setIsToggle(true)
  const closeToggle = () => setIsToggle(false)

  return { isToggle, openToggle, closeToggle }
}
