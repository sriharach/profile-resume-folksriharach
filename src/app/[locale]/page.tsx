'use client'

import AboutPage from '@/components/home/AboutPage'
import Experiences from '@/components/home/Experiences'
import HomePage from '@/components/home/HomePage'

export default function Home() {
  return (
    <div className='space-y-6'>
      <HomePage />
      <AboutPage />
      <Experiences />
    </div>
  )
}
