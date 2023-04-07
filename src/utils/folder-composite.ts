import { FolderInterface, Item } from '@/@types/folder'

export class FolderComposite implements FolderInterface {
  private readonly files: Array<Item>
  constructor() {
    this.files = []
  }
  add(item: FolderInterface | string) {
    if (typeof item === 'string') {
      this.files.push({
        type: 'file',
        value: item,
        index: this.files.length.toString(),
      })
    } else {
      this.files.push({
        type: 'folder',
        value: item,
        index: this.files.length.toString(),
      })
    }
  }
  elements() {
    return this.files
  }
}
