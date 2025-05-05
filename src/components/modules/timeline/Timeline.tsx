// lib
import React from 'react'
import styled from './Timeline.module.scss'
import clsx from 'clsx'

const mockData = [
  {
    date: '20-08-2019',
    title: 'ttb spark',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!',
  },
  {
    date: '20-08-2019',
    title: 'Bitkub Blockchain Technology',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!',
  },
  {
    date: '20-08-2019',
    title: 'Inter Set Research And Solution',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!',
  },
]

const Timeline = () => {
  return (
    <div className={clsx(styled['timeline'], 'animate-fadeInUp')}>
      {mockData.map((data) => {
        return (
          <div key={data.title} className={styled['timeline__event']}>
            <div className={styled['timeline__event__icon']}>
              <i className='lni-cake'></i>
              <div className={styled['timeline__event__date']}>icon company</div>
            </div>
            <div className={styled['timeline__event__content']}>
              <div className={styled['timeline__event__title']}>
                {data.title}
              </div>
              <div className={styled['timeline__event__description']}>
                <p className='text-color-gray2'>{data.description}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Timeline
