import React from 'react'

const DefaultLoading = () => {
  return (
    <div className='box-loading'>
      <div className='wrapper'>
        <div className='circle' />
        <div className='circle' />
        <div className='circle' />
        <div className='shadow' />
        <div className='shadow' />
        <div className='shadow' />
        <span>Just a moment</span>
      </div>
    </div>
  )
}

export default DefaultLoading
