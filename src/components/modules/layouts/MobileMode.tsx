// libs
import React from 'react'
import { FiMenu } from 'react-icons/fi'

// components
import SwitchLocale from '../switchLocale/SwitchLocale'

const MobileMode = () => {
  return (
    <section className='drawer drawer-end lg:hidden'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <label htmlFor='my-drawer' className='flex justify-end'>
        <FiMenu className='size-6 cursor-pointer' />
      </label>
      <aside className='drawer-side'>
        <label
          htmlFor='my-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
        />
        <div className='menu bg-white text-base-content min-h-full w-60 '>
          <ul className='flex flex-col space-y-4 pt-6'>
            <li role='button'>
              <a href='#home'>Home</a>
            </li>
            <li role='button'>
              <a href='#about'>About</a>
            </li>
            <li role='button'>
              <a href='#experiences'>Experience</a>
            </li>
            <li role='button'>
              <a href='#portfolio'>Portfolio</a>
            </li>
            <li role='button'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
          <div className='self-center pt-6'>
             <SwitchLocale />
          </div>
        </div>
      </aside>
    </section>
  )
}

export default MobileMode
