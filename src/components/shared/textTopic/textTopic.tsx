// libs
import React from 'react'
import clsx from 'clsx'
import { TextTopicProps } from './textTopic.type'

const TextTopic = ({ text, className }: TextTopicProps) =>
  React.createElement(
    'h2',
    {
      className: clsx(
        'text-3xl font-bold relative after:absolute after:left-0 after:-bottom-2 after:w-[100px] after:h-[4px] after:bg-main-color-primavera1',
        className,
      ),
    },
    text,
  )

export default TextTopic
