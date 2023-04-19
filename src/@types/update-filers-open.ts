export interface File {
  type: string
  value: string
  index: string
  path?: string[]
}
export interface UpdateFilersOpen {
  add: (file: File) => void
  close: (file: File) => void
}
