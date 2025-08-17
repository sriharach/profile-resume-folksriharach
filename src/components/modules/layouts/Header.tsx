'use client'

// libs
import React from 'react'
import styled from './layout.module.scss'
import SwitchLocale from '../switchLocale/SwitchLocale'
import clsx from 'clsx'

// hooks
import useLayoutHeader from '@/hooks/useLayoutHeader'

const Header = () => {
  useLayoutHeader()

  return (
    <header
      id='layout-header'
      data-testid='test-header'
      className={clsx(styled['layout__header'])}
    >
      <div className='text-3xl font-bold'>Logo</div>
      <div className='flex justify-between items-center space-x-12'>
        <ul className='flex space-x-8 items-center'>
          <li role='button' className={styled['layout__text-hover-underline']}>
            <a href='#home'>Home</a>
          </li>
          <li role='button' className={styled['layout__text-hover-underline']}>
            <a href='#about'>About</a>
          </li>
          <li role='button' className={styled['layout__text-hover-underline']}>
            <a href='#experiences'>Experience</a>
          </li>
          <li role='button' className={styled['layout__text-hover-underline']}>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li role='button' className={styled['layout__text-hover-underline']}>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <SwitchLocale />
      </div>
    </header>
  )
}

export default Header
