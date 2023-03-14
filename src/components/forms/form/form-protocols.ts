import { ReturnUseForm } from '../../../hooks/use-form-protocols'

export interface FormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  inputs: ReturnUseForm[]
  button: string
  linkProps: {
    text: string
    router: string
  } | null
}
