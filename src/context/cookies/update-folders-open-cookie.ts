import { UpdateFoldersOpen } from '../@types/update-folders-open'
import { InsertCookie } from '../@types/insert-cookie'

export class UpdateFolders implements UpdateFoldersOpen {
  constructor(private readonly insertCookie: InsertCookie) {}
  update(folderIndex: string, foldersIndex: string[]) {
    if (foldersIndex.includes(folderIndex)) {
      const newFolders = foldersIndex.filter((index) => index !== folderIndex)
      this.insertCookie.insert({ name: 'foldersOpen', value: newFolders })
      return newFolders
    } else {
      this.insertCookie.insert({
        name: 'foldersOpen',
        value: [...foldersIndex, folderIndex],
      })
      return [...foldersIndex, folderIndex]
    }
  }
}
