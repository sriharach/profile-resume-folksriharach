// libs
import React from 'react'
import clsx from 'clsx'
import { TextAreaDaisyUiProps } from './textAreaDaisyUi.type'

const TextAreaDaisyUi = ({ inputError, ...props }: TextAreaDaisyUiProps) => {
  return (
    <textarea
      className={clsx('textarea w-full', {
        'textarea-error': inputError,
      })}
      {...props}
    />
  )
}

export default TextAreaDaisyUi
