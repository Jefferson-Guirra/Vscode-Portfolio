import { dataTechs } from '../../constants/data-skills-page'
import * as C from './style'
import { useState } from 'react'
interface Props {
  title: string
  width: number
  height: number
  techs?: string[]
}
export const SkillCard = ({ title, techs, width, height }: Props) => {
  const [text, setText] = useState('')
  const handleFrontClick = (value: string) => {
    setText(value)
  }
  const handleBackCLick = () => {
    setText('')
  }

  return (
    <C.cardContainer width={width} height={height} className="card">
      <C.card flip={text !== ''}>
        <div className="card-front">
          <h2 onClick={() => handleFrontClick(title)}>{title} </h2>
          {techs && (
            <ul>
              {techs.map((tech) => (
                <li key={tech} onClick={() => handleFrontClick(tech)}>
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="card-back" onClick={handleBackCLick}>
          {' '}
          <p> {dataTechs[text]} </p>{' '}
        </div>
      </C.card>
    </C.cardContainer>
  )
}
