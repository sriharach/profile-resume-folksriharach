// libs
import React from 'react'
import FadeUpOnScroll from '../fadeUponScroll/fadeUponScroll'
import clsx from 'clsx'

// types
import { SectionBoxProps } from './type'

// style
import styled from './sectionBox.module.scss'

const SectionBox = ({ children, className }: SectionBoxProps) => {
  return (
    <section className={clsx(styled['section-box'], className)}>
      <FadeUpOnScroll className={styled['section-box-grid']}>
        {children}
      </FadeUpOnScroll>
    </section>
  )
}

export default SectionBox
