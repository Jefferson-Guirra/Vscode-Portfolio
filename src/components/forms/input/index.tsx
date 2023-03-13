import React from 'react'
import * as C from './styles'
import Error from '../../helpers/Error'

interface Props {
  placeHolder: string
  type: string
  name: string
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  erro: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  onBlur: () => void
}
const Input = ({
  placeHolder,
  type,
  name,
  onChange,
  value,
  erro,
  onBlur,
}: Props) => {
  return (
    <C.container>
      <input
        placeholder={placeHolder}
        className="input"
        id={name}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />

      <Error error={erro} />
    </C.container>
  )
}

export default Input
