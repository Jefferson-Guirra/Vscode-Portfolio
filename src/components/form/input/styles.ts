import styled from 'styled-components'
export const input = styled.input`
  padding: 0.7rem;
  background-color: #252526;
  width: 100%;
  color: #fff;
  border: 1px solid transparent;
  width: 100%;
  transition: all 0.5s;
  &:focus {
    outline: none;
    border: 1px solid #e64d33;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #252526 inset !important;
    border: 1px solid #252526;
    -webkit-text-fill-color: #fff;
  }
  &:-webkit-autofill:focus {
    border: 1px solid #e64d33;
  }
`
