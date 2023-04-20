import { createContext, useState, useEffect, useContext } from 'react'
import { parseCookies } from 'nookies'
import { handleCookie } from '../factories/handle-cookie'
import { UpdateFoldersOpen, UpdateFile, UpdateFilersOpen, File } from '@/@types'
interface VscodeProps {
  updateFoldersOpen: UpdateFoldersOpen
  handleRootFolderIsOpen: () => void
  foldersOpen: string[]
  filersOpen: File[]
  filerOpen: File
  handleUpdateFile: UpdateFile
  updateFilersOpen: UpdateFilersOpen
  rootFolderIsOpen: boolean
}

const VscodeContext = createContext({} as VscodeProps)

interface PropsProvider {
  children: JSX.Element
}
export const VscodeProvider = ({ children }: PropsProvider) => {
  const [foldersOpen, setFoldersOpen] = useState<string[]>([])
  const [filersOpen, setFilersOpen] = useState<File[]>([])
  const [filerOpen, setFilerOpen] = useState<File>({} as File)
  const [rootFolderIsOpen, setRootFolderIsOpen] = useState<boolean>(false)

  const { updateFile, updateFilers, updateFolders, insertCookie } =
    handleCookie()

  const updateFileOpen = () => {
    const update = (file: File) => {
      const newOpenFile = updateFile.update(file)
      if (newOpenFile.index !== file.index) {
        setFilerOpen(newOpenFile)
      }
    }
    return {
      update,
    }
  }

  const updateFilersOpen = () => {
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
  useEffect(() => {
    const { foldersOpen, filersOpen, filerOpen, rootFolderIsOpen } =
      parseCookies()

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
  }, [])
  return (
    <VscodeContext.Provider
      value={{
        foldersOpen,
        updateFoldersOpen: handleUpdateFolders(),
        filersOpen,
        handleUpdateFile: updateFileOpen(),
        updateFilersOpen: updateFilersOpen(),
        rootFolderIsOpen,
        handleRootFolderIsOpen,
        filerOpen,
      }}
    >
      {children}
    </VscodeContext.Provider>
  )
}

export const useVscodeContext = () => useContext(VscodeContext)
