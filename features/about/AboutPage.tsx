import React from 'react'
import styled from 'styled-components'
import { Button, Card, Tooltip } from 'antd'
import { BiAward, BiBriefcaseAlt, BiSupport } from 'react-icons/bi'
import { DownloadOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import useMedia from 'use-media'
import { useTranslation } from 'next-i18next'
import Experiences from './Experiences'
import { theme } from '@/styles/styled-component-theme'

const AboutPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation('common')
  const isWideLg = useMedia({ maxWidth: `${theme.breakpoints.lg.value}px` })

  const handleLoadresume = () => {
    fetch('assets/Sriharach-resume.pdf').then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        const alink = document.createElement('a')
        alink.href = fileURL
        alink.download = `Sriharach-resume`
        alink.click()
      })
    })
  }

  const handleLoadCV = () => {
    const CV_language = language === 'th' ? 'CV-th.pdf' : 'CV-en.pdf'
    fetch('assets/' + CV_language).then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        const alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'Sriharach-CV-' + language
        alink.click()
      })
    })
  }

  // const handleDownload = () => {
  //   const time = new Date()
  //   fetch('assets/transcript.pdf').then((res) => {
  //     res.blob().then((blob) => {
  //       const fileURL = window.URL.createObjectURL(blob)
  //       // Setting various property values
  //       const alink = document.createElement('a')
  //       alink.href = fileURL
  //       alink.download = `transcript-${time.getDate()}-${
  //         time.getMonth() + 1
  //       }-${time.getFullYear()}`
  //       alink.click()
  //     })
  //   })
  // }

  return (
    <React.Fragment>
      <div id='about' />
      <Section>
        <Topic>
          <h2>{t('about.title')}</h2>
          <div style={{ display: 'inline-flex', columnGap: 6 }}>
            <p>{t('about.sub-title')}</p>
            <Tooltip
              color='#111d2c'
              title={
                <React.Fragment>
                  {t('about.experiences.sub-title-?')}
                </React.Fragment>
              }
            >
              <QuestionCircleOutlined />
            </Tooltip>
          </div>
        </Topic>
        <Grid>
          <Yourself />
          <DetailContent>
            <Box>
              <InlineBox>
                <div>
                  <BiAward />
                </div>
                <span>{t('about.box.experience')}</span>
                <dd>{t('about.box.sub-experience')}</dd>
              </InlineBox>
              <InlineBox>
                <div>
                  <BiBriefcaseAlt />
                </div>
                <span>{t('about.box.completes')}</span>
                <dd>{t('about.box.sub-completes')}</dd>
              </InlineBox>
              <InlineBox>
                <div>
                  <BiSupport />
                </div>
                <span>{t('about.box.support')}</span>
                <dd>{t('about.box.sub-support')}</dd>
              </InlineBox>
            </Box>
            <div>
              <p>
                {t('about.topic.my-name')}:{' '}
                <span>{t('about.des.my-name')}</span>
              </p>
              <p>
                {t('about.topic.birthday')}:{' '}
                <span>{t('about.des.birthday')}</span>
              </p>
              <p>
                {t('about.topic.gender')}: <span>{t('about.des.gender')}</span>
              </p>
              <p>
                {t('about.topic.marital')}:{' '}
                <span>{t('about.des.marital')}</span>
              </p>
              <p>
                {t('about.topic.height')}: <span>{t('about.des.height')}</span>
              </p>
              <p>
                {t('about.topic.weight')}: <span>{t('about.des.weight')}</span>
              </p>
              <p>
                {t('about.topic.nationality')}:{' '}
                <span>{t('about.des.nationality')}</span>
              </p>
              <p>
                {t('about.topic.religion')}:{' '}
                <span>{t('about.des.religion')}</span>
              </p>
              <p>
                {t('about.topic.military')}:{' '}
                <span>{t('about.des.military')}</span>
              </p>
              <p>
                {t('about.topic.address')}:{' '}
                <span>{t('about.des.address')}</span>
              </p>
            </div>
            <Boxbutton>
              {/* <Button
                onClick={handleDownload}
                style={{
                  height: isWideLg ? '40px' : '56px',
                  borderRadius: '0.8rem',
                  minWidth: '210px',
                }}
                type='primary'
                block={isWideLg}
                icon={<DownloadOutlined />}
              >
                {t('about.btn-download')}
              </Button> */}
              <Button
                onClick={handleLoadresume}
                block={isWideLg}
                style={{
                  height: isWideLg ? '40px' : '56px',
                  borderRadius: '0.8rem',
                }}
                type='primary'
                icon={<DownloadOutlined />}
              >
                {t('about.des.button.resume')}
              </Button>
              <Button
                onClick={handleLoadCV}
                block={isWideLg}
                style={{
                  height: isWideLg ? '40px' : '56px',
                  borderRadius: '0.8rem',
                }}
                type='primary'
                icon={<DownloadOutlined />}
              >
                {t('about.des.button.cv')}
              </Button>
            </Boxbutton>
          </DetailContent>
        </Grid>
        <Experiences />
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
  background-image: url('img/img-profile.jpeg');
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
const Boxbutton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;

  .ant-btn-primary {
    width: 100%;
  }

  ${(props) => props.theme.breakpoints.sm.down} {
    flex-direction: column;
  }
`
