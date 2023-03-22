import styled from 'styled-components'

export const nav = styled.nav`
  border: 1px solid #eee;
  width: 100%;
  max-width: 200px;
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 2rem;
  position: absolute;
  bottom: 0;
  align-self: center;

  a {
    display: block;
    width: fit-content;
    padding: 5px;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.5s;
  }

  a:hover {
    background-color: var(--login-secondary-color);
  }
`
