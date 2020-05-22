import './Loading.less'

import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

function Loading(props) {
  return (
    <div className="Loading">
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin {...props} />}
      />
    </div>
  )
}

export default Loading
