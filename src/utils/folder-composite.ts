import { FolderInterface } from '@/@types/folder'

export class FolderComposite implements FolderInterface {
  private readonly folders: Array<string | FolderInterface>
  constructor() {
    this.folders = []
  }
  add(item: FolderInterface | string) {
    this.folders.push(item)
  }
  elements() {
    return this.folders
  }
}
