import React from 'react'
import styled from 'styled-components'
import { Button, Card } from 'antd'
import { BiAward, BiBriefcaseAlt, BiSupport } from 'react-icons/bi'
import { DownloadOutlined } from '@ant-design/icons'
import useMedia from 'use-media'
import { theme } from '@/styles/styled-component-theme'

const AboutPage = () => {
  const isWideLg = useMedia({ maxWidth: `${theme.breakpoints.lg.value}px` })

  const handleDownload = () => {
    const time = new Date()
    fetch('transcript.pdf').then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        const alink = document.createElement('a')
        alink.href = fileURL
        alink.download = `transcript-${time.getDate()}-${
          time.getMonth() + 1
        }-${time.getFullYear()}`
        alink.click()
      })
    })
  }

  return (
    <React.Fragment>
      <div id='about' />
      <Section>
        <Topic>
          <h2>About me</h2>
          <p>My introduction</p>
        </Topic>
        <Grid>
          <Yourself />
          <DetailContent>
            <Box>
              <InlineBox>
                <div>
                  <BiAward />
                </div>
                <span>Experience</span>
                <dd>1 year working</dd>
              </InlineBox>
              <InlineBox>
                <div>
                  <BiBriefcaseAlt />
                </div>
                <span>Completes</span>
                <dd>6+ Projects</dd>
              </InlineBox>
              <InlineBox>
                <div>
                  <BiSupport />
                </div>
                <span>Support</span>
                <dd>No idea</dd>
              </InlineBox>
            </Box>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              possimus vero, nihil repellat illum, rerum sunt corporis
              reprehenderit commodi facere alias nesciunt dicta, quod saepe
              dolorem vel beatae nemo eos.
            </div>
            <div>
              <Button
                onClick={handleDownload}
                style={{
                  height: isWideLg ? '40px' : '56px',
                  borderRadius: '0.8rem',
                }}
                type='primary'
                block={isWideLg}
                icon={<DownloadOutlined />}
              >
                Download Transcript
              </Button>
            </div>
          </DetailContent>
        </Grid>
      </Section>
    </React.Fragment>
  )
}

export default AboutPage

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  column-gap: 4rem;

  ${(props) => props.theme.breakpoints.md.down} {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
  }
`

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
const Yourself = styled.div`
  background-image: url('img/ITME.jpeg');
  background-position: center;
  background-size: cover;
  border-radius: 1.5rem;
  width: 480px;
  height: 100%;
  justify-self: center;

  ${(props) => props.theme.breakpoints.lg.down} {
    width: 100%;
  }

  ${(props) => props.theme.breakpoints.md.down} {
    width: 320px;
    height: 320px;
  }
`
const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
`
const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  ${(props) => props.theme.breakpoints.lg.down} {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
  }

  ${(props) => props.theme.breakpoints.md.down} {
    display: flex;
    flex-wrap: wrap;

    div {
      flex: 1;
    }
  }

  ${(props) => props.theme.breakpoints.sm.down} {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }

  svg,
  span {
    ${(props) => props.theme.prefers_color_scheme} {
      color: #b0b8b8;
    }
  }
`
const InlineBox = styled(Card)`
  display: grid;
  align-items: center;
  text-align: center;

  svg {
    font-size: 1.6rem;
  }

  span {
    font-size: 16px;
    font-weight: bold;
    line-height: 26px;
  }

  dd {
    color: #757575fa;
    font-size: small;
  }
`
const Section = styled.section`
  display: grid;
  row-gap: 4rem;
`
