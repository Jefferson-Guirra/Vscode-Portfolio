import { makeRootFolder } from '@/factories/rootFolder'
import { VscEllipsis } from 'react-icons/vsc'
import File from './File'
import * as C from './rootFolder'

export const RootFolder = () => {
  const folders = makeRootFolder()
  return (
    <C.container>
      <div className="title">
        <h1>EXPLORADOR</h1>
        <VscEllipsis size={20} color="#aaaaaa" />
      </div>
      {folders.elements().map((item, index) => (
        <File key={index} element={item} />
      ))}
    </C.container>
  )
}
