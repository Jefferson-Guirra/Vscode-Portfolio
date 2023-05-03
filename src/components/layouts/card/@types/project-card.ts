export interface ProjectCardProps {
  colorLeft: string
  colorRight: string
  iconName: string
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
