// libs
import React from 'react'
import Image from 'next/image'

// components
import ButtonDaisyUi from '../buttonDaisyUi/ButtonDaisyUi'

// type
import { GardDaisyUiProps } from './type'

const GardDaisyUi = ({
  image,
  title,
  description,
  feature,
  onClick,
}: GardDaisyUiProps) => {
  return (
    <div className='card card-compact bg-white w-full shadow-md group'>
      <figure>
        <Image src={image} width={400} height={400} alt='' />
      </figure>
      <div className='card-body'>
        <h4 className='card-title group-hover:animate-fadeInUp group-hover:text-main-color-primavera1'>
          {title}
        </h4>
        <p className='text-zinc-500 text-sm group-hover:animate-fadeInUp'>{feature}</p>
        <p className='text-zinc-500'>{description}</p>
        <ButtonDaisyUi
          fullWidth
          text='View'
          variant='outline'
          onClick={onClick}
        />
      </div>
    </div>
  )
}

export default GardDaisyUi
