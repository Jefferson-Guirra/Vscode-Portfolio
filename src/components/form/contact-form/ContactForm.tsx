import useForm from '@/hooks/useForm'
import * as C from './contact'
import { Input, Textarea } from '@/components'
import { useState } from 'react'

interface Props {
  name: string
  email: string
  message: string
}

const postMessage = async (data: Props) => {
  const promise = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const response = await promise.json()
  if (!response.ok) {
    throw new Error(response.message)
  }
  return response
}

export const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const name = useForm('name')
  const email = useForm('email')
  const subject = useForm('subject')
  const message = useForm('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      setLoading(true)
      const validate =
        name.validate() &&
        email.validate() &&
        subject.validate() &&
        message.validate()

      if (validate === true) {
        await postMessage({
          email: email.value,
          name: name.value,
          message: message.value,
        })
        name.clearState()
        email.clearState()
        subject.clearState()
        message.clearState()
        alert('Email enviado com sucesso.')
      } else {
        alert('por favor, preencha os campos obrigatórios.')
      }
    } catch (err) {
      console.error(err)
      alert('500: internal server Error')
    } finally {
      setLoading(false)
    }
  }
  console.log(loading)
  return (
    <C.container>
      <h2>Send email :</h2>
      <form onSubmit={handleSubmit}>
        <div className="header-form">
          <C.formGroup className="input-heder">
            <label htmlFor="name">Name</label>
            <Input {...name} placeholder="" type="text" name="name" />
          </C.formGroup>
          <C.formGroup className="input-heder">
            <label htmlFor="email">Email</label>
            <Input {...email} placeholder="" type="text" name="email" />
          </C.formGroup>
        </div>
        <C.formGroup>
          <label htmlFor="subject">Subject</label>
          <Input {...subject} placeholder="" type="text" name="subject" />
        </C.formGroup>
        <C.formGroup>
          <label htmlFor="message">Message</label>
          <Textarea {...message} cols={30} rows={10} id="message" />
        </C.formGroup>
        {loading ? (
          <button disabled type="submit">
            Submit
          </button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
    </C.container>
  )
}
