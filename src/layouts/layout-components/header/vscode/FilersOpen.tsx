import { useVscodeContext } from '@/context/vscode/vscode'
import { IconType } from '@/components'
import { VscClose, VscChevronRight } from 'react-icons/vsc'
import { File } from '@/@types'
import * as C from './filersOpen'

export const FilersOpen = () => {
  const { filersOpen, filerOpen, updateFilersOpen, handleUpdateFile } =
    useVscodeContext()

  const handleFile = (file: File) => {
    if (filerOpen === file) {
      handleUpdateFile.update({} as File)
      updateFilersOpen.close(file)
    }
    updateFilersOpen.close(file)
  }
  return (
    <C.container>
      <div className="filers">
        {filersOpen.map((file) => (
          <C.file isOpen={filerOpen.index === file.index} key={file.index}>
            <IconType type={file.value.replace(/\w+\./g, '')} size={19} />
            <p>{file.value}</p>
            <button onClick={() => handleFile(file)}>
              <VscClose size={20} color="#646464" />
            </button>
          </C.file>
        ))}
      </div>
      {filerOpen && (
        <C.path>
          {filerOpen.path?.map((pathname, index) => (
            <div className="pathname" key={pathname}>
              {pathname.includes('.') && (
                <IconType
                  size={15}
                  type={`${pathname.replace(/\w+\./g, '')}`}
                />
              )}
              <p>{pathname}</p>
              {index !== filerOpen.path?.length - 1 && (
                <VscChevronRight size={15} />
              )}
            </div>
          ))}
        </C.path>
      )}
    </C.container>
  )
}
