export interface FolderInterface {
  elements: () => Array<string | FolderInterface>
  add: (item: FolderInterface | string) => void
}
