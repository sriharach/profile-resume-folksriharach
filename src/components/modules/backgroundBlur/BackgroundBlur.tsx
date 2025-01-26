// lib
import React from 'react'
import clsx from 'clsx'

// type
import { BackgroundBlurProps } from './BackgroundBlur.type'

const BackgroundBlur = ({
  children,
  className,
  width,
}: BackgroundBlurProps) => {
  return (
    <div
      data-testid='test-background-blur'
      className={clsx(
        'backdrop-blur-xl bg-transparent rounded-2xl p-8 animate-luminescence',
        { '!w-full': width === '100%' },
        className,
      )}
    >
      {children}
    </div>
  )
}

export default BackgroundBlur
