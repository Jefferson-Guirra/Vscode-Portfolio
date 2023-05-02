import dynamic from 'next/dynamic'
import { memo } from 'react'

interface Props {
  name: string
}
const DynamicComponent = ({ name }: Props) => {
  const Component = dynamic(() => import(`./${name}`), {
    loading: () => <p>...loading</p>,
  })
  return (
    <section style={{ height: 'calc(100vh - 120px)', overflow: 'auto' }}>
      <Component />
    </section>
  )
}

export default memo(DynamicComponent)
