import { SkillCardProps } from '../@types/skill-card'
import { dataTechs } from '../../../constants/data-skills-page'
import * as C from './style'
import { useState } from 'react'

export const SkillCard = ({
  title,
  techs,
  width,
  height,
  Icon,
  hoverIconColor,
}: SkillCardProps) => {
  const [text, setText] = useState('')
  const handleFrontClick = (value: string) => {
    setText(value)
  }
  const handleBackCLick = () => {
    setText('')
  }

  return (
    <C.cardContainer width={width} height={height} className="card">
      <C.card flip={text !== ''} hoverIconColor={hoverIconColor}>
        <div className="card-front">
          <div className="content">
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
            <Icon size={40} color="#1e1e1e" />
          </div>
        </div>
        <div className="card-back" onClick={handleBackCLick}>
          {' '}
          <p> {dataTechs[text]} </p>{' '}
        </div>
      </C.card>
    </C.cardContainer>
  )
}
