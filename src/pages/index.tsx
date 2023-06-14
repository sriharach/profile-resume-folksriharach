import React from 'react'
import styled from 'styled-components'
import { GetStaticProps } from 'next/types'
import Layout from '@/components/layout/LayoutDefault'
import AboutPage from '@/features/about/AboutPage'
import SkillsPage from '@/features/skills/SkillsPage'
import ContactPage from '@/features/ContactPage'
import languageTranslation from '@/helpers/languageTranslation'
import HomePage from '@/features/HomePage'
import type { NextPageWithLayout } from '@/interfaces/next-interface'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ContactPage />
    </Box>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

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
