import styled from 'styled-components'

export const container = styled.section`
  font-size: 1.2rem;
  padding-inline: 3rem;
  flex: 1;
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
      background-color: #e64d33;
      border: 1px solid #e64d33;
      width: fit-content;
      transition: all 0.5s;
      &:hover {
        color: #fff;
        background-color: transparent;
      }
    }
  }
`

export const inputContainer = styled.div`
  label {
    display: block;
    margin-bottom: 0.4rem;
  }
  textarea {
    border: 1px solid transparent;
    resize: none;
    background-color: #252526;
    color: #fff;
    padding: 0.7rem;
    width: 100%;
    transition: all 0.5s;

    &:focus {
      outline: none;
      border: 1px solid #e64d33;
    }
  }
`
