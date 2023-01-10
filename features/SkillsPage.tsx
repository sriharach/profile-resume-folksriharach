import React from 'react'
import styled from 'styled-components'
import Frontend from './Frontend'
import Backend from './Backend'

const SkillsPage = () => {
  return (
    <React.Fragment>
      <Section style={{ display: 'grid', rowGap: '4rem' }}>
        <Topic>
          <h2>Skills</h2>
          <p>My technical level</p>
        </Topic>
        <Box>
          <Frontend />
          <Backend />
        </Box>
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
const Box = styled.div`
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

const Section = styled.section`
  display: grid;
  row-gap: 4rem;
`
