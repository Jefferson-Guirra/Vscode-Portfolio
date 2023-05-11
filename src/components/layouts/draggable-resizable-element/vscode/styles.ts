import styled from 'styled-components'

export const container = styled.main`
  background-color: #1e1e1e;
  border: 2px solid #2d2d2d;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  overflow: auto;
  flex-direction: column;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #464647;
    width: 3px;
    border: 3px solid #464647;
  }

  .content-box {
    flex: 1;
    display: flex;

    .content-box .nav {
      display: flex;
    }
    .contents {
      display: flex;
      flex: 1;
      flex-direction: column;

      .vscode-container {
        height: calc(100% - 139.6px);
      }
    }
  }
`
