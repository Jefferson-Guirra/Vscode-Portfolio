import Link from 'next/link'
import Image from 'next/image'
import * as C from './styles'
import { setCookie } from 'nookies'
import { projectData } from '@/components/constants/project-data'
import { DragElement, VscodeBox } from '@/components'
import { useVscodeContext } from '@/context/vscode/vscode'

const Desktop = () => {
  const { vscodeIsMinimize, vscodeIsOpen } = useVscodeContext()
  const handleOpenVscode = () => {
    setCookie(null, 'vscodeIsOpen', 'true')
  }
  return (
    <C.container>
      <section className="content">
        {projectData.map((project) => (
          <DragElement key={project.title} width={180} height={68}>
            <Link
              target="_blank"
              href={project.links[1].href}
              className="project"
              key={project.title}
            >
              <Image
                src={`/images/desktop/${project.iconName}.svg`}
                alt={`${project.iconName} icon`}
                width={50}
                height={50}
              />
              <p key={project.title}>{project.title}</p>
            </Link>
          </DragElement>
        ))}
      </section>
      {vscodeIsMinimize && <VscodeBox />}
      <C.nav vscodeIsOpen={vscodeIsOpen}>
        <Link href="/vscode" onClick={handleOpenVscode}>
          <Image
            src="/images/vscode.svg"
            alt=" vscode icon"
            width={32}
            height={32}
          />
        </Link>
      </C.nav>
    </C.container>
  )
}

export default Desktop
