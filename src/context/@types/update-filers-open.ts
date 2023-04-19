import { File } from '@/@types'
export interface UpdateFilersOpen {
  add: (file: File, filers: File[]) => File[]
  close: (item: File, filers: File[]) => File[]
}
