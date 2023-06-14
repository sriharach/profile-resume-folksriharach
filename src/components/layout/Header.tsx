import React from 'react'
import styled from 'styled-components'
import useMedia from 'use-media'
import { useTranslation } from 'next-i18next'
import { theme } from '@/styles/styled-component-theme'
import LanguageSwitcher from '../LanguageSwitcher'
import DesktopNav from './desktopNav'
import MobileMenu from './mobileMenu'

const Header = () => {
  const { t } = useTranslation('header')
  const isWide = useMedia({ minWidth: `${theme.breakpoints.md.value}px` })
  return (
    <React.Fragment>
      <Container className='container'>
        <span className='front-bold' style={{ cursor: 'default' }}>
          {t('portfolio')}
        </span>
        {isWide ? (
          <ContainerGroup>
            <DesktopNav />
            <LanguageSwitcher />
          </ContainerGroup>
        ) : (
          <MobileMenu />
        )}
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
const ContainerGroup = styled.div`
  display: inline-flex;
  column-gap: 2rem;
`