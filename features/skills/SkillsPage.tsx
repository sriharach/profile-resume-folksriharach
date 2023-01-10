import React from 'react'
import styled from 'styled-components'
import { Divider } from 'antd'
import useMedia from 'use-media'
import Frontend from './Frontend'
import Backend from './Backend'
import Languages from './Languages'
import { theme } from '@/styles/styled-component-theme'

const SkillsPage = () => {
  const isWideLg = useMedia({ maxWidth: `${theme.breakpoints.lg.value}px` })
  return (
    <React.Fragment>
      <Section>
        <Topic>
          <h2>Skills</h2>
          <p>My technical level</p>
        </Topic>
        <SkillCodeingBox>
          <Divider orientation='left' orientationMargin={isWideLg ? 0 : 50}>
            <h2>Coding Skills</h2>
          </Divider>
          <CodingBox>
            <Frontend />
            <Backend />
          </CodingBox>
        </SkillCodeingBox>
        <SkillLanguages>
          <Divider orientation='left' orientationMargin={isWideLg ? 0 : 50}>
            <h2>Languages Skills</h2>
          </Divider>
          <LanguagesBox>
            <Languages />
          </LanguagesBox>
        </SkillLanguages>
      </Section>
    </React.Fragment>
  )
}

export default SkillsPage

const Topic = styled.div`
  text-align: center;
  h2 {
    font-size: 36px;
    font-weight: bold;
  }

  p {
    color: #757575fa;
  }
`
const CodingBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 480px);
  column-gap: 3rem;
  justify-content: center;

  ${(props) => props.theme.breakpoints.lg.down} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${(props) => props.theme.breakpoints.md.down} {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`

const LanguagesBox = styled.div`
  display: grid;
  grid-template-columns: 480px;
  justify-content: center;

  ${(props) => props.theme.breakpoints.md.down} {
    grid-template-columns: 1fr;
  }
`

const Section = styled.section`
  display: grid;
  row-gap: 4rem;
`

const SkillCodeingBox = styled.div`
  display: grid;
  row-gap: 1rem;

  ${(props) => props.theme.prefers_color_scheme} {
    .ant-divider {
      border-color: #3d3d3f;
    }
  }
`

const SkillLanguages = styled.div`
  display: grid;
  row-gap: 1rem;

  ${(props) => props.theme.prefers_color_scheme} {
    .ant-divider {
      border-color: #3d3d3f;
    }
  }
`
