'use client'

import { useRouter } from 'next/navigation'

export function useMoveToApplyLink() {
  const router = useRouter()
  return () => router.push('https://www.naver.com/')
}
