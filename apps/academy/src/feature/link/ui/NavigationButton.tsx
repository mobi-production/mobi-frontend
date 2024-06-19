'use client'

import { Button } from '@repo/ui'
import { useRouter } from 'next/navigation'
import { ComponentPropsWithoutRef } from 'react'

type NavigationButtonProps = { href: string } & PropsNeedChildren &
  ComponentPropsWithoutRef<typeof Button>

export function NavigationButton({ href, children, className, ...rest }: NavigationButtonProps) {
  const router = useRouter()
  const MoveToHref = () => router.push(href)

  return (
    <Button
      className={className}
      onClick={MoveToHref}
      {...rest}>
      {children}
    </Button>
  )
}
