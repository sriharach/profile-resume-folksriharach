// libs
import React from 'react'

// components
import GardDaisyUi from '../daisyUI/gardDaisyUi/GardDaisyUi'
import styled from './home.module.scss'

// shared
import TextTopic from '../shared/textTopic/textTopic'
import FadeUpOnScroll from '../shared/fadeUponScroll/fadeUponScroll'

// hooks
import usePortfolio from '@/hooks/usePortfolio'

const Portfolio = () => {
  const { onClickRedirect } = usePortfolio()

  return (
    <section id='portfolio' className={styled['profile']}>
      <FadeUpOnScroll className={styled['profile-box-col']}>
        <TextTopic lineCenter text='My Portfolio' />
        <p className='text-neutral-500 text-center'>
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
        </p>
        <div className='grid grid-cols-3 gap-8'>
          <GardDaisyUi
            image='/projects/wisdom-construction.webp'
            title='Wisdom construction'
            feature='Construction inspect'
            onClick={() => onClickRedirect(process.env.WISDOM_DOMAIN as string)}
          />
          <GardDaisyUi
            image='/projects/wisdom-construction-management.webp'
            title='Wisdom construction management'
            feature='Construction inspect'
            onClick={() =>
              onClickRedirect(process.env.WISDOM_MANAGEMENT_DOMAIN as string)
            }
          />
          <GardDaisyUi
            image='/projects/open-api-management.webp'
            title='Open api management'
            feature='Open api web'
            onClick={() =>
              onClickRedirect(process.env.OPEN_API_DOMAIN as string)
            }
          />
          <GardDaisyUi
            image='/projects/image-converter.webp'
            title='Image converter'
            feature='Image converter web'
            onClick={() =>
              onClickRedirect(process.env.IMAGE_CONVERTER_DOMAIN as string)
            }
          />
        </div>
      </FadeUpOnScroll>
    </section>
  )
}

export default Portfolio
