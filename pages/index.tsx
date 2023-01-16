import React from 'react'
import styled from 'styled-components'
import { GetStaticProps } from 'next/types'
import type { NextPageWithLayout } from '@/interfaces/next-interface'
import LayoutDefault from '@/components/layout/LayoutDefault'
import AboutPage from '@/features/AboutPage'
import HomePage from '@/features/HomePage'
import SkillsPage from '@/features/skills/SkillsPage'
import QualificationPage from '@/features/QualificationPage'
import ContactPage from '@/features/ContactPage'
import languageTranslation from '@/helpers/languageTranslation'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Box>
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <QualificationPage />
        <ContactPage />
      </Box>
    </>
  )
}

Home.getLayout = (page) => <LayoutDefault>{page}</LayoutDefault>

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await languageTranslation(locale)),
    },
  }
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8rem;

  ${(props) => props.theme.breakpoints.md.down} {
    row-gap: 4.5rem;
  }
`
