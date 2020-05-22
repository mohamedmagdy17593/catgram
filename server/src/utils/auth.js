import { prisma } from '../prisma'

export async function getAuthCat(req) {
  let id = +req.signedCookies.catId

  let cat = await prisma.cat.findOne({ where: { id } })

  return cat
}
