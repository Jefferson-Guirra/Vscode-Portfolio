import { makeRootFolder } from '@/factories/rootFolder'
import { VscEllipsis, VscChevronRight, VscChevronDown } from 'react-icons/vsc'
import File from './File'
import * as C from './rootFolder'
import { useVscodeContext } from '@/context/vscode/vscode'

export const RootFolder = () => {
  const folders = makeRootFolder()
  const { rootFolderIsOpen, handleRootFolderIsOpen } = useVscodeContext()
  return (
    <C.container>
      <div className="explorer">
        <h1>EXPLORADOR</h1>
        <VscEllipsis size={20} color="#aaaaaa" />
      </div>
      <div className="title" onClick={handleRootFolderIsOpen}>
        {rootFolderIsOpen ? (
          <VscChevronRight size={17} />
        ) : (
          <VscChevronDown size={17} />
        )}
        <h1>PORTFOLIO-VSCODE</h1>
      </div>
      {rootFolderIsOpen &&
        folders
          .elements()
          .map((item, index) => <File key={index} element={item} />)}
    </C.container>
  )
}
