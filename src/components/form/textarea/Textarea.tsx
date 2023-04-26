import { Error } from '@/components'
import * as C from './textarea'

interface Props {
  value: string
  onChange: ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => void
  onBlur: () => void
  validate: () => void
  cols: number
  rows: number
  id: string
  erro: string
}
export const Textarea = ({
  value,
  onChange,
  onBlur,
  cols,
  rows,
  id,
  erro,
}: Props) => {
  return (
    <>
      <C.textarea
        cols={cols}
        name={id}
        value={value}
        error={erro !== ''}
        onChange={onChange}
        onBlur={onBlur}
        rows={rows}
      ></C.textarea>
      <Error error={erro} />
    </>
  )
}
