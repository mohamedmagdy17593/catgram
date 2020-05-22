import './NotFound.less'

import React from 'react'
import { Typography } from 'antd'

const { Paragraph } = Typography

function NotFound() {
  return (
    <div className="NotFound">
      <Paragraph>Not Found {'😐'}</Paragraph>
    </div>
  )
}

export default NotFound
