// libs
import React from 'react'
import Image from 'next/image'

// components
import styled from './home.module.scss'
import ButtonDaisyUi from '../daisyUI/buttonDaisyUi/ButtonDaisyUi'

// shared
import SectionBox from '../shared/sectionBox/sectionBox'

const AboutPage = () => {
  return (
    <SectionBox>
      <Image
        src='/img/main-profile.webp'
        alt=''
        width={360}
        height={360}
        className={styled['home-profile']}
      />
      <div className='flex flex-col shrink-0 space-y-6'>
        <h2 className='text-6xl font-bold relative after:absolute after:left-0 after:-bottom-2 after:w-[100px] after:h-[4px] after:bg-main-color-primavera1'>
          About
        </h2>
        <p className='text-5xl font-bold'>Sriharach Promruksa</p>
        <div className='flex flex-row space-x-1 text-lg'>
          <span className='text-main-color-primavera1'>Software Engineer</span>
          <span>based in</span>
          <span className='text-main-color-primavera1'>Thailand</span>
        </div>
        <p aria-description='about description' className='text-zinc-500'>
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
          My passion is to design digital user experiences through the bold
          interface and meaningful interactions. Check out my Portfolio
        </p>
        <div className='grid grid-cols-2 gap-6'>
          <div className='flex flex-row'>
            <span className='w-[100px] relative after:absolute after:right-5 after:w-[1px] after:top-1/2 after:-translate-y-1/2 after:h-4 after:bg-zinc-400'>
              E-mail
            </span>
            <span className='text-zinc-500'>folksriahrach@gmail.com</span>
          </div>
          <div className='flex flex-row'>
            <span className='w-[100px] relative after:absolute after:right-5 after:w-[1px] after:top-1/2 after:-translate-y-1/2 after:h-4 after:bg-zinc-400'>
              Phone
            </span>
            <span className='text-zinc-500'>096-301-1722</span>
          </div>
          <div className='flex flex-row'>
            <span className='w-[100px] relative after:absolute after:right-5 after:w-[1px] after:top-1/2 after:-translate-y-1/2 after:h-4 after:bg-zinc-400'>
              Address
            </span>
            <span className='text-zinc-500'>Klong sam wa Bangkok</span>
          </div>
          <div className='flex flex-row'>
            <span className='w-[100px] relative after:absolute after:right-5 after:w-[1px] after:top-1/2 after:-translate-y-1/2 after:h-4 after:bg-zinc-400'>
              Linkedin
            </span>
            <span className='text-zinc-500'>Sriharach Promruksa</span>
          </div>
          <ButtonDaisyUi
            variant='outline'
            className='min-h-[80px] text-white text-lg mt-8'
            text='Download CV'
          />
        </div>
      </div>
    </SectionBox>
  )
}

export default AboutPage
