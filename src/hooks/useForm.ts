import React from 'react'
import { ReturnUseForm } from './use-form-protocols'

type RegexProps = {
  [key: string]: {
    regex: RegExp
    message: string
    number?: {
      regex: RegExp
      message: string
    }
  }
}

const types: RegexProps = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido.',
    number: {
      regex: /^\d+$/,
      message: 'Utilize apenas números.',
    },
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'A senha deve conter 1 letra maíuscula, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres.',
  },
}

interface Props {
  type: string | boolean
  inputProps: {
    name: string
    type: string
    placeholder: string
  }
}

const useForm = ({ type, inputProps }: Props): ReturnUseForm => {
  const [value, setValue] = React.useState('')
  const [erro, setError] = React.useState<string>('')
  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setValue(target.value)
    if (erro) validate(target.value)
  }

  const validate = (value: string): boolean => {
    if (type === false) return true

    if (value.length === 0) {
      setError('campo obrigatório.')
      return false
    } else if (
      typeof type !== 'boolean' &&
      types[type] &&
      !types[type].regex.test(value)
    ) {
      setError(types[type].message)
      return false
    } else {
      setError('')
      return true
    }
  }
  return {
    value,
    setValue,
    onChange,
    erro,
    validate: () => validate(value),
    onBlur: () => validate(value),
    name: inputProps.name,
    placeholder: inputProps.placeholder,
    type: inputProps.type,
  }
}

export default useForm
