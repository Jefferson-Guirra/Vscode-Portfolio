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
      componentName +=
        name.replace('portfoliosrc', '')[0].toUpperCase() + name.substr(1)
    }
    return componentName
  }
  return 'Undefined'
}
const Vscode = () => {
  const { filerOpen } = useVscodeContext()
  const componentName = getComponentName(filerOpen.path as string[])
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita
        consequatur voluptatibus ut praesentium alias! Excepturi esse quasi ea
        nobis iusto ipsa facere commodi. Aliquam officiis praesentium
        repudiandae accusamus aut! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Necessitatibus doloremque ipsum dicta facere? Alias
        aspernatur dolores placeat quaerat natus sint quas voluptatum
        accusantium, est itaque omnis impedit iste facilis? Mollitia. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate modi
        rerum ab corporis dolorem. Corporis quaerat, illum, fuga id repudiandae
        iusto at eos alias omnis accusamus, quasi sint laboriosam autem!
      </p>
      <DynamicComponent name={componentName} />
    </>
  )
}

export default Vscode
