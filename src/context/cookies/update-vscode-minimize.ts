import { InsertCookie } from '../@types/insert-cookie'
import { VscodeMinimize } from '../@types/update-vscode-minimize'

export class UpdateVscodeMinimize implements VscodeMinimize {
  constructor(private readonly insertCookie: InsertCookie) {}

  update(state: boolean) {
    this.insertCookie.insert({ name: 'vscodeIsMinimize', value: !state })
  }
}
