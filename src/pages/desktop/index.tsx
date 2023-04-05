import DesktopContainer from '@/features/desktop/containers/DesktopContainer'
import { GetServerSideProps } from 'next'
import nookies from 'nookies'

interface Props {
  vscodeIsOpen: string
}
const index = ({ vscodeIsOpen }: Props) => {
  return <DesktopContainer vscodeIsOpen={vscodeIsOpen} />
}
export default index

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let vscode = nookies.get(ctx).vscode
  if (!vscode) {
    vscode = JSON.stringify({ vscodeIsOpen: 'false' })
    nookies.set(ctx, 'vscode', vscode)
    return {
      props: {
        vscodeIsOpen: 'false',
      },
    }
  }
  const vscodeIsOpen =
    JSON.parse(nookies.get(ctx).vscode).vscodeIsOpen === 'true'
      ? 'true'
      : 'false'
  return {
    props: {
      vscodeIsOpen,
    },
  }
}
