import { useState } from 'react'
import * as C from './styles'
import { VscSettingsGear, VscFiles, VscAccount } from 'react-icons/vsc'
import { useVscodeContext } from '@/context/vscode/vscode'

const validateIcon = (icon: string, state: string): string => {
  if (icon === state) {
    return ''
  } else {
    return icon
  }
}
export const VscodeNavbar = () => {
  const { handleViewFilers, handleUpdateFile } = useVscodeContext()
  const [iconIsOpen, setIconIsOpen] = useState('')

  const handleIcon = (icon: string) => {
    setIconIsOpen((state) => validateIcon(icon, state))
  }
  const handleUser = (icon: string) => {
    handleIcon(icon)
    handleUpdateFile.update({
      index: 'User',
      value: 'user',
      type: 'file',
      path: [],
    })
  }
  return (
    <C.navbar iconIsOpen={iconIsOpen}>
      <article className="icons">
        <div
          className="icon"
          onClick={() => {
            handleViewFilers()
            handleIcon('files')
          }}
        >
          <VscFiles size={25} color="#7b7d7e" />
        </div>
        <div className="icon" onClick={() => handleIcon('config')}>
          <VscSettingsGear size={25} color="#7b7d7e" />
        </div>
        <div className="icon" onClick={() => handleUser('account')}>
          <VscAccount size={25} color="#7b7d7e" />
        </div>
      </article>
    </C.navbar>
  )
}
