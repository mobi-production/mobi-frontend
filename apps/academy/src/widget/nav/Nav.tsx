import { Button } from '@repo/ui'
import { cn } from '@repo/util'
import { ButtonProps } from 'node_modules/@repo/ui/src/button'
import { HTMLProps, ReactNode } from 'react'

type Props = { className?: string }

type NavTabButtonProps = PropsNeedChildren<Props> & ButtonProps

function NavLogo({ children, className, ...rest }: NavTabButtonProps) {
  return (
    <Button
      className={cn(className)}
      {...rest}>
      {children}
    </Button>
  )
}

type NavTabProps = PropsNeedChildren<Props> & HTMLProps<HTMLDivElement>

function NavTab({ children, className }: NavTabProps) {
  return <div className={cn(className)}>{children}</div>
}

function NavTabSection({ children, className }: PropsNeedChildren<Props>) {
  return <div className={cn('flex', className)}>{children}</div>
}

type NavContainerProps = {
  logo: ReactNode
  navTabs: ReactNode
}

function NavContainer({ logo, navTabs }: NavContainerProps) {
  return (
    <div className='fixed top-0 z-[2] flex h-20 w-full items-center bg-transparent py-5 align-middle text-xl backdrop-blur'>
      {logo}
      {navTabs}
    </div>
  )
}

export const Nav = Object.assign(NavContainer, { NavLogo, NavTab, NavTabSection })
