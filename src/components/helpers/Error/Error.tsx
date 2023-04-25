import * as C from './styles'
interface Props {
  error: string | undefined
}
export const Error = ({ error }: Props) => {
  return <C.error>{error}</C.error>
}
