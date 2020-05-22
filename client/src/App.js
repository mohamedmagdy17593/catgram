import './App.less'

import React, { useState } from 'react'
import { Layout } from 'antd'
import Nav from './components/Nav/Nav'
import Routes from './components/Routes/Routes'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Loading from './components/Loading/Loading'
import { useCat } from './context/Cat'

const { Content } = Layout

const ME = gql`
  query ME {
    me {
      id
      name
      email
      bio
    }
  }
`

function App() {
  let [isCatRequested, setIsCatRequested] = useState(false)
  let { setCat } = useCat()

  useQuery(ME, {
    onCompleted(data) {
      if (data.me) {
        setCat(data.me)
      }

      setIsCatRequested(true)
    },
    onError() {
      setIsCatRequested(true)
    },
  })

  if (!isCatRequested) {
    return <Loading tip="Loading" />
  }

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
