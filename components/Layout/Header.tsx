import React from 'react'
import styled from 'styled-components'
import useMedia from 'use-media'
import DesktopNav from './desktopNav'
import MobileMenu from './mobileMenu'
import { theme } from '@/styles/styled-component-theme'

const Header = () => {
  const isWide = useMedia({ minWidth: `${theme.breakpoints.md.value}px` })
  return (
    <React.Fragment>
      <Container className='container'>
        <span className='front-bold'>Portfolio</span>
        {isWide ? <DesktopNav /> : <MobileMenu />}
      </Container>
    </React.Fragment>
  )
}

export default Header

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
