import { createContext, useState, useEffect, useContext } from 'react'
import { parseCookies } from 'nookies'
import { handleCookie } from '../factories/handle-cookie'
import {
  UpdateFoldersOpen,
  UpdateFile,
  UpdateFilersOpen,
  File,
  VscodeMinimize,
  VscodeOpen,
} from '@/@types'
interface VscodeProps {
  handleUpdateFoldersOpen: UpdateFoldersOpen
  handleRootFolderIsOpen: () => void
  foldersOpen: string[]
  filersOpen: File[]
  filerOpen: File
  vscodeIsMinimize: boolean
  handleUpdateFile: UpdateFile
  handleUpdateFilersOpen: UpdateFilersOpen
  handleVscodeMinimize: VscodeMinimize
  handleUpdateVscodeOpen: VscodeOpen
  vscodeIsOpen: boolean
  rootFolderIsOpen: boolean
  viewFilers: boolean
  handleViewFilers: () => void
}

const VscodeContext = createContext({} as VscodeProps)

interface PropsProvider {
  children: JSX.Element
}

const getCookies = () => parseCookies()
export const VscodeProvider = ({ children }: PropsProvider) => {
  const [foldersOpen, setFoldersOpen] = useState<string[]>([])
  const [filersOpen, setFilersOpen] = useState<File[]>([])
  const [filerOpen, setFilerOpen] = useState<File>({} as File)
  const [rootFolderIsOpen, setRootFolderIsOpen] = useState<boolean>(true)
  const [viewFilers, setViewFilers] = useState(false)
  const [vscodeIsOpen, setVscodeIsOpen] = useState(false)
  const [vscodeIsMinimize, setVscodeIsMinimize] = useState(false)

  const handleViewFilers = () => {
    insertCookie.insert({ name: 'viewFilers', value: !viewFilers })
    setViewFilers((state) => !state)
  }
  const {
    updateFile,
    updateFilers,
    updateFolders,
    insertCookie,
    vscodeMinimize,
    updateVscodeOpen,
  } = handleCookie()

  const handleUpdateFileOpen = () => {
    const update = (file: File) => {
      const newOpenFile = updateFile.update(file)
      if (newOpenFile?.index !== filerOpen.index) {
        setFilerOpen(newOpenFile)
      }
    }
    return {
      update,
    }
  }

  const handleUpdateFilersOpen = () => {
    const add = (file: File) => {
      const newFilers = updateFilers.add(file, filersOpen)
      setFilersOpen(newFilers)
    }
    const close = (file: File) => {
      const newFilers = updateFilers.close(file, filersOpen)
      setFilersOpen(newFilers)
    }
    return {
      add,
      close,
    }
  }

  const handleUpdateFolders = () => {
    const update = (file: string) => {
      const newFoldersOpen = updateFolders.update(file, foldersOpen)
      setFoldersOpen(newFoldersOpen)
    }
    return {
      update,
    }
  }

  const handleRootFolderIsOpen = () => {
    insertCookie.insert({ name: 'rootFolderIsOpen', value: !rootFolderIsOpen })
    setRootFolderIsOpen((state) => !state)
  }

  const handleVscodeMinimize = () => {
    const update = () => {
      vscodeMinimize.update(vscodeIsMinimize)
      setVscodeIsMinimize((state) => !state)
    }
    return {
      update,
    }
  }

  const handleUpdateVscodeOpen = () => {
    const update = () => {
      updateVscodeOpen.update(false)
      setVscodeIsMinimize(false)
      insertCookie.insert({ name: 'vscodeIsMinimize', value: false })
      setVscodeIsOpen(false)
    }

    return {
      update,
    }
  }
  const handleCookies = (cookies: any) => {
    const {
      foldersOpen,
      filersOpen,
      filerOpen,
      rootFolderIsOpen,
      viewFilers,
      vscodeIsMinimize,
      vscodeIsOpen,
    } = cookies

    if (foldersOpen) {
      setFoldersOpen(JSON.parse(foldersOpen))
    }
    if (filersOpen) {
      setFilersOpen(JSON.parse(filersOpen))
    }
    if (filerOpen) {
      setFilerOpen(JSON.parse(filerOpen))
    }
    if (rootFolderIsOpen) {
      setRootFolderIsOpen(JSON.parse(rootFolderIsOpen))
    }
    if (viewFilers) {
      setViewFilers(JSON.parse(viewFilers))
    }
    if (vscodeIsMinimize) {
      setVscodeIsMinimize(JSON.parse(vscodeIsMinimize))
    }
    if (vscodeIsOpen) {
      setVscodeIsOpen(JSON.parse(vscodeIsOpen))
    }
  }
  useEffect(() => {
    handleCookies(getCookies())
  }, [])
  return (
    <VscodeContext.Provider
      value={{
        foldersOpen,
        handleUpdateFoldersOpen: handleUpdateFolders(),
        filersOpen,
        handleUpdateFile: handleUpdateFileOpen(),
        handleUpdateFilersOpen: handleUpdateFilersOpen(),
        rootFolderIsOpen,
        handleRootFolderIsOpen,
        filerOpen,
        viewFilers,
        handleViewFilers,
        vscodeIsMinimize,
        handleVscodeMinimize: handleVscodeMinimize(),
        vscodeIsOpen,
        handleUpdateVscodeOpen: handleUpdateVscodeOpen(),
      }}
    >
      {children}
    </VscodeContext.Provider>
  )
}

export const useVscodeContext = () => useContext(VscodeContext)
