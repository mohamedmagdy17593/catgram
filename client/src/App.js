import './App.less'

import React from 'react'
import { Layout } from 'antd'
import Nav from './components/Nav/Nav'
import Routes from './components/Routes/Routes'

const { Content } = Layout

function App() {
  return (
    <Layout className="App">
      <Nav />
      <Content>
        <Routes />
      </Content>
    </Layout>
  )
}

export default App
