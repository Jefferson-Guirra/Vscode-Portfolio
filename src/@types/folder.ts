export interface FolderInterface {
  open: (value: string) => string
  elements: () => Array<string | FolderInterface>
  add: (item: FolderInterface | string) => void
}
