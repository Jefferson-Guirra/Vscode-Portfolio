import { VscodeProvider } from './vscode/vscode'

interface Props {
  children: JSX.Element
}
export const AppProvider = ({ children }: Props) => {
  return <VscodeProvider>{children}</VscodeProvider>
}
