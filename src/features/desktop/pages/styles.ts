import styled from 'styled-components'

export const container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
  .modal {
    z-index: 50;
  }
`
