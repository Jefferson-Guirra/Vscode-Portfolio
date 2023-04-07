import { createContext, useState, useEffect, useContext } from 'react'
import { parseCookies, setCookie } from 'nookies'

interface VscodeProps {
  updateFoldersOpen: (value: string) => void
  foldersOpen: string[]
}

const VscodeContext = createContext({} as VscodeProps)

interface PropsProvider {
  children: JSX.Element
}
export const VscodeProvider = ({ children }: PropsProvider) => {
  const [foldersOpen, setFoldersOpen] = useState<string[]>([])

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
  useEffect(() => {
    const foldersOpenCookie = parseCookies().foldersOpen
    if (foldersOpenCookie) {
      setFoldersOpen(JSON.parse(foldersOpenCookie))
    }
  }, [])
  return (
    <VscodeContext.Provider value={{ foldersOpen, updateFoldersOpen }}>
      {children}
    </VscodeContext.Provider>
  )
}

export const useVscodeContext = () => useContext(VscodeContext)
