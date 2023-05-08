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
import { useEffect, useState } from 'react'
import { debounce } from '@/utils/debounce'

export const VscodeBox = () => {
  const [width, setWidth] = useState('80%')
  const [height, setHeight] = useState('50%')
  const { viewFilers } = useVscodeContext()

  const handleResize = () => {
    setHeight(window.innerHeight * 0.5 + 'px')
    setWidth(window.innerWidth * 0.8 + 'px')
  }

  const debounceResizeWindow = debounce(handleResize, 200)

  useEffect(() => {
    window.addEventListener('resize', debounceResizeWindow)
    return () => {
      window.removeEventListener('resize', debounceResizeWindow)
    }
  }, [])
  return (
    <Rnd
      default={{
        x: 50,
        y: 50,
        width,
        height,
      }}
      maxWidth={'100%'}
      minWidth={'40%'}
      minHeight={'40%'}
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
