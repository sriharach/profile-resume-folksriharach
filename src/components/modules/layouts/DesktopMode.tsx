// components
import SwitchLocale from '../switchLocale/SwitchLocale'
import styled from './layout.module.scss'

const DesktopMode = () => {
  return (
    <section className='hidden justify-between items-center space-x-12 lg:flex'>
      <ul className='flex space-x-8 items-center'>
        <li role='button' className={styled['layout__text-hover-underline']}>
          <a href='#home'>Home</a>
        </li>
        <li role='button' className={styled['layout__text-hover-underline']}>
          <a href='#about'>About</a>
        </li>
        <li role='button' className={styled['layout__text-hover-underline']}>
          <a href='#experiences'>Experience</a>
        </li>
        <li role='button' className={styled['layout__text-hover-underline']}>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li role='button' className={styled['layout__text-hover-underline']}>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <SwitchLocale />
    </section>
  )
}

export default DesktopMode
