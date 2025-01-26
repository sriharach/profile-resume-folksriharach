import React from 'react'
import styled from './layout.module.scss'
import Header from './Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main className={styled['layout']}>{children}</main>
    </React.Fragment>
  )
}

export default Layout
