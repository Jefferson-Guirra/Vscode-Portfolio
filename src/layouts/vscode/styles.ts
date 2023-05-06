import styled from 'styled-components'

export const container = styled.main`
  background-color: #1e1e1e;
  display: flex;
  flex: 1;
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
    position: relative;
    flex: 1;
    display: flex;
    overflow: hidden;
    flex-direction: column;
  }
`
