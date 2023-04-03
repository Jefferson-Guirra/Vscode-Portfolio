import * as C from './folder-element'
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

const DefaultElement = (
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
) => {
  if (typeof element === 'string') {
    return DefaultElement(element, handleFunction, folderName)
  } else {
    const defaultElement: any = {
      folder: element.folder,
      index: element.index,
      files: element.files,
    }
    return DefaultElement(defaultElement, handleFunction, folderName)
  }
}

const FolderElement = ({ element }: Props) => {
  const [folderOpen, setFolderOpen] = useState<number[]>([])
  const handleFolder: HandleFolder = (value) => {
    setFolderOpen((state) => {
      if (state.includes(value)) {
        const newFolder = state.filter((item) => item !== value)
        return newFolder
      } else {
        return [...folderOpen, value]
      }
    })
  }

  return <div>{handleElement(element, handleFolder, folderOpen)}</div>
}

export default FolderElement
