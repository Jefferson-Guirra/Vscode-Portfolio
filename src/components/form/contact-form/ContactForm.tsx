import * as C from './contact'
export const ContactForm = () => {
  return (
    <C.container>
      <h2>Send email :</h2>
      <form>
        <div className="header-form">
          <C.inputContainer className="input-heder">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </C.inputContainer>
          <C.inputContainer className="input-heder">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </C.inputContainer>
        </div>
        <C.inputContainer>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" />
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
