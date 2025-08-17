// libs
import React from 'react'
import { MdAlternateEmail } from 'react-icons/md'
import { MdOutlinePhoneIphone } from 'react-icons/md'

// components
import InputDaisyUi from '../daisyUI/inputDaisyUi/inputDaisyUi'
import ButtonDaisyUi from '../daisyUI/buttonDaisyUi/ButtonDaisyUi'
import TextAreaDaisyUi from '../daisyUI/textAreaDaisyUi/textAreaDaisyUi'

// shared
import SectionBox from '../shared/sectionBox/sectionBox'
import TextTopic from '../shared/textTopic/textTopic'

const Contact = () => {
  return (
    <SectionBox id='contact'>
      <div className='bg-white shadow-xl flex flex-col space-y-6 p-6 mr-20 rounded-lg'>
        <TextTopic
          text={
            <p>
              Contact <span className='text-main-color-primavera1'>us</span>
            </p>
          }
        />
        <fieldset className='fieldset bg-main-color-primavera2 border-main-color-primavera1 rounded-box w-xs border p-4'>
          <label className='label'>Name</label>
          <InputDaisyUi
            className='w-full'
            variant='primary'
            placeholder='Name'
            inputSize='md'
          />

          <label className='label'>Email</label>
          <InputDaisyUi
            className='w-full'
            variant='primary'
            placeholder='Email'
            inputSize='md'
          />

          <label className='label'>Phone</label>
          <InputDaisyUi
            className='w-full'
            variant='primary'
            placeholder='Phone'
            inputSize='md'
          />

          <label className='label'>Message</label>
          <TextAreaDaisyUi />

          <ButtonDaisyUi className='mt-4 text-white' fullWidth text='Submit' />
        </fieldset>
      </div>
      <div className='flex flex-col shrink-0 space-y-6'>
        <TextTopic
          text={
            <p>
              Get in <span className='text-main-color-primavera1'>touch</span>
            </p>
          }
        />
        <p className='text-zinc-500'>
          Always available for freelancing if the right project comes along,
          Feel free to contact me.
        </p>
        <div className='flex flex-col space-y-6 justify-center mx-auto'>
          <div className='flex items-center space-x-4'>
            <div className='flex flex-col justify-center items-center rounded-full bg-main-color-primavera1 size-12'>
              <MdAlternateEmail className='text-white size-6' />
            </div>
            <span className='text-neutral-500'>folksriharach@gmail.com</span>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='flex flex-col justify-center items-center rounded-full bg-main-color-primavera1 size-12'>
              <MdOutlinePhoneIphone className='text-white size-6' />
            </div>
            <span className='text-neutral-500'>096-301-11722</span>
          </div>
        </div>
      </div>
    </SectionBox>
  )
}

export default Contact
