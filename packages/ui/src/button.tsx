import { cn } from '@repo/util'
import { ComponentPropsWithoutRef, HTMLProps, PropsWithChildren } from 'react'
import { VariantProps, cva } from 'class-variance-authority'

const button = cva('button', {
  variants: {
    intent: {
      apply: ['bg-primary', 'text-white', 'rounded-full'],
      primary: ['bg-blue-500', 'border-transparent', 'hover:bg-blue-600'],
      secondary: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100'],
      ghost: ['bg-transparent', 'border', 'border-2', 'border-green', 'text-green']
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
      large: ['px-[4.5rem]', 'py-5', 'text-lg'],
      big: ['text-text-title-3 text-white', 'w-[67px] h-[18px]', 'py-[19px]', 'px-[72px]']
    },
    rounded: { full: 'rounded-full', square: 'rounded-none' }
  },
  compoundVariants: [{ intent: 'primary', size: 'medium', class: 'uppercase', rounded: 'square' }],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
    rounded: 'square'
  }
})

type Props = {
  className?: HTMLProps<HTMLElement>['className']
} & VariantProps<typeof button> &
  ComponentPropsWithoutRef<'button'>

export function Button({
  intent,
  size,
  rounded,
  className,
  children,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <button
      className={cn(button({ intent, size, rounded }), className)}
      {...rest}>
      {children}
    </button>
  )
}
