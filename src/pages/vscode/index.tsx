import VscodeContainer from '@/features/vscode/containers/VscodeContainer'
import MyVscodeLayout from '@/layouts/vscode/MyVscodeLayout'
import PageWithLayoutType from '@/layouts/@types'
import Head from 'next/head'
import { FC } from 'react'

const index: FC = () => {
  return (
    <>
      <Head>
        <title>Vscode</title>
      </Head>
      <VscodeContainer />
    </>
  )
}
;(index as PageWithLayoutType).layout = MyVscodeLayout
export default index
