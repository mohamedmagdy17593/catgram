import { prisma } from '../../prisma'
import { sendLoginEmail } from '../../utils/email'
import jwt from 'jsonwebtoken'
import { getAuthCat } from '../../utils/auth'

// TODO change
const expiresIn = '8h'

const cookieOptions = {
  httpOnly: true,
  sameSite: true,
  signed: true,
}

export const catResolver = {
  Query: {
    async me(_, __, { req }) {
      let cat = await getAuthCat(req)

      if (!cat) {
        return null
      }

      return cat
    },
  },
  Mutation: {
    async signup(_, { input }) {
      let { name, email } = input

      let cat = await prisma.cat.findOne({ where: { email } })
      if (cat) {
        throw Error(`There is a cat with this email! Please login instead`)
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
    logout(_, __, { res }) {
      res.clearCookie('catId', cookieOptions)
      return true
    },
    async auth(_, { input }, { res }) {
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

      if (!cat) {
        throw Error(`the Email was invalid!`)
      }

      // login via cookie
      res.cookie('catId', cat.id, {
        ...cookieOptions,
        maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
      })

      return cat
    },
  },
}
