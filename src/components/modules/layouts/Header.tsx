'use client'

import React, { useEffect } from 'react'
import styled from './layout.module.scss'
import SwitchLocale from '../switchLocale/SwitchLocale'

const Header = () => {
  useEffect(() => {
    const navbar = document.getElementById('layout-header')

    function EvenScroll() {
      if (!navbar) return
      const scrolled = window.scrollY > 400

      if (scrolled) {
        navbar.classList.add(styled['layout__header-push-content'])
      } else {
        navbar.classList.remove(styled['layout__header-push-content'])
      }
    }

    window.addEventListener('scroll', EvenScroll)

    return () => {
      window.removeEventListener('scroll', EvenScroll)
    }
  }, [])

  return (
    <header
      id='layout-header'
      data-testid='test-header'
      className={styled['layout__header']}
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
