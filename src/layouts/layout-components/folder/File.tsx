import * as C from './file'
import {
  VscFolder,
  VscFolderOpened,
  VscChevronRight,
  VscChevronDown,
} from 'react-icons/vsc'
import { UpdateFilersOpen, File, UpdateFoldersOpen, UpdateFile } from '@/@types'
import { useVscodeContext } from '@/context/vscode/vscode'
import { IconType } from '@/components'

type FoldersOpen = string[]
type Element = any
interface Props {
  element: any
}

const JsxElementLoop = (
  element: Element,
  updateFoldersOpen: UpdateFoldersOpen,
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
          onClick={() => updateFoldersOpen.update(element.index)}
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
  updateFoldersOpen: UpdateFoldersOpen,
  folderName: FoldersOpen,
  updateFilersOPen: UpdateFilersOpen,
  filerOpen: File,
  handleUpdateFile: UpdateFile
) => {
  return JsxElementLoop(
    element,
    updateFoldersOpen,
    folderName,
    updateFilersOPen,
    filerOpen,
    handleUpdateFile
  )
}

const File = ({ element }: Props) => {
  const {
    foldersOpen,
    handleUpdateFoldersOpen,
    handleUpdateFilersOpen,
    filerOpen,
    handleUpdateFile,
  } = useVscodeContext()
  return (
    <div>
      {handleElement(
        element,
        handleUpdateFoldersOpen,
        foldersOpen,
        handleUpdateFilersOpen,
        filerOpen,
        handleUpdateFile
      )}
    </div>
  )
}

export default File
