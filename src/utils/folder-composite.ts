import { FolderInterface, Item } from '@/@types/folder'

export class FolderComposite implements FolderInterface {
  private readonly files: Array<Item>
  constructor() {
    this.files = []
  }
  add(item: any) {
    if (typeof item === 'string') {
      this.files.push({
        type: 'file',
        value: item,
        index: this.files.length.toString(),
        path: [item],
      })
    } else {
      item.path = [item.folder]
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
