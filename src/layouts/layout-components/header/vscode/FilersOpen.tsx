import { useVscodeContext } from '@/context/vscode/vscode'
import { IconType } from '@/components'
import { VscClose, VscChevronRight } from 'react-icons/vsc'
import { File } from '@/@types'
import * as C from './filersOpen'

export const FilersOpen = () => {
  const { filersOpen, filerOpen, handleUpdateFilersOpen, handleUpdateFile } =
    useVscodeContext()

  const updateFileOpen = (file: File) => {
    const index = filersOpen.findIndex((item) => item.index === file.index)
    if (index === 0 && filersOpen.length === 1) {
      handleUpdateFile.update({
        index: 'undefined',
        value: 'undefined',
        type: 'file',
        path: [],
      })
      return
    }

    if (index === 0 && filersOpen.length > 1) {
      handleUpdateFile.update(filersOpen[index + 1])
      return
    } else {
      handleUpdateFile.update(filersOpen[index - 1])
      return
    }
  }

  const closeFile = (file: File) => {
    if (file.index !== filerOpen.index) {
      handleUpdateFilersOpen.close(file)
      return
    } else {
      handleUpdateFilersOpen.close(file)
      updateFileOpen(file)
    }
  }
  const UpdateFile = (e: React.MouseEvent<HTMLElement>, file: File) => {
    const attribute = e.currentTarget.getAttribute('data-file-name')
    if (attribute === file.value) {
      handleUpdateFile.update(file)
      return
    }
    if (e.currentTarget === e.target) {
      handleUpdateFile.update(file)
    }
  }
  if (filersOpen.length >= 1)
    return (
      <C.container>
        <div className="filers">
          {filersOpen.map((file) => (
            <C.file
              isOpen={filerOpen.index === file.index}
              key={file.index}
              onClick={(e) => UpdateFile(e, file)}
            >
              <div
                className="content-file"
                data-file-name={file.value}
                onClick={(e) => UpdateFile(e, file)}
              >
                <IconType type={file.value.replace(/\w+\./g, '')} size={19} />
                <span className="file-name">
                  <p>{file.value}</p>
                </span>
              </div>
              <button onClick={() => closeFile(file)}>
                <VscClose size={19} color="#646464" />
              </button>
            </C.file>
          ))}
        </div>
        {filerOpen.path && (
          <C.path>
            {filerOpen.path.map((pathname, index) => (
              <div className="pathname" key={pathname}>
                {pathname.includes('.') && (
                  <IconType
                    size={15}
                    type={`${pathname.replace(/\w+\./g, '')}`}
                  />
                )}
                <p>{pathname}</p>
                {index !== (filerOpen.path?.length as number) - 1 && (
                  <VscChevronRight size={15} />
                )}
              </div>
            ))}
          </C.path>
        )}
      </C.container>
    )
}
