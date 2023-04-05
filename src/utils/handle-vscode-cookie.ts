import { parseCookies, setCookie } from 'nookies'
import { Vscode } from '@/@types/vscode'

export const cookieIsOpenVscode = (isOpen: string) => {
  const vscodeCookie = JSON.parse(parseCookies().vscode)
  const newVscodeCookie = { ...vscodeCookie } as Vscode
  newVscodeCookie.vscodeIsOpen = isOpen
  setCookie(null, 'vscode', JSON.stringify(newVscodeCookie))
}
