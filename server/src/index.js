import { GraphQLServer } from 'graphql-yoga'
import { typeDefs } from './graphql/typeDefs'
import { resolvers } from './graphql/resolvers'

const port = process.env.PORT

async function init() {
  const server = new GraphQLServer({ typeDefs, resolvers })

  await server.start({ port })
  console.log(`[server] is running on port ${port}`)
}

init()
