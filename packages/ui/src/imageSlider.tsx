import { cn } from '@repo/util'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef, HTMLProps, PropsWithChildren } from 'react'

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
