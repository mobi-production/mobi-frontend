import { ReactNode } from 'react'

declare global {
  type PropsNeedChildren<P = unknown> = P & { children: ReactNode }

  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APPLY_LINK: string
    }
  }
}
