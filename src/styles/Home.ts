import styled from 'styled-components'

export const Container = styled.section`
  background-color: #222222;
  width: 100%;
  height: 100vh;
  color: #d1e7e7;
  display: flex;
  flex-direction: column;

  header {
    text-align: center;
    padding: 0.5rem;
  }

  .content-box {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      align-items: center;
      justify-content: center;
      span {
        display: block;
        padding: 0.9rem;
        background-color: #2b2b2b;
        border-radius: 50%;
      }

      input {
        background-color: #1b1b1b;
        color: #eee;
        border: none;
        border-radius: 5px;
        padding: 5px;
        height: 40px;
      }

      input:focus,
      input:hover {
        outline: #ef8661 !important;
        border: 2px solid #ef8661;
      }
    }
  }
`
