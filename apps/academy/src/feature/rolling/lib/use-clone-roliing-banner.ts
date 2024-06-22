import { useEffect, useState } from 'react'

export function useCloneRollingBanner() {
  const [cloneCreated, setCloneCreated] = useState(false)

  useEffect(() => {
    setCloneCreated(true)
  }, [])

  return { cloneCreated }
}
