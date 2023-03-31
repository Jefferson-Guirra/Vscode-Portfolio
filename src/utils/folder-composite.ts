import { FolderInterface } from '@/@types/folder'

export class FolderComposite implements FolderInterface {
  private readonly folders: Array<string | FolderInterface>
  constructor() {
    this.folders = []
  }
  open(value: string) {
    for (const folder of this.folders) {
      const openThisFolder =
        typeof folder !== 'string' ? folder.open(value) : ''
      if (openThisFolder !== '') {
        return openThisFolder
      }
    }
    return ''
  }
  add(item: FolderInterface | string) {
    this.folders.push(item)
  }
  elements() {
    return this.folders
  }
}
