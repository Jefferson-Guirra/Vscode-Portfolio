import styled from 'styled-components'
interface Props {
  vscodeIsOpen: boolean
}

export const nav = styled.nav(
  (props: Props) => `
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
    position: relative;
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

  a::after {
    content: '';
    position: absolute;
    display: ${props.vscodeIsOpen ? 'block' : 'none'};
    bottom: -2px;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #007acc;
  }
`
)
