'use client'

// libs
import React from 'react'
import styled from './layout.module.scss'
import clsx from 'clsx'

// hooks
import useLayoutHeader from '@/hooks/useLayoutHeader'

// components
import DesktopMode from './DesktopMode'
import MobileMode from './MobileMode'

const Header = () => {
  useLayoutHeader()

  return (
    <header
      id='layout-header'
      data-testid='test-header'
      className={clsx(styled['layout__header'])}
    >
      <div className='text-xl lg:text-3xl font-bold'>Portfolio</div>
      <DesktopMode />
      <MobileMode />
    </header>
  )
}

export default Header
