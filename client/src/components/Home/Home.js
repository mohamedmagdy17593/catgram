import React from 'react'
import { Typography } from 'antd'
import { useCat } from '../../context/Cat'

const { Title } = Typography

function Home() {
  let { cat } = useCat()

  return (
    <div className="Home container">
      <Title style={{ textAlign: 'center' }}>Welcome: {cat.name}</Title>
    </div>
  )
}

export default Home
