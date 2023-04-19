import { File } from '@/@types'
import { UpdateFileOpen } from '../@types/update-file-open-cookie'
import { InsertCookie } from '../@types/insert-cookie'

export class UpdateFile implements UpdateFileOpen {
  constructor(private readonly insertCookie: InsertCookie) {}
  update(file: File) {
    this.insertCookie.insert({ name: 'filerOpen', value: file })
    return file
  }
}
