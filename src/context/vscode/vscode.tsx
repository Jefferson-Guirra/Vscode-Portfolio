import { createContext, useState, useEffect, useContext } from 'react'
import { UpdateFilersOpen, File } from '@/@types'
import { parseCookies, setCookie } from 'nookies'
import { UpdateFile } from '@/@types/update-file'
import { handleCookie } from '../factories/handle-cookie'
interface VscodeProps {
  updateFoldersOpen: (value: string) => void
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

  const { updateFile, updateFilers, insertCookie } = handleCookie()

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

  const updateFoldersOpen = (value: string) => {
    if (foldersOpen.includes(value)) {
      const newFolder = foldersOpen.filter((item) => item !== value)
      insertCookie.insert({ name: 'foldersOpen', value: newFolder })
      setFoldersOpen(newFolder)
    } else {
      setCookie(null, 'foldersOpen', JSON.stringify([...foldersOpen, value]))
      setFoldersOpen([...foldersOpen, value])
    }
  }

  const handleRootFolderIsOpen = () => {
    setCookie(null, 'rootFolderIsOpen', JSON.stringify(!rootFolderIsOpen))
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
        updateFoldersOpen,
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
