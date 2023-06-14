import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MainHeader from './Header'
import MainFooter from './Footer'
import type { NextChildren } from '@/interfaces/next-interface'

const Layout = ({ children }: NextChildren) => {
  const [scrollHeader, setScrollHeader] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', function () {
      setScrollHeader(this.scrollY)
    })
  }, [])

  return (
    <>
      <Header boxShadow={scrollHeader}>
        <MainHeader />
      </Header>
      <main>{children}</main>
      <Footer boxShadow={scrollHeader}>
        <MainFooter />
      </Footer>
    </>
  )
}

export default Layout

const Header = styled.header<{ boxShadow: number }>`
  box-shadow: ${({ boxShadow }) =>
    boxShadow > 60 ? '0 -1px 4px rgba(0,0,0,0.18)' : 'none'};
`

const Footer = styled.footer<{ boxShadow: number }>`
  box-shadow: ${({ boxShadow }) =>
    boxShadow > 60 ? '0 1px 4px rgba(0,0,0,0.18)' : 'none'};
`
