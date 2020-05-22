import './Nav.less'

import React from 'react'
import { Layout, Menu, Button } from 'antd'
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
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">
              <Button
                onClick={() => {
                  logout().then(() => {
                    setCat(null)
                    history.push('/login')
                  })
                }}
              >
                Log out
              </Button>
            </Menu.Item>
          </Menu>
        )}
      </div>
    </Header>
  )
}

export default Nav
