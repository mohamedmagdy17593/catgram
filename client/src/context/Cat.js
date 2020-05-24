import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Loading from '../components/Loading/Loading'

const catContext = React.createContext()

const ME = gql`
  query ME {
    me {
      id
      name
      email
      username
      avatar
      cover
      bio
    }
  }
`

export function CatProvider({ children }) {
  let [isCatRequested, setIsCatRequested] = useState(false)

  let { data, refetch: refetchCat } = useQuery(ME, {
    onCompleted() {
      setIsCatRequested(true)
    },
    onError() {
      setIsCatRequested(true)
    },
  })

  if (!isCatRequested) {
    return <Loading />
  }

  let cat = data.me

  console.log({ cat })

  return (
    <catContext.Provider value={{ cat, refetchCat }}>
      {children}
    </catContext.Provider>
  )
}

export function useCat() {
  return React.useContext(catContext)
}
