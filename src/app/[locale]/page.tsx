'use client'

import AboutPage from '@/components/home/AboutPage'
import Contact from '@/components/home/Contact'
import Experiences from '@/components/home/Experiences'
import HomePage from '@/components/home/HomePage'

export default function Home() {
  return (
    <>
      <HomePage />
      <AboutPage />
      <Experiences />
      <Contact />
    </>
  )
}
