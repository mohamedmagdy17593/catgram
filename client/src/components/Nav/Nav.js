import './Nav.less'

import React from 'react'
import { Layout, Menu } from 'antd'
import catLogo from '../../images/cat-logo.svg'

const { Header } = Layout

function Nav() {
  return (
    <Header className="Nav">
      <div className="Nav__container container">
        <div className="Nav__logo">
          <img
            src={catLogo}
            alt="catgram logo"
            height="40"
            className="Nav__logo-icon"
          />
        </div>

        {false && (
          <Menu mode="horizontal">
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        )}
      </div>
    </Header>
  )
}

export default Nav
