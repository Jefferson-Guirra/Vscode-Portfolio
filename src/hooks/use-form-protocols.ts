export type ReturnUseForm = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
  erro: string
  validate: () => boolean
  onBlur: () => boolean
}

export type UseForm = (type: string | boolean) => ReturnUseForm
