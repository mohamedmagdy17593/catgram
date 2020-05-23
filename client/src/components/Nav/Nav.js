import './Nav.less'

import React from 'react'
import { Layout, Menu, Dropdown } from 'antd'
import catLogo from '../../images/cat-logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { useCat } from '../../context/Cat'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const { Header } = Layout

const LOG_OUT = gql`
  mutation LOG_OUT {
    logout
  }
`

function Nav() {
  let history = useHistory()

  let { cat, setCat } = useCat()

  let [logout] = useMutation(LOG_OUT)

  return (
    <Header className="Nav">
      <div className="Nav__container container">
        <div className="Nav__logo">
          <Link to="/">
            <img
              src={catLogo}
              alt="catgram logo"
              height="40"
              className="Nav__logo-icon"
            />
          </Link>
        </div>

        {cat && (
          <Menu mode="horizontal">
            <Menu.Item key="avatar">
              <Dropdown
                placement="bottomRight"
                overlay={
                  <Menu>
                    <Menu.Item key="profile">
                      <Link to={`/${cat.username}`}>Profile</Link>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item
                      key="logout"
                      onClick={() => {
                        logout().then(() => {
                          setCat(null)
                          history.push('/login')
                        })
                      }}
                    >
                      Log out
                    </Menu.Item>
                  </Menu>
                }
                trigger={['click']}
              >
                <div className="Nav__avatar-wrapper">
                  <img src={cat.avatar} alt={`avatar for ${cat.name}`} />
                </div>
              </Dropdown>
            </Menu.Item>
          </Menu>
        )}
      </div>
    </Header>
  )
}

export default Nav
