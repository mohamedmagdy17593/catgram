import './WelcomeMessage.less'

import React from 'react'
import { Typography } from 'antd'

const { Title, Paragraph } = Typography

function WelcomeMessage({ messageType }) {
  return (
    <div className="WelcomeMessage">
      {messageType === 'login' ? (
        <Title level={2}>Welcome back {'🎉🎉'}</Title>
      ) : (
        <>
          <Title level={2}>Welcome {'🎉🎉'}</Title>
          <Paragraph>Hope you the best with our community</Paragraph>
        </>
      )}
      <Paragraph strong>Checkout your email to login</Paragraph>
    </div>
  )
}

export default WelcomeMessage
