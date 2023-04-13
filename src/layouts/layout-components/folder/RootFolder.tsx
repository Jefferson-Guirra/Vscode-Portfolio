import { makeRootFolder } from '@/factories/rootFolder'
import { VscEllipsis, VscChevronRight, VscChevronDown } from 'react-icons/vsc'
import { useState } from 'react'
import File from './File'
import * as C from './rootFolder'

export const RootFolder = () => {
  const folders = makeRootFolder()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <C.container>
      <div className="explorer">
        <h1>EXPLORADOR</h1>
        <VscEllipsis size={20} color="#aaaaaa" />
      </div>
      <div className="title" onClick={() => setIsOpen((state) => !state)}>
        {isOpen ? <VscChevronRight size={17} /> : <VscChevronDown size={17} />}
        <h1>PORTFOLIO-VSCODE</h1>
      </div>
      {isOpen &&
        folders
          .elements()
          .map((item, index) => <File key={index} element={item} />)}
    </C.container>
  )
}
