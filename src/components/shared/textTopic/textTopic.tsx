// libs
import React from 'react'
import clsx from 'clsx'
import { TextTopicProps } from './textTopic.type'

const TextTopic = ({ text, className, lineCenter }: TextTopicProps) =>
  React.createElement(
    'h2',
    {
      className: clsx(
        'text-3xl font-bold relative after:absolute after:w-[80px] after:h-[4px] after:bg-main-color-primavera1',
        {
          'after:left-0 after:-bottom-2': !lineCenter,
          'after:top-11 after:left-[50%] after:-translate-x-[50%] after:-translate-y-[50%]': lineCenter,
        },
        className,
      ),
    },
    text,
  )

export default TextTopic
