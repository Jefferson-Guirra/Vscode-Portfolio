import { FolderInterface } from '../@types/folder'

export class MakeFolderElement implements FolderInterface {
  private readonly files: Array<FolderInterface | string>
  private readonly index: number
  private readonly folder: string

  constructor(folder: string) {
    this.folder = folder
    this.index = Math.random()
    this.files = []
  }
  open(value: unknown) {
    if (value === this.folder) {
      return this.folder
    }
    return ''
  }
  add(item: any) {
    this.files.push(item)
  }
  elements() {
    return this.files
  }
}
