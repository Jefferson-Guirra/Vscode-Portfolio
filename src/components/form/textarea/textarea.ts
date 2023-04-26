import styled from 'styled-components'
import { TextareaHTMLAttributes } from 'react'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error: boolean
}
export const textarea = styled.textarea(
  ({ error }: Props) => `
  border: 1px solid ${error ? '#f31' : 'transparent'};
  resize: none;
  background-color: #252526;
  color: #fff;
  padding: 0.7rem;
  width: 100%;
  margin: 0;
  transition: all 0.5s;
  margin-bottom: -0.25rem;
  &:focus {
    outline: none;
    border: 1.5px solid #f97b6f;
  }
`
)
