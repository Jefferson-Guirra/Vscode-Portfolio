import * as C from './styles'
import {
  HeaderDesktopApplications,
  VscodeNavbar,
  RootFolder,
  FilersOpen,
} from '../layout-components'
interface Props {
  children: JSX.Element
}
const MyVscodeLayout = ({ children }: Props) => {
  return (
    <C.container>
      <HeaderDesktopApplications />
      <section className="content-box ">
        <VscodeNavbar />
        <RootFolder />
        <article className="content">
          <FilersOpen />
          {children}
        </article>
      </section>
    </C.container>
  )
}

export default MyVscodeLayout
