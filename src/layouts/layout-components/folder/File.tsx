import * as C from './file'
import Image from 'next/image'
import {
  VscFolder,
  VscFolderOpened,
  VscChevronRight,
  VscChevronDown,
} from 'react-icons/vsc'
import { useState } from 'react'

type HandleFolder = (value: number) => void
type FoldersOpen = number[]
type Element = any

interface Props {
  element: any
}

const JsxElementLoop = (
  element: Element,
  handleFolder: HandleFolder,
  foldersOpen: FoldersOpen
) => {
  if (typeof element === 'string') {
    return (
      <C.file key={Math.random()}>
        <Image
          src="/images/typescript-react.svg"
          width={17}
          height={17}
          alt="icon"
        />
        <p className="file">{element}</p>
      </C.file>
    )
  } else {
    return (
      <C.folderContainer key={Math.random()}>
        <div className="folder" onClick={() => handleFolder(element.index)}>
          {foldersOpen.includes(element.index) ? (
            <>
              <VscChevronDown size={17} />
              <VscFolderOpened size={17} />
            </>
          ) : (
            <>
              <VscChevronRight size={17} />
              <VscFolder size={17} />
            </>
          )}
          <p>{element.folder}</p>
        </div>
        {foldersOpen.includes(element.index) &&
          element.files.map((element: any) =>
            handleElement(element, handleFolder, foldersOpen)
          )}
      </C.folderContainer>
    )
  }
}

const handleElement = (
  element: any,
  handleFunction: HandleFolder,
  folderName: FoldersOpen
) => JsxElementLoop(element, handleFunction, folderName)

const newFoldersOPen = (folders: number[], value: number) => {
  if (folders.includes(value)) {
    const newFolder = folders.filter((item) => item !== value)
    return newFolder
  } else {
    return [...folders, value]
  }
}
const FolderElement = ({ element }: Props) => {
  const [foldersOpen, setFolderOpen] = useState<number[]>([])

  const handleFolder: HandleFolder = (value) =>
    setFolderOpen((state) => newFoldersOPen(state, value))

  return <div>{handleElement(element, handleFolder, foldersOpen)}</div>
}

export default FolderElement
