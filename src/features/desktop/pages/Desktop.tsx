import Link from 'next/link'
import Image from 'next/image'
import * as C from './styles'
import { iconProjectData } from '@/constants'
import { DragElement, VscodeBox } from '@/components'
import { useVscodeContext } from '@/context/vscode/vscode'

const Desktop = () => {
  const { vscodeIsMinimize } = useVscodeContext()

  return (
    <>
      <C.container>
        <section className="content">
          {iconProjectData.map((icon) => (
            <DragElement key={icon.name} width={180} height={66}>
              <Link href={icon.href} target="_blank" className="project">
                <Image
                  src={`/images/desktop/${icon.icon}.svg`}
                  width={50}
                  height={50}
                  alt={icon + 'icon'}
                />
                <p>{icon.name}</p>
              </Link>
            </DragElement>
          ))}
        </section>
        {vscodeIsMinimize && <VscodeBox />}
      </C.container>
    </>
  )
}

export default Desktop
