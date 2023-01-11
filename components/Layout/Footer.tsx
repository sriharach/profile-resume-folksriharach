import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <React.Fragment>
      <Container className='container'>
        <FooterName>Folk</FooterName>
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
  min-height: 160px;

  p {
    font-size: 18px;
  }
`

const FooterName = styled.h1`
  font-size: 35px;
`
