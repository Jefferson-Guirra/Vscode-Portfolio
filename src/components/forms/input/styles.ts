import styled from 'styled-components'
export const container = styled.div`
  position: relative;
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
    margin-bottom: 2px;
    margin-inline: auto;

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
  span {
    margin-inline: auto;
    position: absolute;
    bottom: calc(1.5rem + 19px);
    right: 7px;
  }
`
