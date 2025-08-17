// lib
import React from 'react'
import clsx from 'clsx'

// type
import { ButtonDaisyUiProps } from './ButtonDaisyUi.type'

const ButtonDaisyUi = ({
  text = 'Button',
  color,
  variant = 'primary',
  loading,
  className,
  fullWidth,
}: ButtonDaisyUiProps) => {
  return (
    <button
      className={clsx(
        'btn',
        {
          'btn-primary': variant === 'primary',
          'btn-ghost btn-primary': variant === 'ghost',
          'btn-outline btn-primary': variant === 'outline',
          'btn-block': fullWidth,
        },
        className,
      )}
    >
      {loading ? <span className='loading loading-spinner' /> : text}
    </button>
  )
}

export default ButtonDaisyUi
