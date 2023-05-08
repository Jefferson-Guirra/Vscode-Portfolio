import * as C from './styles'
import {
  HeaderDesktopApplications,
  VscodeNavbar,
  RootFolder,
  FilersOpen,
} from '@/layouts/layout-components'
import { useVscodeContext } from '@/context/vscode/vscode'
import Vscode from '../../../../features/vscode/pages/Vscode'
import { Rnd } from 'react-rnd'

export const VscodeBox = () => {
  const { viewFilers } = useVscodeContext()
  return (
    <Rnd
      default={{
        x: 50,
        y: 300,
        width: '80%',
        height: '50%',
      }}
      maxWidth={'100%'}
      minWidth={'30%'}
      minHeight={400}
      bounds="window"
      cancel="cancel"
      className="modal"
    >
      <C.container>
        <HeaderDesktopApplications />
        <section className="content-box ">
          <VscodeNavbar />
          {viewFilers && <RootFolder />}
          <article className="contents">
            <FilersOpen />
            <Vscode />
          </article>
        </section>
      </C.container>
    </Rnd>
  )
}
