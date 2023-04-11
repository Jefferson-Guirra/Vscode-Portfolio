import * as C from './file'
import Image from 'next/image'
import {
  VscFolder,
  VscFolderOpened,
  VscChevronRight,
  VscChevronDown,
} from 'react-icons/vsc'
import { useVscodeContext } from '@/context/vscode/vscode'
import { UpdateFilersOpen } from '@/@types/updateFilersOpen'

type HandleFolder = (value: string) => void
type FoldersOpen = string[]
type Element = any

interface Props {
  element: any
}

const JsxElementLoop = (
  element: Element,
  updateFoldersOpen: HandleFolder,
  foldersOpen: FoldersOpen,
  updateFilersOpen: UpdateFilersOpen
) => {
  if (typeof element.value === 'string') {
    return (
      <C.file
        key={element.index}
        onClick={() => {
          updateFilersOpen.add(element)
          updateFilersOpen.updateFileOpen(element)
        }}
      >
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
              handleElement(
                element,
                updateFoldersOpen,
                foldersOpen,
                updateFilersOpen
              )
            )}
      </C.folderContainer>
    )
  }
}

const handleElement = (
  element: any,
  handleFunction: HandleFolder,
  folderName: FoldersOpen,
  updateFilersOPen: UpdateFilersOpen
) => {
  return JsxElementLoop(element, handleFunction, folderName, updateFilersOPen)
}

const File = ({ element }: Props) => {
  const { foldersOpen, updateFoldersOpen, updateFilersOpen } =
    useVscodeContext()
  return (
    <div>
      {handleElement(element, updateFoldersOpen, foldersOpen, updateFilersOpen)}
    </div>
  )
}

export default File
