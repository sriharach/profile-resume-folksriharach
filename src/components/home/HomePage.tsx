import Typewriter from '@/components/modules/typewriter/Typewriter'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import ButtonDaisyUi from '../daisyUI/buttonDaisyUi/ButtonDaisyUi'

const HomePage = () => {
  const t = useTranslations('home')
  return (
    <div className='flex flex-row text-white h-[calc(100vh_-_100px)] justify-center items-center'>
      <div id='image-space-man' className='w-[calc(100%_-_840px)]'>
        <Image
          className='animate-moveUpDown'
          draggable={false}
          src={'/img/spaceman-rocket.webp'}
          width={540}
          height={540}
          alt=''
        />
      </div>
      <div
        id='introduce-youseft'
        className='flex-1 mt-16 flex flex-col space-y-5'
      >
        <h1 className='text-6xl font-bold'>{t('title')}</h1>
        <Typewriter className='text-4xl' text={t('introduce')} delay={100} />
        <span className='text-2xl text-color-gray2'>{t('guide')}</span>
        <div className='pt-12'>
          <ButtonDaisyUi
            fullWidth
            color='primary'
            type='ghost'
            className='text-xl'
            text="Let's connect"
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
