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
      background-color: rgba(128, 128, 128, 0.144);
      border: 1px solid #80808025;
      color: currentColor;
      padding: 0.7rem;
      border-radius: 7px;
      margin: 0 auto;
      width: fit-content;
    }
    .project:hover {
      animation: show-pop 1s infinite backwards;
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

  @keyframes show-pop {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.1, 1.1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`
