'use client'

import { Button } from '@repo/ui'
import { useRouter } from 'next/navigation'
import { ButtonProps } from 'node_modules/@repo/ui/src/button'

type NavigationButtonProps = { href: string } & PropsNeedChildren & ButtonProps

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
