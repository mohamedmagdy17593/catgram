import express from 'express'
import { GraphQLServer } from 'graphql-yoga'
import { typeDefs } from './graphql/typeDefs'
import { resolvers } from './graphql/resolvers'
import cookieParser from 'cookie-parser'

const port = process.env.PORT

async function init() {
  const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context({ request, response }) {
      return {
        req: request,
        res: response,
      }
    },
  })

  server.express.use(cookieParser(process.env.SECRET))
  server.express.use(express.static(__dirname + '/public'))

  await server.start({ port, endpoint: '/graphql' })
  console.log(`[server] is running on port ${port}`)
}

init()
