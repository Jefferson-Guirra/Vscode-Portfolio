import React from 'react'
import * as C from './styles'
import { Error } from '@/components'

interface Props {
  placeholder: string
  type: string
  name: string
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  erro: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  onBlur: () => void
}
export const Input = ({
  placeholder,
  type,
  name,
  onChange,
  value,
  erro,
  onBlur,
}: Props) => {
  return (
    <>
      <C.input
        placeholder={placeholder}
        className="input"
        id={name}
        error={erro !== ''}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      <Error error={erro} />
    </>
  )
}
