import './Login.less'

import React, { useState } from 'react'
import { Tabs } from 'antd'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import WelcomeMessage from './WelcomeMessage'
import { useLocation } from 'react-router-dom'
import { parse } from 'query-string'
import Auth from '../Auth/Auth'

const { TabPane } = Tabs

function Login() {
  let location = useLocation()
  let { token } = parse(location.search)

  let [messageType, setMessageType] = useState()

  // this is user token
  if (token) {
    return <Auth token={token} />
  }

  return (
    <div className="Login">
      <div className="Login__container">
        {messageType ? (
          <WelcomeMessage messageType={messageType} />
        ) : (
          <Tabs defaultActiveKey="1">
            <TabPane tab="Login" key="1">
              <LoginForm onSuccess={() => setMessageType('login')} />
            </TabPane>
            <TabPane tab="Sign up" key="2">
              <SignupForm onSuccess={() => setMessageType('signup')} />
            </TabPane>
          </Tabs>
        )}
      </div>
    </div>
  )
}
export default Login
