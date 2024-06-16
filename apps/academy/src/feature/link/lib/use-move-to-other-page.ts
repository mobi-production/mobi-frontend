'use client'

import { useRouter } from 'next/navigation'

export function useMoveToOtherPage() {
  const router = useRouter()
  return () => router.push('/')
}
