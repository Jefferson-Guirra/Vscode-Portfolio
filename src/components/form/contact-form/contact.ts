import styled from 'styled-components'

export const container = styled.section`
  font-size: 1.2rem;
  padding-inline: 3rem;
  flex: 1;
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .header-form {
      display: flex;
      gap: 1rem;

      .input-heder {
        width: 50%;
      }
    }

    button {
      padding: 0.5rem 0.8rem;
      color: #1e1e1e;
      font-weight: bold;
      background-color: #f97b6f;
      border: 1px solid #f97b6f;
      width: fit-content;
      font-size: 1rem;
      transition: all 0.5s;
      &:hover {
        color: #fff;
        background-color: transparent;
      }
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`

export const formGroup = styled.div`
  label {
    display: block;
    margin-bottom: 0.3rem;
  }
`
