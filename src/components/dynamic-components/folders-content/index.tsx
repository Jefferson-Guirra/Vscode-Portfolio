import dynamic from 'next/dynamic'
import { memo } from 'react'

interface Props {
  name: string
}
const DynamicComponent = ({ name }: Props) => {
  const Component = dynamic(() => import(`./${name}`), {
    loading: () => <p>...loading</p>,
  })
  return <Component />
}

export default memo(DynamicComponent)
