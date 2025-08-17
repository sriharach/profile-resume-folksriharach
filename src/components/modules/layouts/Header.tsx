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
        <ul className='flex space-x-12'>
          <li role='button' className={styled['layout__text-hover-underline']}>
            Home
          </li>
          <li role='button' className={styled['layout__text-hover-underline']}>
            Skill
          </li>
          <li role='button' className={styled['layout__text-hover-underline']}>
            Projects
          </li>
        </ul>
        <SwitchLocale />
      </div>
    </header>
  )
}

export default Header
