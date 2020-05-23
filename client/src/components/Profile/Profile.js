import React from 'react'
import { useParams } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Loading from '../Loading/Loading'
import NotFound from '../NotFound/NotFound'
import ProfileHeader from './ProfileHeader/ProfileHeader'

const PROFILE = gql`
  query PROFILE($username: String!) {
    profile(username: $username) {
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

function Profile() {
  let { catUsername } = useParams()

  let { data, loading, error } = useQuery(PROFILE, {
    variables: { username: catUsername },
  })

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <NotFound message="Cat is Not found 😺" />
  }

  let profile = data?.profile

  return (
    <div className="Profile">
      <ProfileHeader cat={profile} />
    </div>
  )
}

export default Profile
