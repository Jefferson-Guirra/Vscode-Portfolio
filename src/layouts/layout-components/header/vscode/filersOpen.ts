import styled from 'styled-components'

interface Props {
  isOpen: boolean
}

export const container = styled.section`
  display: flex;
  background-color: #252526;
`

export const file = styled.article(
  ({ isOpen }: Props) => `
display: flex;
align-items: center;
justify-content: space-between;
width: 150px;
background-color:  ${isOpen ? '#1e1e1e' : '#2d2d2d'} ;
border: 1px solid #252526;
color: #aaaaaa;
font-size: 0.8rem;
padding: 0.6rem;

    span {
        cursor: pointer;
        border-radius: 5px;
        &:hover {
            background-color: #252526;
        }
    }
`
)
