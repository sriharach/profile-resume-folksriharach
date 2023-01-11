import React from 'react'
import styled from 'styled-components'
import { useNavroutes } from '../routes'

const DesktopNav = () => {
  return (
    <React.Fragment>
      <Menu className='front-md'>
        {useNavroutes.map((routes) => (
          <li
            key={routes.id}
            onClick={() => (window.location.href = routes.href)}
          >
            {routes.name}
          </li>
        ))}
      </Menu>
    </React.Fragment>
  )
}

export default DesktopNav

const Menu = styled.ul`
  display: flex;
  column-gap: 3rem;
`
