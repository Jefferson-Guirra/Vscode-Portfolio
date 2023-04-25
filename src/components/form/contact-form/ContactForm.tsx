import useForm from '@/hooks/useForm'
import * as C from './contact'
import { Input } from '@/components/input/Input'
export const ContactForm = () => {
  const name = useForm('name')
  const email = useForm('email')
  const subject = useForm('subject')
  return (
    <C.container>
      <h2>Send email :</h2>
      <form>
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
          <textarea name="message" id="message" cols={30} rows={10}></textarea>
        </C.inputContainer>
        <button type="submit">Submit</button>
      </form>
    </C.container>
  )
}
