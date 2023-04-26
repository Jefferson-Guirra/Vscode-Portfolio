export type ReturnUseForm = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  onChange: ({ target }: React.ChangeEvent<HTMLElement>) => void
  erro: string
  clearState: () => void
  validate: () => boolean
  onBlur: () => boolean
}

export type UseForm = (type: string | boolean) => ReturnUseForm
