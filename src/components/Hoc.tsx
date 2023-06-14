import React, { useEffect, useState } from 'react'
import { NextChildren } from '@/interfaces/next-interface'
import DefaultLoading from './LoadingDefault'

const Hoc = ({ children }: NextChildren) => {
  const [loading, setLoadind] = useState(true)

  useEffect(() => {
    const timeout: NodeJS.Timeout = setTimeout(() => {
      setLoadind(false)
    }, 2500)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  if (loading) return <DefaultLoading />

  return <>{children}</>
}

export default Hoc
