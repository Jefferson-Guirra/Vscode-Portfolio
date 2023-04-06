import Link from 'next/link'
import Image from 'next/image'
import * as C from './styles'
import { setCookie } from 'nookies'

interface Props {
  vscodeIsOpen: string
}
const Desktop = ({ vscodeIsOpen }: Props) => {
  const handleOpenVscode = () => {
    setCookie(null, 'vscodeIsOpen', 'true')
  }

  return (
    <C.nav vscodeIsOpen={vscodeIsOpen === 'true'}>
      <Link href="/vscode" onClick={handleOpenVscode}>
        <Image
          src="/images/vscode.svg"
          alt=" vscode icon"
          width={32}
          height={32}
        />
      </Link>
    </C.nav>
  )
}

export default Desktop
