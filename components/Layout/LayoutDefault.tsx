import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import DefaultLoading from '../LoadingDefault'
import MainHeader from './Header'
import MainFooter from './Footer'
import type { NextChildren } from '@/interfaces/next-interface'

const LayoutDefault = ({ children }: NextChildren) => {
  const [scrollHeader, setScrollHeader] = useState(0)
  const [loading, setLoadind] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', function () {
      setScrollHeader(this.scrollY)
    })
  }, [])

  useEffect(() => {
    let isPayLoad = true

    if (isPayLoad) {
      setTimeout(() => {
        setLoadind(false)
      }, 2500)
    }

    return () => {
      isPayLoad = false
    }
  }, [])

  return (
    <section>
      {loading ? (
        <DefaultLoading />
      ) : (
        <>
          <Header boxShadow={scrollHeader}>
            <MainHeader />
          </Header>
          <main>{children}</main>
          <Footer boxShadow={scrollHeader}>
            <MainFooter />
          </Footer>
        </>
      )}
    </section>
  )
}

export default LayoutDefault

const Header = styled.header<{ boxShadow: number }>`
  box-shadow: ${({ boxShadow }) =>
    boxShadow > 60 ? '0 -1px 4px rgba(0,0,0,0.18)' : 'none'};
`

const Footer = styled.footer<{ boxShadow: number }>`
  box-shadow: ${({ boxShadow }) =>
    boxShadow > 60 ? '0 1px 4px rgba(0,0,0,0.18)' : 'none'};
`
