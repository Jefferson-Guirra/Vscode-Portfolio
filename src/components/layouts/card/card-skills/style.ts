import styled from 'styled-components'
interface CardProps {
  flip: boolean
}

interface ContainerProps {
  width: number
  height: number
}
export const cardContainer = styled.section(
  ({ width, height }: ContainerProps) => `
  transform: perspective 1000px;
  width: ${width}px;
  height: ${height}px;
  position: relative;
`
)
export const card = styled.article(
  ({ flip }: CardProps) => `
  display: flex; 
  gap: 3rem;
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s , border .5s;
  transform-style: preserve-3d;
  background-color: #252526;
  border-radius: 5px;
  border: 1px solid ${flip ? '#f97b6f' : '#2d2d2d'};
  transform: ${flip ? 'rotateY(180deg)' : 'initial'};
  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    padding: 1rem;
  }

  .card-front {

    h2 {
        text-align: center;
        cursor: pointer;
    }

    ul {
        margin-top: 0.3rem;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;

        li {
            width: fit-content;
            padding: 0.3rem 0.5rem;
            cursor: pointer;
        }
    }
  }

  .card-back {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transform: rotateY(180deg);
    }
`
)
