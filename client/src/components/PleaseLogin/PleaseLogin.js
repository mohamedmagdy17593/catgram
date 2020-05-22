import './PleaseLogin.less'

import React from 'react'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Paragraph } = Typography

function PleaseLogin() {
  return (
    <div className="PleaseLogin">
      <Paragraph>
        Please <Link to="/login">login</Link> to see this page
      </Paragraph>
    </div>
  )
}

export default PleaseLogin
