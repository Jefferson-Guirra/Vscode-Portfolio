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
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, //SSL/TLS
      auth: {
        user: 'sendingservicejefferson@gmail.com',
        pass: 'ghtucjuqvmcpatz',
      },
    })
    const mailData = {
      from: 'sendingservicejefferson@gmail.com',
      to: 'jeffersonguirra8@gmail.com',
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
