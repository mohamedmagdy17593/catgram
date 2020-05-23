import gql from 'graphql-tag'

export const typeDefs = gql`
  type Cat {
    id: ID!
    name: String!
    email: String!
    username: String!
    avatar: String!
    cover: String
    bio: String
  }

  input SignupInput {
    email: String!
    name: String!
    username: String!
  }

  input LoginInput {
    email: String!
  }

  input AuthInput {
    token: String!
  }

  type Query {
    me: Cat
    profile(username: String!): Cat!
  }

  type Mutation {
    signup(input: SignupInput!): Boolean!
    login(input: LoginInput!): Boolean!
    logout: Boolean!
    auth(input: AuthInput!): Cat!
  }
`
