// libs
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaLinkedin, FaGithub  } from 'react-icons/fa'

// component
import Typewriter from '@/components/modules/typewriter/Typewriter'
import styled from './home.module.scss'

const HomePage = () => {
  const t = useTranslations('home')
  return (
    <section
      id='introduce-yourself'
      aria-label='home-page'
      className={styled['home']}
    >
      <Image
        draggable={false}
        className='absolute top-[100px] z-10 left-0 w-[80px] xl:w-[120px]'
        src={'/img/shape1.png'}
        alt=''
        width={100}
        height={100}
        loading='lazy'
      />
      <Image
        draggable={false}
        className='absolute bottom-0 z-10 right-0 w-[80px] xl:w-[120px]'
        src={'/img/shape2.png'}
        alt=''
        width={100}
        height={100}
        loading='lazy'
      />
      <div className={styled['home-started']}>
        <h1 className='font-bold'>
          <p className='text-4xl pb-4'>Hi, I'm</p>
          <p className='text-6xl'>Sriharach Promruksa</p>
        </h1>
        <Typewriter className='text-4xl' text={t('introduce')} delay={100} />
      </div>
      <div className='absolute z-10 bottom-10 right-12'>
        <div className='flex flex-row space-x-3'>
          <div className='transition-all duration-300 hover:-translate-y-3 hover:bg-main-color-primavera1 rounded-full bg-white w-10 h-10 flex justify-center items-center cursor-pointer'>
            <FaLinkedin />
          </div>
          <div className='transition-all duration-300 hover:-translate-y-3 hover:bg-main-color-primavera1 rounded-full bg-white w-10 h-10 flex justify-center items-center cursor-pointer'>
            <FaGithub />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
