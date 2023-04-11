import styled from 'styled-components'
interface Props {
  iconIsOpen: string
}

export const navbar = styled.nav(
  ({ iconIsOpen }: Props) => `
 width: fit-content;
 background-color: #333333;
  .icons {
    height: 100%;
  }
 .icons .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px;
    height: 50px;
    cursor: pointer;

    svg {
        transition: all .5s;
    }

    &:hover svg{
        fill: #eee;
    }

    &::before {
        content: '';
        display:block;
        opacity: 0;
        width: 3px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #eee;
        transition: all .3s;
    }
 }
 
 .icons .icon:nth-child(1)::before {
    opacity:${iconIsOpen === 'files' ? 1 : 0};
 }
 .icons .icon:nth-child(2)::before {
    opacity:${iconIsOpen === 'config' ? 1 : 0};
    
 }.icons .icon:nth-child(3)::before {
    opacity:${iconIsOpen === 'account' ? 1 : 0};
 }
`
)
