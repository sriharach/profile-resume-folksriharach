import React, { useEffect, useState } from 'react'
import MainHeader from './Header'
import MainFooter from './Footer'
import type { NextChildren } from '@/interfaces/next-interface'

const LayoutDefault = ({ children }: NextChildren) => {
  const [scrollHeader, setScrollHeader] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', function () {
      setScrollHeader(this.scrollY)
    })
  }, [])

  return (
    <section>
      <header
        style={{
          boxShadow: scrollHeader > 40 ? '0 -1px 4px rgba(0,0,0,0.18)' : 'none',
        }}
      >
        <MainHeader />
      </header>
      <main>{children}</main>
      <footer
        style={{
          boxShadow: scrollHeader > 40 ? '0 1px 4px rgba(0,0,0,0.18)' : 'none',
        }}
      >
        <MainFooter />
      </footer>
    </section>
  )
}

export default LayoutDefault
