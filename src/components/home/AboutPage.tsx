import React from 'react'
import BackgroundBlur from '../modules/backgroundBlur/BackgroundBlur'
import { HiOutlineDesktopComputer, HiOutlineServer } from 'react-icons/hi'
import Image from 'next/image'
import ExperienceIcon from '../icons/ExperienceIcon'
import CompleteIcon from '../icons/CompleteIcon'

const AboutPage = () => {
  return (
    <div className='text-xl text-white pt-12'>
      <BackgroundBlur>
        <h2 className='flex justify-end text-4xl font-bold pr-12 pb-12'>
          About me
        </h2>
        <div className='flex justify-between gap-6 items-center'>
          <Image
            draggable={false}
            src='/img/spaceman.png'
            height={10}
            width={1400}
            alt=''
          />
          <div className='flex flex-col space-y-8'>
            <div className='flex gap-4 h-full items-center'>
              <HiOutlineDesktopComputer className='size-24' />
              <div>
                <p className='text-2xl'>Frontend</p>
                <p className='text-xl'>
                  I am a Frontend Developer with 2 years of experience in web
                  development. I have a passion for learning and sharing my
                  knowledge with others as publicly as possible. I write blog
                  posts and create YouTube tutorials to help others learn web
                  development topics.
                </p>
              </div>
            </div>
            <div className='flex gap-4 h-full items-center'>
              <HiOutlineServer className='size-24' />
              <div>
                <p className='text-2xl'>Backend</p>
                <p className='text-xl'>
                  I am a Frontend Developer with 2 years of experience in web
                  development. I have a passion for learning and sharing my
                  knowledge with others as publicly as possible. I write blog
                  posts and create YouTube tutorials to help others learn web
                  development topics.
                </p>
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='flex flex-row gap-4 w-[400px] pt-12'>
                <div className='w-full text-center border border-color-gray2 rounded-md p-4'>
                  <div className='flex justify-center pb-2'>
                    <ExperienceIcon className='size-8' />
                  </div>
                  <p>Experience</p>
                  <p className='text-sm'>4 years working</p>
                </div>
                <div className='w-full text-center border border-color-gray2 rounded-md p-4'>
                  <div className='flex justify-center pb-2'>
                    <CompleteIcon className='size-8' />
                  </div>
                  <p>Completes</p>
                  <p className='text-sm'>3 Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundBlur>
    </div>
  )
}

export default AboutPage
