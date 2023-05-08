import { InsertCookie } from '../@types/insert-cookie'
import { VscodeOpen } from '../@types/update-vscode-open'

export class UpdateVscodeOpen implements VscodeOpen {
  constructor(private readonly insertCookie: InsertCookie) {}

  update(vscodeIsOpen: boolean) {
    this.insertCookie.insert({ name: 'vscodeIsOpen', value: vscodeIsOpen })
  }
}
