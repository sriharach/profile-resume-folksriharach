'use client'

// libs
import React, { useRef, useEffect, useState, ReactNode } from 'react'
import clsx from 'clsx'
import styled from './fadeUponScroll.module.scss'

interface FadeUpOnScrollProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: ReactNode
  className?: string
}

const FadeUpOnScroll = ({
  children,
  className,
  ...props
}: FadeUpOnScrollProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(element) // Only animate once
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={ref}
      className={clsx(styled['fade-upon'], className, {
        'opacity-100 translate-y-0': visible,
        'opacity-0 translate-y-10': !visible,
      })}
      {...props}
    >
      {children}
    </section>
  )
}

export default FadeUpOnScroll
