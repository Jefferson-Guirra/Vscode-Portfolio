import * as C from './styles'
interface Props {
  error: string | undefined
}
const Error = ({ error }: Props) => {
  return <C.error>{error}</C.error>
}

export default Error
