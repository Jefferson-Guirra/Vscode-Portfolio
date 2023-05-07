import styled from 'styled-components'

export const container = styled.main`
  background-color: #1e1e1e;
  height: calc(100vh - 23px);
  display: flex;
  flex-direction: column;
  .content-box {
    position: relative;
    display: flex;
    flex: 1;
  }
  .content-box .nav {
    display: flex;
  }

  .content {
    flex: 1;
    display: flex;
    overflow: hidden;
    flex-direction: column;
  }
`
