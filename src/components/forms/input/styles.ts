import styled from 'styled-components'
export const container = styled.div`
  input {
    display: block;
    font-family: 'Ubuntu', sans-serif;
    background-color: #1b1b1b;
    border: 1px solid #1b1b1b;
    color: #eee;
    border: none;
    border-radius: 5px;
    padding: 5px;
    height: 40px;
    max-width: 300px;
    margin-bottom: 2px;

    &:focus,
    &:hover {
      border: 1px solid var(--login-primary-color);
    }

    &:nth-child(2) {
      margin-top: 1.5rem;
    }
  }
  div {
    margin-bottom: 1rem;
  }
`
