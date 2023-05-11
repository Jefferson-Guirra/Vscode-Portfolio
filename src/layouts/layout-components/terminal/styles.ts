import styled from 'styled-components'
interface Props {
  terminal: boolean
}
export const Terminal = styled.section(
  ({ terminal }: Props) => `
  background-color: #1e1e1e;
  border-top: 2px solid #414141;
  color: #7b7b7b;
  padding: 0.7rem;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-inline: 1rem;

.actions {
  display: flex;
  justify-content: space-between;
.titles {
  display: flex;
  gap: 1rem;

  h5:nth-child(4) {
   position: relative;
   color: #eee;
  }
  h5:nth-child(4)::after {
    content: '';
    position: absolute;
    height: 2px;
    width: calc(100% + 3px);
    background-color: #414141;
    left: 0;
    top: calc(100% + 2px);
  }
}
.icons {
  display: flex;
  align-items: center;
  gap: 1rem;

  p:nth-child(1) {
   font-size: 0.8rem;
   color: #eee;
   gap: 0.2rem;
   display: flex;
   align-items: center;
  }
  p:nth-child(2) {
    font-size: 0.8rem;
    color: #eee;
    gap: 0.2rem;
    display: flex;
    align-items: center;
  }
  .arrow {
    transition: 0.5s;
    transform: ${terminal ? 'rotate(180deg)' : 'initial'}
  }
}

}

.link {
  display: ${terminal ? 'flex' : 'none'};
  gap: 0.5rem;

  p:nth-child(1) {
    color: #00d300;
  }
  a {
    color: #eee;
    position: relative;
    display: block;
  }
  a::after {
   content: '';
   display: block;
   position: absolute;
   width: 0;
   height: 2px;
   background-color: #eee;
  }

  a:hover::after {
    animation: show-width 0.7s forwards;
  }
}







@keyframes show-width {
  to {
    opacity: initial;
    width: calc(100% + 3px);
  }
}

@media (max-width: 850px) {
  .actions .titles h5:not(:nth-child(4)) {
    display: none;
  }
}

@media (max-width: 750px) {
   .link p:nth-child(3) {
    display: none;
  }
}

@media (max-width: 520px) {
  .actions .icons p:nth-child(1) {
    display: none;
  }
}

@media (max-width: 450px) {
  .link {
    font-size: 1rem;
    flex-direction: column;
  }
.link p:nth-child(2) {
    display: none;
  }
}

`
)
