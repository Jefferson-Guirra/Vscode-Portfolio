export type ReturnUseForm = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
  erro: string
  validate: () => boolean
  onBlur: () => boolean
  name: string
  type: string
  placeholder: string
}

export type UseForm = (type: string | boolean) => ReturnUseForm
