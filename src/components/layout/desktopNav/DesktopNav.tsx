import { useTranslation } from 'next-i18next'
import React from 'react'
import styled from 'styled-components'
import { useNavroutes } from '../routes'

const DesktopNav = () => {
  const { t } = useTranslation('header')
  return (
    <React.Fragment>
      <Menu className='front-md'>
        {useNavroutes.map((routes) => (
          <li
            key={routes.id}
            onClick={() => {
              window.location.href = routes.href
            }}
          >
            {t(`${routes.id.toLowerCase()}`)}
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
