import React from 'react'
import * as C from './styles'
import Error from '../../helpers/Error'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

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
const Input = ({
  placeholder,
  type,
  name,
  onChange,
  value,
  erro,
  onBlur,
}: Props) => {
  const [inputType, setInputType] = React.useState(type)

  const handleTypeInput = () => {
    inputType === type ? setInputType('text') : setInputType(name)
  }
  return (
    <C.container>
      <input
        placeholder={placeholder}
        className="input"
        id={name}
        type={inputType}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      <Error error={erro} />
      {name === 'password' && (
        <span onClick={handleTypeInput}>
          {' '}
          {inputType === 'password' ? (
            <AiOutlineEyeInvisible size={20} />
          ) : (
            <AiOutlineEye size={20} />
          )}{' '}
        </span>
      )}
    </C.container>
  )
}

export default Input
