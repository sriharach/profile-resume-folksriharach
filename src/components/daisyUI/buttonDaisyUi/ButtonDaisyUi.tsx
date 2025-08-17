// lib
import React from 'react'
import clsx from 'clsx'

// type
import { ButtonDaisyUiProps } from './ButtonDaisyUi.type'

const ButtonDaisyUi = ({
  text = 'Button',
  color = 'primary',
  type,
  loading,
  className,
  fullWidth
}: ButtonDaisyUiProps) => {
  return (
    <button
      className={clsx(
        'btn',
        {
          'btn-primary': color === 'primary',
          'btn-ghost': type === 'ghost',
          'btn-outline': type === 'outline',
          'btn-block': fullWidth
        },
        className,
      )}
    >
      {loading ? <span className='loading loading-spinner' /> : text}
    </button>
  )
}

export default ButtonDaisyUi
