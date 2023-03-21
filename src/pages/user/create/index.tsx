import React from 'react'
import useForm from '@/hooks/useForm'
import { UserPage } from '../../../components'

interface FieldType {
  type: string
  inputProps: {
    name: string
    placeholder: string
    type: string
  }
}
const createField = (type: string, placeholder: string): FieldType => {
  return {
    type,
    inputProps: {
      name: type,
      placeholder: placeholder,
      type: type,
    },
  }
}

const CreateUser = () => {
  const password = useForm(createField('password', 'senha'))
  const email = useForm(createField('email', 'email'))
  const name = useForm(createField('name', 'usuário'))
  const inputs = [name, email, password]

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password.validate() && email.validate()) {
      console.log('campos corretos')
    }
  }
  return (
    <UserPage
      handleSubmit={handleSubmit}
      inputs={inputs}
      button="criar"
      linkProps={{ text: 'entrar', router: '/' }}
    />
  )
}

export default CreateUser
