// libs
import React from 'react'
import styled from '@/components/modules/layouts/layout.module.scss'

const useLayoutHeader = () => {
  React.useEffect(() => {
    const navbar = document.getElementById('layout-header')

    function EvenScroll() {
      if (!navbar) return
      const scrolled = window.scrollY > 400

      if (scrolled) {
        navbar.classList.add(styled['layout__header-push-content'])
      } else {
        navbar.classList.remove(styled['layout__header-push-content'])
      }
    }

    window.addEventListener('scroll', EvenScroll)

    return () => {
      window.removeEventListener('scroll', EvenScroll)
    }
  }, [])

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight
    const progress = (window.scrollY / totalHeight) * 100
    document.documentElement.style.setProperty('--progress', `${progress}%`)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

export default useLayoutHeader
