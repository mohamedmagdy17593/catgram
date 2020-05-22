import './index.less'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter } from 'react-router-dom'
import { CatProvider } from './context/Cat'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: '/graphql',
})
const client = new ApolloClient({ cache, link })

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <CatProvider>
        <App />
      </CatProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
)
