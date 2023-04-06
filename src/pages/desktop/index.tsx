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
  const vscodeCookie = nookies.get(ctx).vscodeIsOpen

  return {
    props: {
      vscodeIsOpen: vscodeCookie === 'true' ? 'true' : 'false',
    },
  }
}
