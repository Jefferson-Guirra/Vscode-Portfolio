import { FolderInterface, Item } from '../@types/folder'

export class CreateFolder implements FolderInterface {
  private readonly files: Array<Item>
  private readonly folder: string

  constructor(folder: string) {
    this.folder = folder
    this.files = []
  }
  add(item: any) {
    if (typeof item === 'string') {
      this.files.push({
        type: 'file',
        value: item,
        index: this.files.length + this.folder,
      })
    } else {
      this.files.push({
        type: 'folder',
        value: item,
        index: this.files.length + this.folder,
      })
    }
  }
  elements() {
    return this.files
  }
}
