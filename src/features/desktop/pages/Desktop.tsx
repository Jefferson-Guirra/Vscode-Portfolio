import Link from 'next/link'
import Image from 'next/image'
import * as C from './styles'
import { projectData } from '@/components/constants/project-data'
import { DragElement, VscodeBox } from '@/components'
import { useVscodeContext } from '@/context/vscode/vscode'
import { parseCookies } from 'nookies'

const Desktop = () => {
  const { vscodeIsMinimize, insertCookie, handleVscodeMinimize } =
    useVscodeContext()
  const vscodeOpenCookie = parseCookies().vscodeIsOpen
    ? JSON.parse(parseCookies().vscodeIsOpen)
    : false

  const handleOpenVscode = () => {
    handleVscodeMinimize.update(false)
    insertCookie.insert({ name: 'vscodeIsOpen', value: true })
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
                priority
              />
              <p key={project.title}>{project.title}</p>
            </Link>
          </DragElement>
        ))}
      </section>
      {vscodeIsMinimize && <VscodeBox />}
      <C.nav vscodeIsOpen={vscodeOpenCookie}>
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
