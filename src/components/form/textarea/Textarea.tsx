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
  error: string
}
export const Textarea = ({
  value,
  onChange,
  onBlur,
  cols,
  rows,
  id,
  error,
}: Props) => {
  return (
    <>
      <C.textarea
        cols={cols}
        name={id}
        value={value}
        error={error !== ''}
        onChange={onChange}
        onBlur={onBlur}
        rows={rows}
      ></C.textarea>
      <Error error={error} />
    </>
  )
}
