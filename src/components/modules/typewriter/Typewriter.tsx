// lib
import React from 'react'
import clsx from 'clsx'
// type
import { TypewriterProps } from './Typewriter.type'
import useTypewriter from './useTypewriter'

const Typewriter = ({ text, delay, className }: TypewriterProps) => {
  const { currentText } = useTypewriter(text, delay)
  return <span className={clsx(className)}>{currentText}</span>
}

export default Typewriter
