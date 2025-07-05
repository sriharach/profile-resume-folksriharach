import React from 'react'
import styled from './layout.module.scss'
import Header from './Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Header />
      <main className={styled['layout']}>{children}</main>
    </React.Fragment>
  )
}

export default Layout
