import styled from 'styled-components'
interface Props {
  vscodeIsOpen: boolean
}

export const container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .content {
    color: #fff;
    padding-top: 5rem;
    max-width: 600px;
    gap: 2rem;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .project {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: currentColor;
      width: 100%;
    }

    .project img {
      pointer-events: none;
    }
  }

  @media (max-width: 600px) {
    .content {
      justify-items: center;
      grid-template-columns: 1fr 1fr;
      padding-top: 2rem;
      gap: 1.3rem;
    }
  }
`
export const nav = styled.nav(
  (props: Props) => `
  width: 100%;
  background-color: #1e1e1e;
  border-top: 2px solid #2d2d2d;
  position: sticky;
  z-index:1000;
  bottom: 0;


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
