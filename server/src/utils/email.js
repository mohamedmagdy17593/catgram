import nodemailer from 'nodemailer'
import sgTransport from 'nodemailer-sendgrid-transport'

let options = {
  auth: {
    api_user: process.env.SENDGRID_USERNAME,
    api_key: process.env.SENDGRID_PASSWORD,
  },
}

let client = nodemailer.createTransport(sgTransport(options))

export function sendMail(email) {
  return new Promise((resolve, reject) => {
    return client.sendMail(email, (err, info) => {
      if (err) {
        resolve(err)
      } else {
        reject(err)
      }
    })
  })
}

export function sendLoginEmail(to, token) {
  let loginLink = `${process.env.HOST}/login?token=${token}`
  console.log('loginLink: ', loginLink)
  let email = {
    from: 'no-reply@catgram.com',
    to,
    subject: 'Login to catgram 😸',
    html: `You can login via <strong>${loginLink}</strong>`,
  }
  return sendMail(email).then(console.log).catch(console.log)
}
