import styled from 'styled-components'

export const container = styled.main`
  background-color: #1e1e1e;
  display: flex;
  flex: 1;
  overflow: hidden;
  flex-direction: column;
  .content-box {
    position: relative;
    flex: 1;
    display: flex;
    overflow: hidden;
  }
  .content-box .nav {
    display: flex;
  }

  .content {
    position: relative;
    overflow: hidden;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`
