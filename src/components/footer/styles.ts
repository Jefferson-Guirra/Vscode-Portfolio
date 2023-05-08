import styled from 'styled-components'

interface Props {
  vscodeIsOpen: boolean
}

export const nav = styled.nav(
  (props: Props) => `
    width: 100%;
    background-color: #1e1e1e;
    border-top: 2px solid #2d2d2d;
    position:fixed;
    bottom: 0;
    z-index: 52;
  
  
    a {
      position: relative;
      display: block;
      padding: 10px;
      width: fit-content;
      background-color: ${props.vscodeIsOpen ? '#2d2d2d' : 'transparent'};
      cursor: pointer;
      transition: 0.5s;
    }
  
    a:hover {
      background-color: #333333;
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
