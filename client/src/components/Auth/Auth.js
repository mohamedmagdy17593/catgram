import React, { useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { showError } from '../../utils/errors'
import Loading from '../Loading/Loading'
import { useCat } from '../../context/Cat'

const AUTH_CAT = gql`
  mutation AUTH_CAT($input: AuthInput!) {
    auth(input: $input) {
      id
    }
  }
`

function Auth({ token }) {
  let history = useHistory()

  let { refetchCat } = useCat()
  let [auth, { loading }] = useMutation(AUTH_CAT, {
    variables: {
      input: {
        token,
      },
    },
    onError(error) {
      showError(error)
      history.replace('/login')
    },
    async onCompleted() {
      await refetchCat()
      history.push('/')
    },
  })

  useEffect(() => {
    auth()
  }, [auth])

  if (loading) {
    return <Loading />
  }

  return null
}

export default Auth
