/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/globals.css'
import PageWithLayoutType from '@/layouts/@types'
import HeaderContainer from '../components/header/header-container'
import React from 'react'
import { AppProvider } from '@/context'

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}

export default function App({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout ? Component.layout : React.Fragment

  return (
    <>
      <HeaderContainer />
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  )
}
