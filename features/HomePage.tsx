import React from 'react'
import styled from 'styled-components'
import {
  DeploymentUnitOutlined,
  GithubOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'next-i18next'

const HomePage = () => {
  const { t } = useTranslation('common')

  return (
    <React.Fragment>
      <div id='home' />
      <Grid>
        <Social>
          {/* <InstagramOutlined
            onClick={() => {
              const a = document.createElement('a')
              a.href = 'https://www.instagram.com/fspfolk/'
              a.target = '_blank'
              a.click()
            }}
          /> */}
          <GithubOutlined
            onClick={() => {
              const a = document.createElement('a')
              a.href = 'https://github.com/sriharach'
              a.target = '_blank'
              a.click()
            }}
          />
          <DeploymentUnitOutlined
            onClick={() => {
              const a = document.createElement('a')
              a.href =
                'https://github.com/sriharach/profile-resume-folksriharach'
              a.target = '_blank'
              a.click()
            }}
          />
          {/* <FacebookOutlined
            onClick={() => {
              const a = document.createElement('a')
              a.href = 'https://www.facebook.com/folksriharach'
              a.target = '_blank'
              a.click()
            }}
          /> */}
        </Social>
        <Content>
          <h1>{t('home.name')}</h1>
          <span>{t('home.message')}</span>
          <p>{t('home.guide')}</p>
          {/* <Button
            onClick={handleLoadresume}
            block={isWideLg}
            style={{
              height: isWideLg ? '40px' : '56px',
              borderRadius: '0.8rem',
              minWidth: '210px',
            }}
            type='primary'
            icon={<DownloadOutlined />}
          >
            {t('home.documect-resume')}
          </Button> */}
        </Content>
        <Yourself />
      </Grid>
    </React.Fragment>
  )
}

export default HomePage

const Grid = styled.div`
  display: grid;
  grid-template-columns: 116px repeat(2, 1fr);
  padding-top: 5.5rem;
  align-items: center;
  column-gap: 2rem;

  ${(props) => props.theme.breakpoints.lg.down} {
    grid-template-columns: 100px repeat(2, 1fr);
    column-gap: 1.25rem;
  }

  ${(props) => props.theme.breakpoints.md.down} {
    display: flex;
    flex-direction: column-reverse;
    padding-top: 1.5rem;
    row-gap: 2rem;
  }
`

const Content = styled.div`
  .ant-btn {
    margin-top: 56px;
  }
  h1 {
    font-size: 46px;
    font-weight: bold;
  }

  ${(props) => props.theme.breakpoints.lg.down} {
    .ant-btn.ant-btn-block {
      margin-top: 2rem;
    }
    h1 {
      font-size: 36px;
    }
  }

  ${(props) => props.theme.breakpoints.md.down} {
    button {
      margin-top: 0;
    }
    h1 {
      font-size: 28px;
    }
  }
`

const Social = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 2rem;
  font-size: 1.25rem;

  svg {
    transition: all 0.3s ease;
    :hover {
      cursor: pointer;
      font-size: 1.5rem;
    }
  }

  ${(props) => props.theme.breakpoints.md.down} {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
  }
`

const Yourself = styled.div`
  background-image: url('img/main-profile.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 9px rgb(255 255 255/ 30%);
  width: 300px;
  height: 300px;
  justify-self: center;
  animation: profile_img 8s ease-in-out infinite 1s;

  ${(props) => props.theme.breakpoints.lg.down} {
    width: 250px;
    height: 250px;
    box-shadow: inset 0 0 0 8px rgb(255 255 255/ 30%);
  }
`
