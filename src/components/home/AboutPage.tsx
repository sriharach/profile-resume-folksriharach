// libs
import React from 'react'
import Image from 'next/image'

// components
import styled from './home.module.scss'
import ButtonDaisyUi from '../daisyUI/buttonDaisyUi/ButtonDaisyUi'
import TextTopic from '../shared/textTopic/textTopic'

// shared
import SectionBox from '../shared/sectionBox/sectionBox'

// hooks
import useAbout from '@/hooks/useAbout'

const AboutPage = () => {
  // hooks
  const { isMobileResponsive, onClickDownloadCV } = useAbout()

  return (
    <SectionBox id='about'>
      <Image
        src='/img/main-profile.webp'
        alt=''
        width={isMobileResponsive ? 260 : 360}
        height={isMobileResponsive ? 260 : 360}
        className={styled['home-profile']}
      />
      <div className={styled['about']}>
        <TextTopic text='About' className='text-2xl md:text-6xl font-bold' />
        <p className='text-2xl md::text-5xl font-bold'>Sriharach Promruksa</p>
        <div className='flex flex-row space-x-1 text-lg'>
          <span className='text-main-color-primavera1'>Software Engineer</span>
          <span>based in</span>
          <span className='text-main-color-primavera1'>Thailand</span>
        </div>
        <p aria-description='about description' className='text-zinc-500 text-sm sm:text-base'>
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
          My passion is to design digital user experiences through the bold
          interface and meaningful interactions. Check out my Portfolio
        </p>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-3 md:gap-6'>
          <div className='flex flex-row'>
            <span className={styled['about-list-contract']}>E-mail</span>
            <span className='text-zinc-500 text-sm sm:text-base'>folksriahrach@gmail.com</span>
          </div>
          <div className='flex flex-row'>
            <span className={styled['about-list-contract']}>Phone</span>
            <span className='text-zinc-500 text-sm sm:text-base'>096-301-1722</span>
          </div>
          <div className='flex flex-row'>
            <span className={styled['about-list-contract']}>Address</span>
            <span className='text-zinc-500 text-sm sm:text-base'>Klong sam wa Bangkok</span>
          </div>
          <div className='flex flex-row'>
            <span className={styled['about-list-contract']}>Linkedin</span>
            <span className='text-zinc-500 text-sm sm:text-base'>Sriharach Promruksa</span>
          </div>
          <ButtonDaisyUi
            onClick={onClickDownloadCV}
            variant='outline'
            className='lg:min-h-[80px] text-white text-sm sm:text-lg mt-4 md:mt-8'
            text='Download CV'
          />
        </div>
      </div>
    </SectionBox>
  )
}

export default AboutPage
