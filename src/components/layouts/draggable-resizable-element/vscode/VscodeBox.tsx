import * as C from './styles'
import {
  HeaderDesktopApplications,
  VscodeNavbar,
  RootFolder,
  FilersOpen,
  Terminal,
} from '@/layouts/layout-components'
import { useVscodeContext } from '@/context/vscode/vscode'
import Vscode from '../../../../features/vscode/pages/Vscode'
import { Rnd } from 'react-rnd'
import { useLayoutEffect, useState, useMemo } from 'react'
import { debounce } from '@/utils/debounce'

export const VscodeBox = () => {
  const [drag, setDrag] = useState(
    document.body.getBoundingClientRect().width <= 800
  )
  const { viewFilers } = useVscodeContext()

  const handleResize = () => {
    setDrag(window.innerWidth <= 800)
  }

  const debounceResizeWindow = useMemo(() => debounce(handleResize, 200), [])

  useLayoutEffect(() => {
    window.addEventListener('resize', debounceResizeWindow)

    return () => {
      window.removeEventListener('resize', debounceResizeWindow)
    }
  }, [debounceResizeWindow])
  console.log(document.body.getBoundingClientRect().height)

  return (
    <Rnd
      default={{
        x: document.body.getBoundingClientRect().width * 0.1,
        y: (window.innerHeight - 23) * 0.25,
        width: '80%',
        height: '50%',
      }}
      maxWidth={'100%'}
      minWidth={'40%'}
      minHeight={'40%'}
      bounds="parent"
      cancel="cancel"
      className="modal"
      disableDragging={drag}
    >
      <C.container>
        <HeaderDesktopApplications />
        <section className="content-box ">
          <VscodeNavbar />
          {viewFilers && <RootFolder />}
          <article className="contents">
            <FilersOpen />
            <div className="vscode-container">
              <Vscode />
            </div>
            <Terminal />
          </article>
        </section>
      </C.container>
    </Rnd>
  )
}
