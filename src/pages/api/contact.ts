// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

type Data = any

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const sendEmail = async (req: NextApiRequest) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const smtpTransport = createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: 465,
      secure: true, //SSL/TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })
    const mailData = {
      from: process.env.SMTP_USER,
      to: process.env.MAIN_USER,
      subject: `Message From ${name}`,
      html: `<div>
                <h3> Email automático não responda</h3>
                <h5>De: ${name}</h5>
                <h5>Email: ${email}</h5>
                <p>Mensagem: ${message} </p>
                </div>`,
    }
    return smtpTransport.sendMail(mailData, (err) => {
      if (err) {
        return res.status(500).json({ ok: false, message: err?.message })
      } else {
        return res.status(200).json({ ok: true, message: 'success' })
      }
    })
  }
  try {
    await sendEmail(req)
  } catch {}
}
