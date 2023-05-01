import dynamic from 'next/dynamic'
import { memo } from 'react'
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
  return (
    <section style={{ height: 'calc(100vh - 120px)', overflow: 'auto' }}>
      <Component />
    </section>
  )
}

export default memo(DynamicComponent)
