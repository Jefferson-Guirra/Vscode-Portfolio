import * as C from './styles'
import Image from 'next/image.js'
import Link from 'next/link.js'
import { parseCookies, setCookie } from 'nookies'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
export const VscodeFooter = () => {
  const [vscodeOpen, setVscodeOpen] = useState(false)
  const router = useRouter().asPath
  const handleOpenVscode = () => {
    setCookie(null, 'vscodeIsOpen', JSON.stringify(true), {
      maxAge: 86400,
      path: '/',
    })
    setCookie(null, 'vscodeIsMinimize', JSON.stringify(false), {
      maxAge: 86400,
      path: '/',
    })
  }

  useEffect(() => {
    const vscodeOpenCookie = parseCookies().vscodeIsOpen
      ? JSON.parse(parseCookies().vscodeIsOpen)
      : false
    if (vscodeOpenCookie !== vscodeOpen) {
      setVscodeOpen(vscodeOpenCookie)
    }
  })
  return (
    <C.nav vscodeIsOpen={vscodeOpen}>
      <Link
        href={router === '/vscode' ? '/' : '/vscode'}
        onClick={handleOpenVscode}
      >
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
