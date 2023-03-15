import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderContainer from '../components/header/header-container'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderContainer />
      <Component {...pageProps} />
    </>
  )
}
