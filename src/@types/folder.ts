export interface Item {
  type: string
  value: string | FolderInterface
  index: string
  path?: string[]
}
export interface FolderInterface {
  elements: () => Array<Item>
  add: (item: any) => void
}
