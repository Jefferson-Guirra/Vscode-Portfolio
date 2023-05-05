import { CookieProps, InsertCookie } from '../@types/insert-cookie'
import { setCookie } from 'nookies'
export class SetCookie implements InsertCookie {
  insert(cookie: CookieProps) {
    setCookie(null, cookie.name, JSON.stringify(cookie.value), {
      maxAge: 86400,
      path: '/',
    })
  }
}
