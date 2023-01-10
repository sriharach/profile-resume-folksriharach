import React from 'react'
import styled from 'styled-components'
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
} from '@ant-design/icons'

const HomePage = () => {
  return (
    <React.Fragment>
      <Grid>
        <Social>
          <InstagramOutlined
            onClick={() => {
              const a = document.createElement('a')
              a.href = 'https://www.instagram.com/fspfolk/'
              a.target = '_blank'
              a.click()
            }}
          />
          <GithubOutlined
            onClick={() => {
              const a = document.createElement('a')
              a.href = 'https://github.com/sriharach'
              a.target = '_blank'
              a.click()
            }}
          />
          <FacebookOutlined
            onClick={() => {
              const a = document.createElement('a')
              a.href = 'https://www.facebook.com/folksriharach'
              a.target = '_blank'
              a.click()
            }}
          />
        </Social>
        <Content>
          <h1>Sriharach Promruksa</h1>
          <span>Hello, I&apos;m the developer</span>
          <br />
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
            nostrum quidem reiciendis ipsa earum in, accusamus optio nulla
            deleniti maiores vel voluptas dolore, et sit non inventore iure
            maxime explicabo.
          </span>
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

const Content = styled.section`
  h1 {
    font-size: 46px;
    font-weight: 700;
  }

  ${(props) => props.theme.breakpoints.lg.down} {
    h1 {
      font-size: 36px;
    }
  }

  ${(props) => props.theme.breakpoints.md.down} {
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
    cursor: pointer;
  }

  ${(props) => props.theme.breakpoints.md.down} {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
  }
`

const Yourself = styled.div`
  background-image: url('img/ITME.jpeg');
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
