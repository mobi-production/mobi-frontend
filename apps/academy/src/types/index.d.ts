import { ReactNode } from 'react'

declare global {
  type PropsNeedChildren<P = unknown> = P & { children: ReactNode }

  namespace NodeJS {
    interface ProcessEnv {
      ACADEMY_APPLY_FORM_URL: string
    }
  }
}
