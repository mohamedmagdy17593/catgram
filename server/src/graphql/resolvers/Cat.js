import { prisma } from '../../prisma'

export const catResolver = {
  Query: {
    async hello() {
      return 'hello'
    },
  },
}
