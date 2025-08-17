// libs
import React from 'react'
import styled from './layout.module.scss'

const Footer = () => {
  return (
    <footer className={styled['layout__footer']}>
      <p>&copy; {new Date().getFullYear()} copyright all right reserved</p>
    </footer>
  )
}

export default Footer
