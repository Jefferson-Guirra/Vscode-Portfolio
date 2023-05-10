import DynamicComponent from '@/components/dynamic-components/folders-content'
import { useVscodeContext } from '@/context/vscode/vscode'
import { File } from '@/@types'

const filteredPathName = (pathname: string): boolean => {
  if (pathname === 'src' || pathname === 'portfolio') {
    return false
  } else {
    return true
  }
}
const getComponentName = (file: File): string => {
  if (file.path?.length > 1) {
    const filtered = file.path.filter((pathname) => filteredPathName(pathname))
    let componentName = ''
    for (const name of filtered) {
      componentName += name[0].toUpperCase() + name.substr(1)
    }
    return componentName.replace(/\.\w+/g, '')
  } else {
    return file.index
  }
}
const Vscode = () => {
  const { filerOpen } = useVscodeContext()
  const componentName = getComponentName(filerOpen)
  return <DynamicComponent name={componentName} />
}

export default Vscode
