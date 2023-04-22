import dynamic from 'next/dynamic'
interface Props {
  name: string
}
const DynamicComponent = ({ name }: Props) => {
  const Component = dynamic(async () => {
    if (name.includes('.json')) {
      return import(`./${name.replace('.json', '.tsx')}`).then(
        (mod) => mod.default
      )
    } else {
      return import(`./${name}`).then((mod) => mod.default)
    }
  })
  return <Component />
}

export default DynamicComponent
