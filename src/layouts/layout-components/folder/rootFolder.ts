import styled from 'styled-components'

export const container = styled.section`
  background-color: #252526;
  color: #aaaaaa;
  min-width: 225px;

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
