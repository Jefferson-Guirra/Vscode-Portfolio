import Link from 'next/link'
import Image from 'next/image'
import * as C from './styles'
import { cookieIsOpenVscode } from '@/utils/handle-vscode-cookie'

interface Props {
  vscodeIsOpen: string
}
const Desktop = ({ vscodeIsOpen }: Props) => {
  const handleOpenVscode = () => {
    cookieIsOpenVscode('true')
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
