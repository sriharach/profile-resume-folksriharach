import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <React.Fragment>
      <Container className='container'>
        <p>Thank you for watching.</p>
        <p>&copy; Porfolio. All right reserved</p>
      </Container>
    </React.Fragment>
  )
}

export default Footer

const Container = styled.div`
  margin-top: 88px;
  padding: 28px 0;
  text-align: center;

  p {
    font-size: 18px;
  }

  ${(props) => props.theme.breakpoints.lg.down} {
    max-height: 110px;
    p {
      font-size: 16px;
    }
  }
  ${(props) => props.theme.breakpoints.sm.down} {
    p {
      font-size: 14px;
    }
  }
`
