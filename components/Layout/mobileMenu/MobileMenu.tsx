import React from 'react'
import styled from 'styled-components'
import { Button, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useTranslation } from 'next-i18next'
import { useNavroutes } from '../routes'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const MobileMenu = () => {
  const { t } = useTranslation('header')
  const [isDrawer, setIsDrawer] = React.useState(false)
  const handleDrawer = () => setIsDrawer(true)
  const closeDrawer = () => setIsDrawer(false)

  return (
    <React.Fragment>
      <IconButton type='text' icon={<MenuOutlined />} onClick={handleDrawer} />
      <DrawerAntd
        open={isDrawer}
        placement='bottom'
        onClose={closeDrawer}
        height={300}
      >
        <LanguageSwitcher />
        <Menu>
          {useNavroutes.map((routes) => (
            <li
              key={routes.id}
              onClick={() => (window.location.href = routes.href)}
            >
              {t(`${routes.id.toLowerCase()}`)}
            </li>
          ))}
        </Menu>
      </DrawerAntd>
    </React.Fragment>
  )
}

export default MobileMenu

const DrawerAntd = styled(Drawer)`
  ${(props) => props.theme.prefers_color_scheme} {
    border-color: #111111;
    .ant-drawer-body {
      background: #111111;
    }
    .ant-drawer-header {
      background: #111111;
    }
    svg {
      color: #b0b8b8;
    }
  }
  border-radius: 14px 14px 0px 0px;
  .ant-drawer-body {
    padding: 0 2rem;
  }
  .ant-drawer-header {
    border-bottom: none;
    .ant-drawer-header-title {
      display: flex;
      justify-content: right;
    }
  }
`

const Menu = styled.ul`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  align-content: center;

  ${(props) => props.theme.breakpoints.sm.down} {
    li {
      font-size: 16px;
    }
  }
`

const IconButton = styled(Button)`
  ${(props) => props.theme.prefers_color_scheme} {
    color: #b0b8b8;
  }
`
