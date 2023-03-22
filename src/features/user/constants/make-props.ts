import { ReturnUseForm } from '@/hooks/use-form-protocols'
import { FormProps } from '../../../components/forms/form/constants/form-props'
export type MakeGlobalProps = (
  inputs: ReturnUseForm[],
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
) => FormProps
