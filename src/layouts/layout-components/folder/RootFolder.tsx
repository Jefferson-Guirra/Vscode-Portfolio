import { makeRootFolder } from '@/factories/rootFolder'
import File from './File'
import * as C from './rootFolder'

export const RootFolder = () => {
  const folders = makeRootFolder()
  return (
    <C.container>
      {folders.elements().map((item, index) => (
        <File key={index} element={item} />
      ))}
    </C.container>
  )
}
