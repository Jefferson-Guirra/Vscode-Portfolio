import DynamicComponent from '@/components/dynamic-components/folders-content'
import { useVscodeContext } from '@/context/vscode/vscode'

const filteredPathName = (pathname: string): boolean => {
  if (pathname === 'src' || pathname === 'portfolio') {
    return false
  } else {
    return true
  }
}
const getComponentName = (path: string[]): string => {
  if (path && path.length > 1) {
    const filtered = path.filter((pathname) => filteredPathName(pathname))
    let componentName = ''
    for (const name of filtered) {
      componentName += name[0].toUpperCase() + name.substr(1)
    }
    return componentName
  }
  return 'UndefinedFile'
}
const Vscode = () => {
  const { filerOpen } = useVscodeContext()
  const componentName = getComponentName(filerOpen.path as string[])
  return <DynamicComponent name={componentName} />
}

export default Vscode
