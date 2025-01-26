import React from 'react'
import Timeline from '../modules/timeline/Timeline'
import BackgroundBlur from '../modules/backgroundBlur/BackgroundBlur'

const Experiences = () => {
  return (
    <div className='text-white pt-12'>
      <BackgroundBlur className='h-full'>
        <h2 className='text-4xl font-bold pr-12 pb-12'>Experiences</h2>
        <div className='text-xl px-36'>
          <Timeline />
        </div>
      </BackgroundBlur>
    </div>
  )
}

export default Experiences
