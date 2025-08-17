// libs
import React from 'react'
import clsx from 'clsx'
import { InputDaisyUiProps } from './InputDaisyUi.type'

const InputDaisyUi = ({
  inputSize,
  className,
  variant,
  ...props
}: InputDaisyUiProps) => {
  return (
    <input
      className={clsx(
        'input',
        {
          'input-xs': inputSize === 'xs',
          'input-sm': inputSize === 'sm',
          'input-lg': inputSize === 'lg',
          'input-xl': inputSize === 'xl',
        },
        {
          'input-ghost': variant === 'ghost',
          'input-secondary': variant === 'secondary',
          'input-primary': variant === 'primary',
          'input-accent': variant === 'accent',
          'input-info': variant === 'info',
        },
        className,
      )}
      {...props}
    />
  )
}

export default InputDaisyUi
