import { GetServerSideProps } from 'next'
import DesktopContainer from '../features/desktop/containers/DesktopContainer'
import nookies from 'nookies'

interface Props {
  vscodeIsOpen: string
}

const Home = ({ vscodeIsOpen }: Props) => {
  return <DesktopContainer vscodeIsOpen={vscodeIsOpen} />
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const vscodeCookie = nookies.get(ctx).vscodeIsOpen

  return {
    props: {
      vscodeIsOpen: vscodeCookie === 'true' ? 'true' : 'false',
    },
  }
}

export default Home
