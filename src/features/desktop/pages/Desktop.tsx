import Link from 'next/link'
import Image from 'next/image'
import * as C from './styles'

const Desktop = () => {
  return (
    <C.nav>
      <Link href="/">
        <Image
          src="/images/vscode.svg"
          alt=" vscode icon"
          width={24}
          height={24}
        />
      </Link>
    </C.nav>
  )
}

export default Desktop
