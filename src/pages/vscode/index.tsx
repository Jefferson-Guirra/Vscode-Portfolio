import VscodeContainer from '@/features/vscode/containers/VscodeContainer'
import MyVscodeLayout from '@/layouts/vscode/MyVscodeLayout'
import PageWithLayoutType from '@/layouts/@types'
import { FC } from 'react'

const index: FC = () => {
  return <VscodeContainer />
}
;(index as PageWithLayoutType).layout = MyVscodeLayout
export default index
