import Typewriter from '@/components/modules/typewriter/Typewriter'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import ButtonDaisyUi from '../daisyUI/buttonDaisyUi/ButtonDaisyUi'
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
        className='absolute top-[100px] left-0 w-[80px] xl:w-[120px]'
        src={'/img/shape1.png'}
        alt=''
        width={100}
        height={100}
        loading='lazy'
      />
      <Image
        draggable={false}
        className='absolute bottom-0 right-0 w-[80px] xl:w-[120px]'
        src={'/img/shape2.png'}
        alt=''
        width={100}
        height={100}
        loading='lazy'
      />

      <div className='flex-1 mt-16 flex flex-col space-y-5'>
        <h1 className='text-6xl font-bold text-neutral-800'>{t('title')}</h1>
        <Typewriter className='text-4xl text-neutral-800' text={t('introduce')} delay={100} />
        <span className='text-2xl text-neutral-800'>{t('guide')}</span>
        <div className='pt-12'>
          <ButtonDaisyUi
            fullWidth
            color='primary'
            type='primary'
            className='text-xl'
            text="Let's connect"
          />
        </div>
      </div>
    </section>
  )
}

export default HomePage
