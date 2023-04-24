import styled from 'styled-components'

interface Props {
  isOpen: boolean
}

export const container = styled.section`
  display: flex;
  flex-direction: column;
  color: #aaaaaa;
  background-color: #252526;
  box-shadow: 0px 3px 5px 0px rgba(23, 23, 23, 0.75);
  -webkit-box-shadow: 0px 3px 5px 0px rgba(23, 23, 23, 0.75);
  -moz-box-shadow: 0px 3px 5px 0px rgba(23, 23, 23, 0.75);

  .filers {
    display: flex;
  }
`

export const file = styled.article(
  ({ isOpen }: Props) => `
display: flex;
align-items: center;
cursor:pointer;
justify-content: space-between;
width: 140px;
gap: 0.3rem;
background-color:  ${isOpen ? '#1e1e1e' : '#2d2d2d'} ;

font-size: 0.875rem;
padding: 0.6rem;
&:hover {
  button {
    transition: all 0.5s;
    opacity: initial
  }
}
  .content-file{
    flex:1;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    .file-name p{
      display: block;
      width: 75px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
    button {
      display:flex;
      align-items:center;
      justify-content:center;
      background-color: transparent;
      opacity: ${isOpen ? 'initial' : '0'};
        cursor: pointer;
        border-radius: 5px;
        &:hover {
            background-color: #252526;
        }
    }
`
)

export const path = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem 1rem;
  font-size: 0.8rem;
  background-color: #1e1e1e;

  .pathname {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`
