import { useState } from 'react'

interface Props {
  onChange: ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => void
  validate: () => boolean
  onBlur: () => boolean
  value: string
  error: string
  clearState: () => void
}

const useTextarea = (): Props => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const onChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(target.value)
  }
  const validate = (text: string): boolean => {
    if (text === '') {
      setError('campo obrigatorio')
      return false
    } else return true
  }

  return {
    value,
    onChange,
    error,
    onBlur: () => validate(value),
    validate: () => validate(value),
    clearState: () => setValue(''),
  }
}

export default useTextarea
