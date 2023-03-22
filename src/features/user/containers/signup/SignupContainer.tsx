import React from 'react'
import Head from 'next/head'
import GLobalUserContainer from '../GlobalUserContainer'
import Signup from '../../pages/Signup'

const SignupContainer = () => {
  return (
    <>
      <Head>
        <title>signup</title>
        <meta name="description" content="Signup page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GLobalUserContainer>
        <Signup />
      </GLobalUserContainer>
    </>
  )
}

export default SignupContainer
