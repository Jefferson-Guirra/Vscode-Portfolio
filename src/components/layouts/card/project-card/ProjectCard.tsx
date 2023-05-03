import { ProjectCardProps } from '../@types'
import * as C from './project-card-style'
import Link from 'next/link'
import Image from 'next/image'
export const ProjectCard = ({
  colorLeft,
  colorRight,
  iconName,
  title,
  contentText,
  techs,
  links,
}: ProjectCardProps) => {
  return (
    <C.card colorLeft={colorLeft} colorRight={colorRight}>
      <div className="background-icon">
        <div className="background-left"></div>

        <div className="background-right"></div>
        <div className="icon-container">
          <Image
            src={`/images/${iconName}.svg`}
            width={70}
            height={70}
            alt={`${iconName} icon`}
          />
        </div>
      </div>
      <C.contentCard>
        <h3>{title}</h3>
        <p className="content-text">{contentText}</p>
        <div className="techs">
          {techs.map((tech) => (
            <p
              key={tech.name}
              style={{ border: `1px solid ${tech.borderColor}` }}
            >
              {tech.name}
            </p>
          ))}
        </div>
        <div className="links">
          {links.map((link) => (
            <Link target="_blank" key={link.href} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
      </C.contentCard>
    </C.card>
  )
}
