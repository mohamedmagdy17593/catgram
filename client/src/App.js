import './App.less'

import React from 'react'
import { Layout } from 'antd'
import Nav from './components/Nav/Nav'
import Login from './components/Login/Login'

const { Content } = Layout

function App() {
  return (
    <Layout className="App">
      <Nav />
      <Content>
        <Login />
      </Content>
    </Layout>
  )
}

export default App
