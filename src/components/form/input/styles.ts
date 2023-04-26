import styled from 'styled-components'
import { InputHTMLAttributes } from 'react'
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean
}
export const input = styled.input(
  ({ error }: Props) => `
  padding: 0.7rem;
  background-color: #252526;
  width: 100%;
  color: #fff;
  border: 1.5px solid ${error ? '#f31' : 'transparent'};
  width: 100%;
  transition: all 0.5s;
  &:focus {
    outline: none;
    border: 1.5px solid #f97b6f;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #252526 inset !important;
    border: 1.5px solid #252526;
    -webkit-text-fill-color: #fff;
  }
  &:-webkit-autofill:focus {
    border: 1.5px solid #f97b6f;
    -webkit-text-fill-color: #fff;
  }
`
)
