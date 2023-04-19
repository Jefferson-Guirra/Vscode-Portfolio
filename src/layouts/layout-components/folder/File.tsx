import * as C from './file'
import {
  VscFolder,
  VscFolderOpened,
  VscChevronRight,
  VscChevronDown,
} from 'react-icons/vsc'
import { useVscodeContext } from '@/context/vscode/vscode'
import { UpdateFilersOpen, File } from '@/@types/update-filers-open'
import { UpdateFile } from '@/@types/update-file'
import { IconType } from '@/components'

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
  updateFilersOpen: UpdateFilersOpen,
  filerOpen: File,
  handleUpdateFile: UpdateFile
) => {
  if (typeof element.value === 'string') {
    return (
      <C.file
        isOpen={element.index === filerOpen.index}
        key={element.index}
        onClick={() => {
          updateFilersOpen.add(element)
          handleUpdateFile.update(element)
        }}
      >
        <IconType size={17} type={element.value.replace(/\w+\./g, '')} />
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
                updateFilersOpen,
                filerOpen,
                handleUpdateFile
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
  updateFilersOPen: UpdateFilersOpen,
  filerOpen: File,
  handleUpdateFile: UpdateFile
) => {
  return JsxElementLoop(
    element,
    handleFunction,
    folderName,
    updateFilersOPen,
    filerOpen,
    handleUpdateFile
  )
}

const File = ({ element }: Props) => {
  const {
    foldersOpen,
    updateFoldersOpen,
    updateFilersOpen,
    filerOpen,
    handleUpdateFile,
  } = useVscodeContext()
  return (
    <div>
      {handleElement(
        element,
        updateFoldersOpen,
        foldersOpen,
        updateFilersOpen,
        filerOpen,
        handleUpdateFile
      )}
    </div>
  )
}

export default File
