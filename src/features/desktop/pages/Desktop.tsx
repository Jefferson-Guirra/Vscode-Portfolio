import Link from 'next/link'
import Image from 'next/image'
import * as C from './styles'

const Desktop = () => {
  return (
    <C.nav>
      <Link href="/vscode">
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
