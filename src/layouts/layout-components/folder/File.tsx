import * as C from './file'
import Image from 'next/image'
import {
  VscFolder,
  VscFolderOpened,
  VscChevronRight,
  VscChevronDown,
} from 'react-icons/vsc'
import { useVscodeContext } from '@/context/vscode/vscode'

type HandleFolder = (value: string) => void
type FoldersOpen = string[]
type Element = any

interface Props {
  element: any
}

const JsxElementLoop = (
  element: Element,
  updateFoldersOpen: HandleFolder,
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
        <div
          className="folder"
          onClick={() => updateFoldersOpen(element.index)}
        >
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
              handleElement(element, updateFoldersOpen, foldersOpen)
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

const File = ({ element }: Props) => {
  const { foldersOpen, updateFoldersOpen } = useVscodeContext()

  return <div>{handleElement(element, updateFoldersOpen, foldersOpen)}</div>
}

export default File
