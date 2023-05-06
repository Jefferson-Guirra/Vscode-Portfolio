import styled from 'styled-components'
interface Props {
  vscodeIsOpen: boolean
}

export const container = styled.main`
  .content {
    color: #fff;
    padding-block: 5rem;
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
      padding-block: 2rem;
      gap: 1.3rem;
    }
  }
`
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
  left:calc(50% - 100px);
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
