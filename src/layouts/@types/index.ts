import { NextPage } from 'next'

interface LayoutProps {
  children: JSX.Element
}
type Layout = ({ children }: LayoutProps) => JSX.Element
type PageWithLayoutType = NextPage & { layout: Layout }

export default PageWithLayoutType
