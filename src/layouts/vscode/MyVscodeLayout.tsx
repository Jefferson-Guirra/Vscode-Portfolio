import React from 'react'
import { HeaderDesktopApplications } from '../../components'
interface Props {
  children: JSX.Element
}
const MyVscodeLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderDesktopApplications />
      {children}
    </>
  )
}

export default MyVscodeLayout
