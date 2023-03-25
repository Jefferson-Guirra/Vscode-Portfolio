import { useState } from 'react'
import * as C from './styles'
import { VscSettingsGear, VscFiles, VscAccount } from 'react-icons/vsc'

export const VscodeNavbar = () => {
  const [iconIsOpen, setIconIsOpen] = useState('')

  const handleIcon = (icon: string) => {
    setIconIsOpen(icon)
  }

  return (
    <C.navbar iconIsOpen={iconIsOpen}>
      <article className="icons">
        <div className="icon" onClick={() => handleIcon('files')}>
          <VscFiles size={25} color="#7b7d7e" />
        </div>
        <div className="icon" onClick={() => handleIcon('config')}>
          <VscSettingsGear size={25} color="#7b7d7e" />
        </div>
        <div className="icon" onClick={() => handleIcon('account')}>
          <VscAccount size={25} color="#7b7d7e" />
        </div>
      </article>
    </C.navbar>
  )
}
