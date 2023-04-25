import { Error } from '@/components'
import styles from './textarea.module.css'

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
      <textarea
        className={styles.textarea}
        cols={cols}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        rows={rows}
      ></textarea>
      {error && <Error error={error} />}
    </>
  )
}
