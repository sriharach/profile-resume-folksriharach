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

  const [scrollPercent, setScrollPercent] = React.useState(0)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight
    const percent = (scrollTop / scrollHeight) * 100
    setScrollPercent(percent)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollPercent }
}

export default useLayoutHeader
