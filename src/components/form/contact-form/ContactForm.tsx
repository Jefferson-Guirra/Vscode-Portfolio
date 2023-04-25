import useForm from '@/hooks/useForm'
import * as C from './contact'
import { Input, Textarea } from '@/components'
import useTextarea from '@/hooks/useTextarea'
export const ContactForm = () => {
  const name = useForm('name')
  const email = useForm('email')
  const subject = useForm('subject')
  const textArea = useTextarea()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validate =
      name.validate() &&
      email.validate() &&
      subject.validate() &&
      textArea.validate()

    if (validate === true) {
      name.clearState()
      email.clearState()
      subject.clearState()
      textArea.clearState()
      alert('Email enviado com sucesso.')
    } else {
      alert('por favor, preencha os campos obrigatórios.')
    }
  }
  return (
    <C.container>
      <h2>Send email :</h2>
      <form onSubmit={handleSubmit}>
        <div className="header-form">
          <C.inputContainer className="input-heder">
            <label htmlFor="name">Name</label>
            <Input {...name} placeholder="" type="text" name="name" />
          </C.inputContainer>
          <C.inputContainer className="input-heder">
            <label htmlFor="email">Email</label>
            <Input {...email} placeholder="" type="text" name="email" />
          </C.inputContainer>
        </div>
        <C.inputContainer>
          <label htmlFor="subject">Subject</label>
          <Input {...subject} placeholder="" type="text" name="subject" />
        </C.inputContainer>
        <C.inputContainer>
          <label htmlFor="message">Message</label>
          <Textarea {...textArea} cols={30} rows={10} id="message" />
        </C.inputContainer>
        <button type="submit">Submit</button>
      </form>
    </C.container>
  )
}
