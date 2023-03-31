import styled from 'styled-components'

export const folderContainer = styled.div`
  color: #aaaaaa;
  font-size: 0.85rem;
  padding-left: 0.8rem;

  .folder {
    cursor: pointer;
    display: flex;
    gap: 0.3rem;
    align-items: center;
    padding: 0.2rem;
    &:hover {
      background-color: #37373d;
    }
  }
`
export const file = styled.div`
  font-size: 0.85rem;
  color: #aaaaaa;
  cursor: pointer;
  padding: 0.2rem;
  display: flex;

  &:hover {
    background-color: #37373d;
  }

  img {
    margin-inline: 2.4rem 0.5rem;
  }
`
