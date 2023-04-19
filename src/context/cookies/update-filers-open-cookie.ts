import { InsertCookie } from '../@types/insert-cookie'
import { UpdateFilersOpen } from '../@types/update-filers-open'
import { File } from '@/@types'

export class UpdateFilers implements UpdateFilersOpen {
  constructor(private readonly insertCookie: InsertCookie) {}
  add(file: File, filers: File[]) {
    if (!filers.find((item) => item.index === file.index)) {
      const newFilers = [...filers, file]
      this.insertCookie.insert({ name: 'filersOpen', value: newFilers })
      return newFilers
    }
    return filers
  }
  close(file: File, filers: File[]) {
    const newFilersOpen = filers.filter((item) => item.index !== file.index)
    this.insertCookie.insert({ name: 'filersOpen', value: newFilersOpen })
    return newFilersOpen
  }
}
