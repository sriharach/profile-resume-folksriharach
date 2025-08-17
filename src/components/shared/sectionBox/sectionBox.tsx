// libs
import React from 'react'
import FadeUpOnScroll from '../fadeUponScroll/fadeUponScroll'
// types
import { SectionBoxProps } from './type'

// style
import styled from './sectionBox.module.scss'

const SectionBox = ({ children }: SectionBoxProps) => {
  return (
    <section className={styled['section-box']}>
      <FadeUpOnScroll className={styled['section-box-grid']}>
        {children}
      </FadeUpOnScroll>
    </section>
  )
}

export default SectionBox
