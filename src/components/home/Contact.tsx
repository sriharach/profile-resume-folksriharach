// libs
import React from 'react'

// components
import InputDaisyUi from '../daisyUI/inputDaisyUi/inputDaisyUi'
import ButtonDaisyUi from '../daisyUI/buttonDaisyUi/ButtonDaisyUi'

// shared
import SectionBox from '../shared/sectionBox/sectionBox'
import TextTopic from '../shared/textTopic/textTopic'

const Contact = () => {
  return (
    <SectionBox>
      <div className='bg-white min-w-[300px] min-h-[300px] shadow-xl flex flex-col shrink-0 space-y-6 p-6'>
        <TextTopic text='Contact us' />
        <fieldset className='fieldset bg-main-color-primavera2 border-main-color-primavera1 rounded-box w-xs border p-4'>
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

          <ButtonDaisyUi className='mt-4 text-white' fullWidth text='Submit' />
        </fieldset>
      </div>
    </SectionBox>
  )
}

export default Contact
