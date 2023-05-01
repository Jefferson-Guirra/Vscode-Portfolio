import { IconType } from 'react-icons'
export interface ProjectCardProps {
  colorLeft: string
  colorRight: string
  Icon: IconType
  title: string
  contentText: string
  techs: {
    name: string
    borderColor: string
  }[]
  links: {
    title: string
    href: string
  }[]
}
