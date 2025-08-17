// libs
import React from 'react'
import Image from 'next/image'
import styled from './home.module.scss'
import clsx from 'clsx'

// shared
import TextTopic from '../shared/textTopic/textTopic'
import FadeUpOnScroll from '../shared/fadeUponScroll/fadeUponScroll'

const Experiences = () => {
  return (
    <FadeUpOnScroll
      id='experiences'
      className='bg-white px-4 py-12 lg:py-20 lg:px-40 2xl:px-60 min-h-[660px] flex justify-center items-center'
    >
      <div className={styled['experiences']}>
        {/* experiences */}
        <div className={clsx(styled['experiences-box-col'], 'bg-neutral-800 ')}>
          <TextTopic text='Experience' className='text-white text-2xl sm:text-3xl' />
          <div className={clsx(styled['experiences-content'], 'text-white')}>
            <Image
              draggable={false}
              src='/logo-company/ttp-spark.webp'
              width={50}
              height={50}
              alt=''
              className='bg-white rounded-full my-3'
            />
            <p className='text-sm badge badge-primary'>2024 - Present</p>
            <p className='text-lg'>Front-end Software engineer Associate</p>
            <p className=''>ttb spark</p>
          </div>
          <div className={clsx(styled['experiences-content'], 'text-white')}>
            <Image
              draggable={false}
              src='/logo-company/bitkub.webp'
              width={50}
              height={50}
              alt=''
              className='bg-white rounded-full my-3'
            />
            <p className='text-sm badge badge-primary'>2022 - 2024</p>
            <p className='text-lg'>Front-end Software Develop</p>
            <p className=''>Bitkub Blockchain Technology Co.,Ltd.</p>
          </div>
          <div className={clsx(styled['experiences-content'], 'text-white')}>
            <Image
              draggable={false}
              src='/logo-company/interset.webp'
              width={50}
              height={50}
              alt=''
              className='bg-white rounded-full my-3'
            />
            <p className='text-sm badge badge-primary'>2021 - 2022</p>
            <p className='text-lg'>Back-end Software Develop</p>
            <p className=''>Inter Set Research And Solution Co.,Ltd.</p>
          </div>
        </div>

        {/* skills */}
        <div
          className={clsx(
            styled['experiences-box-col'],
            'bg-main-color-primavera2',
          )}
        >
          <TextTopic text='Skills' className='text-2xl sm:text-3xl' />
          <div className='grid grid-cols-2'>
            <div className={styled['skill-content']}>
              <Image
                draggable={false}
                src='/logo-stack/typescript-logo.webp'
                width={50}
                height={50}
                alt=''
                className='bg-white my-3'
              />
              <span>Typescript</span>
            </div>
            <div className={styled['skill-content']}>
              <Image
                draggable={false}
                src='/logo-stack/react-logo.webp'
                width={50}
                height={50}
                alt=''
                className='bg-white my-3'
              />
              <span>React</span>
            </div>
            <div className={styled['skill-content']}>
              <Image
                draggable={false}
                src='/logo-stack/nextjs-logo.webp'
                width={50}
                height={50}
                alt=''
                className='bg-white my-3'
              />
              <span>Nextjs</span>
            </div>
            <div className={styled['skill-content']}>
              <Image
                draggable={false}
                src='/logo-stack/nestjs-logo.webp'
                width={50}
                height={50}
                alt=''
                className='bg-white my-3'
              />
              <span>Nextjs</span>
            </div>
            <div className={styled['skill-content']}>
              <Image
                draggable={false}
                src='/logo-stack/jest-logo.webp'
                width={50}
                height={50}
                alt=''
                className='bg-white my-3'
              />
              <span>Jest</span>
            </div>
            <div className={styled['skill-content']}>
              <Image
                draggable={false}
                src='/logo-stack/golang-logo.webp'
                width={50}
                height={50}
                alt=''
                className='bg-white my-3'
              />
              <span>Golang</span>
            </div>
          </div>
        </div>
      </div>
    </FadeUpOnScroll>
  )
}

export default Experiences
