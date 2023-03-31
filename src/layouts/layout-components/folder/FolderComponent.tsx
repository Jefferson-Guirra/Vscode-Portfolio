import { makeRootFolder } from '@/factories/rootFolder'
import FolderElement from './FolderElement'
import * as C from './folder-component'

export const FolderComponent = () => {
  const folders = makeRootFolder()
  return (
    <C.container>
      {folders.elements().map((item, index) => (
        <FolderElement key={index} element={item} />
      ))}
    </C.container>
  )
}
