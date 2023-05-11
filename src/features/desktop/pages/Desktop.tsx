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
            <DragElement key={icon.name} width={64.38} height={64.38}>
              <Link href={icon.href} target="_blank" className="project">
                <Image
                  src={`/images/desktop/${icon.icon}.svg`}
                  width={40}
                  height={40}
                  alt={icon + 'icon'}
                />
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
