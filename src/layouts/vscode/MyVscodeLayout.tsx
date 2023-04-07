import React from 'react'
import * as C from './styles'
import { LayoutStorage } from '@/context/layoutContext'
import {
  HeaderDesktopApplications,
  VscodeNavbar,
  RootFolder,
} from '../layout-components'
interface Props {
  children: JSX.Element
}
const MyVscodeLayout = ({ children }: Props) => {
  return (
    <LayoutStorage>
      <C.container>
        <HeaderDesktopApplications />
        <section className="content">
          <VscodeNavbar />
          <RootFolder />
          {children}
        </section>
      </C.container>
    </LayoutStorage>
  )
}

export default MyVscodeLayout
