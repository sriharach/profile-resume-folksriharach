// libs
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

// component
import Typewriter from '@/components/modules/typewriter/Typewriter'
import styled from './home.module.scss'

// hooks
import useHome from '@/hooks/useHome'

const HomePage = () => {
  // translations
  const t = useTranslations('home')

  // hooks
  const { onClickRedirect } = useHome()

  return (
    <section id='home' aria-label='home-page' className={styled['home']}>
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
        <div aria-label='linkedin-icon' className='flex flex-row space-x-3'>
          <div
            className='icon-up group'
            onClick={() => onClickRedirect(process.env.URL_LINKEDIN as string)}
          >
            <FaLinkedin className='group-hover:text-white size-5' />
          </div>
          <div
            aria-label='github-icon'
            className='icon-up group'
            onClick={() => onClickRedirect(process.env.URL_GITHUB as string)}
          >
            <FaGithub className='group-hover:text-white size-5' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
