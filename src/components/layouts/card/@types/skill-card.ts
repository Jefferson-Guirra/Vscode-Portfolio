import { IconType } from 'react-icons'
export interface SkillCardProps {
  title: string
  width: number
  height: number
  techs?: string[]
  Icon: IconType
  hoverIconColor: string
}
