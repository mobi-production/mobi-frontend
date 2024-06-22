import { cn } from '@repo/util'

type Props = {
  className?: string
}

export const ApplyBox = ({ children, className }: PropsNeedChildren<Props>) => {
  return (
    <div
      className={cn(
        'w-full py-[8.75rem] mobile:px-5 mobile:py-[4.375rem] mobileAndTablet:px-5 mobileAndTablet:py-[4.375rem]',
        className
      )}>
      {children}
    </div>
  )
}
