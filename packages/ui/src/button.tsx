import { cn } from '@repo/util'
import { HTMLProps, PropsWithChildren } from 'react'
import { VariantProps, cva } from 'class-variance-authority'

const button = cva('button', {
  variants: {
    intent: {
      primary: ['bg-blue-500', 'text-white', 'border-transparent', 'hover:bg-blue-600'],
      secondary: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100']
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4']
    }
  },
  compoundVariants: [{ intent: 'primary', size: 'medium', class: 'uppercase' }],
  defaultVariants: {
    intent: 'primary',
    size: 'medium'
  }
})

type Props = {
  className?: HTMLProps<HTMLElement>['className']
} & VariantProps<typeof button>

export function Button({ intent, size, className, children, ...rest }: PropsWithChildren<Props>) {
  return (
    <button
      className={cn(button({ intent, size }), className)}
      {...rest}>
      {children}
    </button>
  )
}
