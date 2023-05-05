import styled from 'styled-components'

export const container = styled.section`
  background-color: #252526;
  color: #aaaaaa;
  min-width: 225px;
  @media (max-width: 1300px) {
    position: absolute;
    left: calc(0% + 50px);
    top: 0;
    height: 100%;
    z-index: 100;
  }
  .explorer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 0.8rem;

    h1 {
      font-weight: 400;
      font-size: 0.875rem;
    }
  }

  .title {
    display: flex;
    align-items: center;
    padding: 0.4rem 0.8rem;
    cursor: pointer;
    h1 {
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
`
