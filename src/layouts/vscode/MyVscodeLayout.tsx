import * as C from './styles'
import {
  HeaderDesktopApplications,
  VscodeNavbar,
  RootFolder,
  FilersOpen,
  Terminal,
} from '../layout-components'
import { useVscodeContext } from '@/context/vscode/vscode'
interface Props {
  children: JSX.Element
}
const MyVscodeLayout = ({ children }: Props) => {
  const { viewFilers } = useVscodeContext()
  return (
    <C.container>
      <HeaderDesktopApplications />
      <section className="content-box ">
        <VscodeNavbar />
        {viewFilers && <RootFolder />}
        <article className="content">
          <FilersOpen />
          {children}
          <Terminal />
        </article>
      </section>
    </C.container>
  )
}

export default MyVscodeLayout
