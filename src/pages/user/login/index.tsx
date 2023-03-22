import Head from 'next/head'
import LoginContainer from '@/features/user/containers/login/LoginContainer'

export default function Home() {
  return (
    <>
      <Head>
        <title> Login </title>
      </Head>
      <LoginContainer />
    </>
  )
}
