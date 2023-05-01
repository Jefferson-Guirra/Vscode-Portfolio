import styled from 'styled-components'

interface CardProps {
  colorLeft: string
  colorRight: string
}

export const card = styled.article(
  ({ colorLeft, colorRight }: CardProps) => `
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    transition: all 0.7s;
    background-color: #252526;
    border: 2px solid transparent;
    &:hover{
        border: 2px solid #2d2d2d;
    }

.background-icon {
    position: relative;
    display: flex;
    width: 100%;
    height: 200px;
    .background-left,
    .background-right {
        width: 50%;
        height: 100%;
    }

    .background-left {
        background-color: ${colorLeft};
    }

    .background-right {
        background-color: ${colorRight};
    }

    .icon-container {
        border-radius: 50%;
        border: 9px solid #fff;
        padding: 1.3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0)
    }
}

`
)

export const contentCard = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    font-size: 0.9rem;
  }

  .techs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    p {
      display: inline;
      width: fit-content;
      padding: 0.2rem 0.5rem;
      border-radius: 25px;
    }
  }

  .links {
    display: flex;
    gap: 0.7rem;
    a {
      text-decoration: none;
      border-bottom: 1px solid #f97b6f;
      color: inherit;
    }
  }
`
