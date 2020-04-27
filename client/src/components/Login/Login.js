import './Login.less'

import React, { useState } from 'react'
import { Tabs } from 'antd'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import WelcomeMessage from './WelcomeMessage'

const { TabPane } = Tabs

function Login() {
  let [messageType, setMessageType] = useState()

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
