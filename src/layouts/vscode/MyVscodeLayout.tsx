import React from 'react'
import * as C from './styles'
import { HeaderDesktopApplications, VscodeNavbar } from '../layout-components'
interface Props {
  children: JSX.Element
}
const MyVscodeLayout = ({ children }: Props) => {
  return (
    <C.container>
      <HeaderDesktopApplications />
      <section className="content">
        <VscodeNavbar />
        {children}
      </section>
    </C.container>
  )
}

export default MyVscodeLayout
