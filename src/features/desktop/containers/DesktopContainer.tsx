import Head from 'next/head'
import styles from './styles.module.css'
import Desktop from '../pages/Desktop'

const DesktopContainer = () => {
  return (
    <>
      <Head>
        <title>desktop</title>
        <meta name="description" content="desktop page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Desktop />
      </main>
    </>
  )
}

export default DesktopContainer
