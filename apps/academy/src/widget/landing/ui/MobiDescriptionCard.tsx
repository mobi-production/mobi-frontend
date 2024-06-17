import { cn } from '@repo/util'
import { ElementType, ReactNode } from 'react'

type Props = { className?: string }

function Title({ className, children }: PropsNeedChildren<Props>) {
  return <div className={cn('mb-2 text-text-heading-2', className)}>{children}</div>
}

function Subtitle({ className, children }: PropsNeedChildren<Props>) {
  return (
    <div className={cn('text-text-title-1', className)}>
      <div className='text-primary'>{children}</div>
    </div>
  )
}

function Detail({ className, children }: PropsNeedChildren<Props>) {
  return <div className={cn('text-text-body-1 font-normal', className)}>{children}</div>
}

type ContentMapSectionProps<T> = { renderItems: T[]; Component: ElementType } & Props

function ContentMapSection<T>({ renderItems, Component, className }: ContentMapSectionProps<T>) {
  return (
    <div className={cn(className)}>
      {renderItems.map((item) => (
        <Component key={item}>{item}</Component>
      ))}
    </div>
  )
}

type MobiDescriptionContent = {
  title: ReactNode
  subtitle: ReactNode
  detail: ReactNode
}

type MobiDescriptionCardContainerProps = Partial<MobiDescriptionContent> & Props

function MobiDescriptionCardContainer({
  title,
  subtitle,
  detail,
  className
}: MobiDescriptionCardContainerProps) {
  return (
    <section
      className={cn('animate-fadein flex h-screen w-full flex-col', className)}
      style={{ animation: 'fadein 2s' }}>
      {title}
      {subtitle}
      {detail}
    </section>
  )
}

export const MobiDescriptionCard = Object.assign(MobiDescriptionCardContainer, {
  Title,
  Subtitle,
  Detail,
  ContentMapSection
})
