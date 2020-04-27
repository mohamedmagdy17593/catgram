import './App.less'

import React from 'react'
import { Layout } from 'antd'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Nav from './components/Nav/Nav'
import Login from './components/Login/Login'
import { CatProvider } from './context/Cat'

const { Content } = Layout

const client = new ApolloClient({ uri: '/graphql' })

function App() {
  return (
    <ApolloProvider client={client}>
      <CatProvider>
        <Layout className="App">
          <Nav />
          <Content>
            <Login />
          </Content>
        </Layout>
      </CatProvider>
    </ApolloProvider>
  )
}

export default App
