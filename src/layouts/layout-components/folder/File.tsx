import * as C from './file'
import Image from 'next/image'
import {
  VscFolder,
  VscFolderOpened,
  VscChevronRight,
  VscChevronDown,
} from 'react-icons/vsc'
import { useState, useEffect } from 'react'
import { parseCookies, setCookie } from 'nookies'

type HandleFolder = (value: string) => void
type FoldersOpen = string[]
type Element = any

interface Props {
  element: any
}

const JsxElementLoop = (
  element: Element,
  handleFolder: HandleFolder,
  foldersOpen: FoldersOpen
) => {
  if (typeof element.value === 'string') {
    return (
      <C.file key={element.index}>
        <Image
          src="/images/typescript-react.svg"
          width={17}
          height={17}
          alt="icon"
        />
        <p className="file">{element.value}</p>
      </C.file>
    )
  } else {
    return (
      <C.folderContainer key={element.index}>
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
          <p>{element.value.folder}</p>
        </div>
        {foldersOpen.includes(element.index) &&
          element.value
            .elements()
            .map((element: any) =>
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
  return JsxElementLoop(element, handleFunction, folderName)
}

const newFoldersOPen = (folders: string[], value: string) => {
  if (folders.includes(value)) {
    const newFolder = folders.filter((item) => item !== value)
    setCookie(null, 'foldersOpen', JSON.stringify(newFolder))
    return newFolder
  } else {
    setCookie(null, 'foldersOpen', JSON.stringify([...folders, value]))
    return [...folders, value]
  }
}
const File = ({ element }: Props) => {
  const [foldersOpen, setFoldersOpen] = useState<string[]>([])
  const handleFolder: HandleFolder = (value) => {
    const foldersOpenCookie = parseCookies().foldersOpen
    setFoldersOpen(
      newFoldersOPen(
        foldersOpenCookie ? JSON.parse(foldersOpenCookie) : [],
        value
      )
    )
  }

  useEffect(() => {
    const foldersCookie = parseCookies().foldersOpen
    if (foldersCookie) {
      setFoldersOpen(JSON.parse(foldersCookie))
    }
  }, [])

  return <div>{handleElement(element, handleFolder, foldersOpen)}</div>
}

export default File
