import React from 'react'
import createField from '@/utils/create-field'
import useForm from '@/hooks/useForm'
import { MakeGlobalProps } from '../@types/make-props'
import { Form } from '../../../components'

const makeGlobalProps: MakeGlobalProps = (inputs, handleSubmit) => {
  const linkProps = { text: 'criar conta', router: '/user/create' }
  const button = 'entrar'
  return {
    linkProps,
    button,
    inputs,
    handleSubmit,
  }
}
const Signup = () => {
  const name = useForm(createField('text', 'nome'))
  const password = useForm(createField('password', 'senha'))
  const email = useForm(createField('email', 'email'))
  const inputs = [name, email, password]

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password.validate() && email.validate()) {
      console.log('campos corretos')
    }
  }
  const props = makeGlobalProps(inputs, handleSubmit)
  return <Form {...props} />
}

export default Signup
