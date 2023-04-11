import styled from 'styled-components'

export const container = styled.main`
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 23px);
  overflow: hidden;
  .content-box {
    display: flex;
  }

  .content {
    flex: 1;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
`
