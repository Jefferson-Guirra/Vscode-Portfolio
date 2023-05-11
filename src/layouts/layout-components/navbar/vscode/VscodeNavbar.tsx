import { useEffect, useState } from 'react'
import * as C from './styles'
import { VscSettingsGear, VscFiles, VscAccount } from 'react-icons/vsc'
import { useVscodeContext } from '@/context/vscode/vscode'
import { parseCookies } from 'nookies'

const validateIcon = (icon: string, state: string): string => {
  if (icon === state) {
    return ''
  } else {
    return icon
  }
}
export const VscodeNavbar = () => {
  const { handleViewFilers, handleUpdateFile, insertCookie } =
    useVscodeContext()
  const [iconIsOpen, setIconIsOpen] = useState('')

  const handleFile = (icon: string) => {
    if (iconIsOpen === icon) {
      handleViewFilers(false)
      handleIcon('files')
    } else {
      handleViewFilers(true)
      handleIcon('files')
    }
  }
  const handleIcon = (icon: string) => {
    setIconIsOpen((state) => validateIcon(icon, state))
    insertCookie.insert({ name: 'iconOpen', value: icon })
  }
  const handleUser = (icon: string) => {
    handleIcon(icon)
    handleUpdateFile.update({
      index: 'User',
      value: 'user',
      type: 'file',
      path: [],
    })
    insertCookie.insert({ name: 'iconOpen', value: icon })
  }

  useEffect(() => {
    const { iconOpen } = parseCookies()
    if (iconOpen) {
      setIconIsOpen(JSON.parse(iconOpen))
    }
  }, [])
  return (
    <C.navbar iconIsOpen={iconIsOpen}>
      <article className="icons">
        <div className="icon" onClick={() => handleFile('files')}>
          <VscFiles size={25} color="#7b7d7e" />
        </div>
        <div
          style={{ pointerEvents: 'none' }}
          className="icon"
          onClick={() => handleIcon('config')}
        >
          <VscSettingsGear size={25} color="#7b7d7e" />
        </div>
        <div className="icon" onClick={() => handleUser('account')}>
          <VscAccount size={25} color="#7b7d7e" />
        </div>
      </article>
    </C.navbar>
  )
}
