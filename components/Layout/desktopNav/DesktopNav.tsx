import React from 'react'
import styled from 'styled-components'

const DesktopNav = () => {
  return (
    <React.Fragment>
      <Menu className='front-md'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Contact</li>
      </Menu>
    </React.Fragment>
  )
}

export default DesktopNav

const Menu = styled.ul`
  display: flex;
  column-gap: 3rem;
  cursor: pointer;

  ${(props) => props.theme.breakpoints.sm.down} {
    li {
      display: none;
    }
  }
`
