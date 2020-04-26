import { prisma } from '../../prisma'
import { sendLoginEmail } from '../../utils/email'
import jwt from 'jsonwebtoken'

const expiresIn = '1h'

export const catResolver = {
  Query: {
    async hello() {
      return 'hello'
    },
  },
  Mutation: {
    async signup(_, { input }) {
      let { name, email } = input

      let cat = await prisma.cat.findOne({ where: { email } })
      if (cat) {
        throw Error(`There is a cat with this email! Please login`)
      }

      await prisma.cat.create({ data: { name, email } })

      let token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn })
      await sendLoginEmail(email, token)

      return true
    },
    async login(_, { input }) {
      let { email } = input

      let cat = await prisma.cat.findOne({ where: { email } })
      if (!cat) {
        throw Error(`Email is invalid`)
      }

      let token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn })
      await sendLoginEmail(email, token)

      return true
    },
    async auth(_, { input }) {
      let { token } = input
      console.log({ token })

      let decoded
      try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
      } catch {
        throw Error(`invalid token try to login again`)
      }
      console.log({ decoded })

      let { email } = decoded
      let cat = await prisma.cat.findOne({ where: { email } })

      return cat
    },
  },
}
