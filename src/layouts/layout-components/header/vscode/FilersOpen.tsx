import { useVscodeContext } from '@/context/vscode/vscode'
import { IconType } from '@/components'
import { VscClose } from 'react-icons/vsc'
import { File } from '@/@types'
import * as C from './filersOpen'

export const FilersOpen = () => {
  const { filersOpen, filerOpen, updateFilersOpen } = useVscodeContext()

  const handleFile = (file: File) => {
    if (filerOpen === file) {
      updateFilersOpen.updateFileOpen({} as File)
      updateFilersOpen.close(file)
    }
    updateFilersOpen.close(file)
  }
  return (
    <C.container>
      {filersOpen.map((file) => (
        <C.file isOpen={filerOpen.index === file.index} key={file.index}>
          <IconType type={file.value.replace(/\w+\./g, '')} size={20} />
          <p>{file.value}</p>
          <span onClick={() => handleFile(file)}>
            <VscClose size={20} color="#646464" />
          </span>
        </C.file>
      ))}
    </C.container>
  )
}
