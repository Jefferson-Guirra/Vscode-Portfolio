import { useVscodeContext } from '@/context/vscode/vscode'
import { VscClose } from 'react-icons/vsc'
import * as C from './filersOpen'

export const FilersOpen = () => {
  const { filersOpen, filerOpen, updateFilersOpen } = useVscodeContext()
  return (
    <C.container>
      {filersOpen.map((file) => (
        <C.file isOpen={filerOpen.index === file.index} key={file.index}>
          <p>{file.value}</p>
          <span onClick={() => updateFilersOpen.close(file)}>
            <VscClose size={20} color="#646464" />
          </span>
        </C.file>
      ))}
    </C.container>
  )
}
