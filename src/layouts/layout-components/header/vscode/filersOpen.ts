import styled from 'styled-components'

interface Props {
  isOpen: boolean
}

export const container = styled.section`
  display: flex;
  flex-direction: column;
  color: #aaaaaa;
  background-color: #252526;

  .filers {
    display: flex;
  }
`

export const file = styled.article(
  ({ isOpen }: Props) => `
display: flex;
align-items: center;
justify-content: space-between;
height:43.20px;
width: 130px;
background-color:  ${isOpen ? '#1e1e1e' : '#2d2d2d'} ;
border: 1px solid #252526;
font-size: 0.875rem;
padding: 0.6rem;
&:hover {
  button {
    transition: all 0.5s;
    opacity: initial
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

  .pathname {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`
