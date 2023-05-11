import React from 'react'
import Link from 'next/link'
import * as C from './styles'
import {
  VscTerminalBash,
  VscAdd,
  VscChevronDown,
  VscLayoutCentered,
  VscTrash,
  VscEllipsis,
  VscChevronUp,
  VscChromeClose,
} from 'react-icons/vsc'
import { useVscodeContext } from '@/context/vscode/vscode'
export const Terminal = () => {
  const { terminal, handleUpdateTerminal } = useVscodeContext()
  return (
    <C.Terminal terminal={terminal}>
      <article className="actions">
        <div className="titles">
          <h5>PROBLEMAS</h5>
          <h5>SAÍDA</h5>
          <h5>CONSOLE DE DEPURAÇÃO</h5>
          <h5>TERMINAL</h5>
        </div>
        <div className="icons">
          <p>
            <VscTerminalBash size={15} color="#eee" />
            npm-Vscode-Portfolio
          </p>
          <p>
            <VscAdd size={17} color="#eee" />
            <VscChevronDown size={13} color="#eee" />
          </p>
          <VscLayoutCentered size={17} />
          <VscTrash size={17} />
          <VscEllipsis size={17} />
          <VscChevronUp
            size={17}
            color="#fff"
            onClick={() => handleUpdateTerminal.update(!terminal)}
            className="arrow"
          />
          <VscChromeClose
            color="#fff"
            className="close"
            onClick={() => handleUpdateTerminal.update(false)}
            size={15}
          />
        </div>
      </article>
      <article className="link">
        <p>ready</p>
        <p>-</p>
        <p>started server on 0.0.0.0:3000, </p>
        <Link href="https://my-storage-jefferson.netlify.app/" target="_blank">
          url: https://my-storage-jefferson.netlify.app
        </Link>
      </article>
    </C.Terminal>
  )
}
