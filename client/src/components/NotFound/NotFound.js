import './NotFound.less'

import React from 'react'
import { Typography } from 'antd'

const { Paragraph } = Typography

function NotFound({ message = `Not Found 😐` }) {
  return (
    <div className="NotFound">
      <Paragraph>{message}</Paragraph>
    </div>
  )
}

export default NotFound
