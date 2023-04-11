import { useVscodeContext } from '@/context/vscode/vscode'
import { VscClose } from 'react-icons/vsc'
import * as C from './filersOpen'

export const FilersOpen = () => {
  const { filersOpen, filerOpen } = useVscodeContext()
  return (
    <C.container>
      {filersOpen.map((file) => (
        <C.file isOpen={filerOpen.path === file.path} key={file.index}>
          <p>{file.value}</p>
          <span>
            <VscClose size={20} color="#646464" />
          </span>
        </C.file>
      ))}
    </C.container>
  )
}
