export interface CookieProps {
  name: string
  value: any
}
export interface InsertCookie {
  insert: (cookie: CookieProps) => void
}
