import { FolderInterface, Item } from '../@types/folder'

const getIndex = (array: string[]): string => {
  let index = ''
  for (const file of array) {
    index += file
  }
  return index
}
export class CreateFolder implements FolderInterface {
  private readonly files: Array<Item>
  private readonly folder: string
  public path: string[]

  constructor(folder: string) {
    this.folder = folder
    this.files = []
    this.path = []
  }
  add(item: any) {
    if (typeof item === 'string') {
      this.files.push({
        type: 'file',
        value: item,
        index: getIndex([...this.path, item]),
        path: [...this.path, item],
      })
    } else {
      item.path = [...this.path, item.folder]
      this.files.push({
        type: 'folder',
        value: item,
        index: getIndex([...this.path, item.folder]),
      })
    }
  }
  elements() {
    return this.files
  }
}
