import { cn } from '@repo/util'

import { ComponentPropsWithoutRef, HTMLProps, PropsWithChildren } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

const imageSlider = cva('div', {
  variants: {
    direction: {
      horizontal: ['flex-row'],
      vertical: ['flex-col']
    },
    spacing: {
      sm: ['gap-6'],
      lg: ['gap-[1.8rem]']
    }
  },
  compoundVariants: [{ direction: 'horizontal' }],
  defaultVariants: {
    direction: 'horizontal'
  }
})

type Props = {
  className?: HTMLProps<HTMLElement>['className']
} & VariantProps<typeof imageSlider> &
  ComponentPropsWithoutRef<'div'>

export function ImageSlider({
  direction,
  spacing,
  className,
  children,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <div
      className={cn('flex', imageSlider({ direction, spacing }), className)}
      {...rest}>
      {children}
    </div>
  )
}
