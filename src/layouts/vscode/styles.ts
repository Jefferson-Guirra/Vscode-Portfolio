import styled from 'styled-components'

export const container = styled.main`
  background-color: #1e1e1e;
  position: absolute;
  height: calc(100% - 80px);
  width: 100%;
  display: flex;
  flex-direction: column;
  .content-box {
    position: relative;
    display: flex;
    overflow: hidden;
    flex: 1;
  }
  .content-box .nav {
    display: flex;
  }

  .content {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
`
