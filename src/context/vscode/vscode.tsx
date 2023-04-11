import { createContext, useState, useEffect, useContext } from 'react'
import { UpdateFilersOpen, File } from '@/@types'
import { parseCookies, setCookie } from 'nookies'

interface VscodeProps {
  updateFoldersOpen: (value: string) => void
  foldersOpen: string[]
  filersOpen: File[]
  filerOpen: File
  updateFilersOpen: UpdateFilersOpen
}

const VscodeContext = createContext({} as VscodeProps)

interface PropsProvider {
  children: JSX.Element
}
export const VscodeProvider = ({ children }: PropsProvider) => {
  const [foldersOpen, setFoldersOpen] = useState<string[]>([])
  const [filersOpen, setFilersOpen] = useState<File[]>([])
  const [filerOpen, setFilerOpen] = useState<File>({} as File)
  const updateFoldersOpen = (value: string) => {
    if (foldersOpen.includes(value)) {
      const newFolder = foldersOpen.filter((item) => item !== value)
      setCookie(null, 'foldersOpen', JSON.stringify(newFolder))
      setFoldersOpen(newFolder)
    } else {
      setCookie(null, 'foldersOpen', JSON.stringify([...foldersOpen, value]))
      setFoldersOpen([...foldersOpen, value])
    }
  }

  class UpdateFilersOPen {
    add(item: File) {
      if (!filersOpen.find((file) => file.index === item.index)) {
        setCookie(null, 'filersOpen', JSON.stringify([...filersOpen, item]))
        setFilersOpen((state) => [...state, item])
      }
    }
    close(item: File) {
      const newFilersOpen = filersOpen.filter(
        (file) => file.index !== item.index
      )
      setCookie(null, 'filersOpen', JSON.stringify(newFilersOpen))
      setFilersOpen(newFilersOpen)
    }
    updateFileOpen(file: File) {
      setCookie(null, 'filerOpen', JSON.stringify(file))
      setFilerOpen(file)
    }
  }

  const updateFilersOpen = new UpdateFilersOPen()
  useEffect(() => {
    const { foldersOpen, filersOpen, filerOpen } = parseCookies()

    if (foldersOpen) {
      setFoldersOpen(JSON.parse(foldersOpen))
    }
    if (filersOpen) {
      setFilersOpen(JSON.parse(filersOpen))
    }
    if (filerOpen) {
      setFilerOpen(JSON.parse(filerOpen))
    }
  }, [])
  return (
    <VscodeContext.Provider
      value={{
        foldersOpen,
        updateFoldersOpen,
        filersOpen,
        updateFilersOpen,
        filerOpen,
      }}
    >
      {children}
    </VscodeContext.Provider>
  )
}

export const useVscodeContext = () => useContext(VscodeContext)
