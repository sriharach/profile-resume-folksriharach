import React from 'react'
import styled from 'styled-components'
import type { NextPageWithLayout } from '@/interfaces/next-interface'
import LayoutDefault from '@/components/layout/LayoutDefault'
import AboutPage from '@/features/AboutPage'
import HomePage from '@/features/HomePage'
import SkillsPage from '@/features/skills/SkillsPage'
import QualificationPage from '@/features/QualificationPage'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Box>
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <QualificationPage />
      </Box>
    </>
  )
}

Home.getLayout = (page) => <LayoutDefault>{page}</LayoutDefault>

export default Home

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5.5rem;
  row-gap: 14rem;

  ${(props) => props.theme.breakpoints.md.down} {
    row-gap: 8rem;
  }
`
