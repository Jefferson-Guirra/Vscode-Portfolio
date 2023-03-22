import React from 'react'
import Head from 'next/head'
import GlobalUserContainer from '../GlobalUserContainer'
import Login from '../../pages/Login'

const LoginContainer = () => {
  return (
    <>
      <Head>
        <title>login</title>
        <meta name="description" content="Login user page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalUserContainer>
        <Login />
      </GlobalUserContainer>
    </>
  )
}

export default LoginContainer
