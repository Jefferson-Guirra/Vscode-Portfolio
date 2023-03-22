import { ReturnUseForm } from '@/hooks/use-form-protocols'
import { FormProps } from '../../../components/form/@types/form-props'
export type MakeGlobalProps = (
  inputs: ReturnUseForm[],
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
) => FormProps
