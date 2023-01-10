import React from 'react'
import styled from 'styled-components'
import { Button, Card } from 'antd'
import { BiAward, BiBriefcaseAlt, BiSupport } from 'react-icons/bi'
import { ExportOutlined } from '@ant-design/icons'
import useMedia from 'use-media'
import { theme } from '@/styles/styled-component-theme'

const AboutPage = () => {
  const isWide = useMedia({ maxWidth: `${theme.breakpoints.lg.value}px` })
  return (
    <React.Fragment>
      <div style={{ display: 'grid', rowGap: '4rem' }}>
        <Topic>About Me</Topic>
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
                style={{ height: isWide ? '40px' : '56px' }}
                type='primary'
                shape='round'
                block={isWide}
                icon={<ExportOutlined />}
              >
                Download Transcript
              </Button>
            </div>
          </DetailContent>
        </Grid>
      </div>
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

const Topic = styled.span`
  font-size: 32px;
  font-weight: bold;
  display: flex;
  justify-content: center;
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
`
const InlineBox = styled(Card)`
  display: grid;
  align-items: center;
  text-align: center;
  border-radius: 8px;

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
