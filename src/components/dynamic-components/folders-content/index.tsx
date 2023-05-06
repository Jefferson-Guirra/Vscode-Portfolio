import dynamic from 'next/dynamic'
import { memo } from 'react'
import { Loading } from '@/components/helpers/loading/Loading'
interface Props {
  name: string
}
const DynamicComponent = ({ name }: Props) => {
  const Component = dynamic(() => import(`./${name}`), {
    loading: () => <Loading />,
  })
  return <Component />
}

export default memo(DynamicComponent)
