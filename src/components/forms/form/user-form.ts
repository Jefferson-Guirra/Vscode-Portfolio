import styled from 'styled-components'

export const Container = styled.section`
  font-family: 'Ubuntu', sans-serif;
  background-color: #222222;
  width: 100%;
  height: calc(100vh - 24px);
  color: #d1e7e7;
  display: flex;
  flex-direction: column;

  .content-box {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 600px;
      justify-content: center;
      .user-icon {
        display: block;
        padding: 0.9rem;
        background-color: #2b2b2b;
        border-radius: 50%;
        margin-bottom: 3rem;
      }
      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        a {
          display: block;
          position: relative;
          z-index: 2;
          margin-left: 280px;
          margin-top: -1.5rem;
          font-size: 14px;
          color: #eeeeeeab;
          transition: all 0.7s;

          &:hover {
            color: #eee;
          }
        }

        button {
          font-family: 'Ubuntu', sans-serif;
          display: block;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          border: 1px solid var(--login-primary-color);
          background-color: var(--login-primary-color);
          margin: 1.6rem auto auto auto;
          transition: all 0.7s;

          &:hover {
            color: #eeeeeeab;
            background-color: #1b1b1b;
          }
        }
      }
    }
  }
`
