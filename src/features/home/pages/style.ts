import styled from 'styled-components'

export const contentBox = styled.article`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 100%;
    max-width: 300px;
    .item {
      display: flex;
      align-items: center;
      border: 1px solid #eeeeee18;
      gap: 1rem;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 12px;
      transition: all 0.5s;

      &:hover {
        background-color: #2b2b2b9a;
      }

      span {
        display: block;
        padding: 0.9rem;
        background-color: #2b2b2b;
        border-radius: 50%;
      }

      p {
        font-size: 1.4rem;
      }
    }
  }
`
