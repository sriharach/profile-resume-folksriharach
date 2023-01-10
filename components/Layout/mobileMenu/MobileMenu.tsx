import React from 'react'
import styled from 'styled-components'
import { Button, Drawer } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'

const MobileMenu = () => {
  const [isDrawer, setIsDrawer] = React.useState(false)
  const handleDrawer = () => setIsDrawer(true)
  const closeDrawer = () => setIsDrawer(false)

  return (
    <React.Fragment>
      <IconButton
        type='text'
        icon={<MenuUnfoldOutlined />}
        onClick={handleDrawer}
      />
      <DrawerAntd
        open={isDrawer}
        placement='bottom'
        onClose={closeDrawer}
        height={300}
      >
        <Menu className='front-md'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Contact</li>
        </Menu>
      </DrawerAntd>
    </React.Fragment>
  )
}

export default MobileMenu

const DrawerAntd = styled(Drawer)`
  @media (prefers-color-scheme: dark) {
    border-color: #23242afc;
    .ant-drawer-body {
      background: #23242afc;
    }
    .ant-drawer-header {
      background: #23242afc;
    }
    svg {
      color: #cdd6d6e7;
    }
  }
  border-radius: 14px 14px 0px 0px;
  .ant-drawer-header {
    border-bottom: none;
    padding: 16px;
    .ant-drawer-header-title {
      display: flex;
      justify-content: right;
    }
  }
`

const Menu = styled.ul`
  display: grid;
  row-gap: 2rem;

  li {
    cursor: pointer;
  }
`

const IconButton = styled(Button)`
  @media (prefers-color-scheme: dark) {
    color: #cdd6d6e7;
  }
`
