import { cn } from '@repo/util'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef, HTMLProps, PropsWithChildren } from 'react'

const ButtonVariants = cva(' px-[4.5rem] py-[1.188rem] text-center', {
  variants: {
    intent: {
      default: ['bg-primary', 'text-text-title-3', 'text-white'],
      outline: ['bg-transparent', 'border', 'border-2', 'border-green', 'text-green'],
      empty: ['bg-transparent', 'p-0']
    },
    size: {
      small: '',
      medium: '',
      large: '',
      full: 'w-full'
    },
    rounded: {
      square: 'rounded-none',
      full: 'rounded-full'
    }
  },
  defaultVariants: {
    intent: 'default',
    size: 'medium',
    rounded: 'square'
  }
})

type ButtonProps = {
  className?: HTMLProps<HTMLElement>['className']
} & VariantProps<typeof ButtonVariants> &
  ComponentPropsWithoutRef<'button'>

export function Button({
  intent,
  size,
  rounded,
  className,
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={cn(ButtonVariants({ intent, size, rounded }), className)}
      {...rest}>
      {children}
    </button>
  )
}
