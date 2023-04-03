import { makeRootFolder } from '@/factories/rootFolder'
import File from './File'
import * as C from './folder-component'

export const FolderComponent = () => {
  const folders = makeRootFolder()
  return (
    <C.container>
      {folders.elements().map((item, index) => (
        <File key={index} element={item} />
      ))}
    </C.container>
  )
}
