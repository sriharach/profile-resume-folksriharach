// libs
import React from 'react'
import {
  HiOutlineDesktopComputer,
  HiOutlineServer,
  HiCheckCircle,
} from 'react-icons/hi'
import Image from 'next/image'
import clsx from 'clsx'

// components
import ExperienceIcon from '../icons/ExperienceIcon'
import CompleteIcon from '../icons/CompleteIcon'
import FadeUpOnScroll from '../shared/fadeUponScroll/fadeUponScroll'
import styled from './home.module.scss'

const AboutPage = () => {
  return (
    <FadeUpOnScroll className={clsx(styled['about'])}>
      <h2 className='flex text-4xl font-bold'>About me</h2>
      <div className='gap-6 grid grid-cols-[300px_1fr]'>
        <div className='relative flex flex-col shrink-0 after:absolute after:-right-3 after:w-[1px] after:top-1/2 after:-translate-y-1/2 after:h-[110%] after:bg-neutral-950'>
          <div className='flex flex-col shrink-0 bg-gray-800'>
            <HiCheckCircle />
            <span>124 Completed Project</span>
            <div className={styled['liquid-glass']} />
          </div>
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          vitae tempore quas voluptatibus quaerat? Praesentium debitis,
          accusantium ex exercitationem non, facere minus eum assumenda
          reiciendis quam ullam eaque dicta accusamus!
        </div>
      </div>
      {/* <div className='flex justify-between gap-6 items-center'>
        <div className={clsx('flex flex-col space-y-8')}>
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
      </div> */}
    </FadeUpOnScroll>
  )
}

export default AboutPage
