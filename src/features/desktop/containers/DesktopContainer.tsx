import Head from 'next/head'
import styles from './styles.module.css'
import Desktop from '../pages/Desktop'

interface Props {
  vscodeIsOpen: string
}
const DesktopContainer = ({ vscodeIsOpen }: Props) => {
  return (
    <>
      <Head>
        <title>desktop</title>
        <meta name="description" content="desktop page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Desktop vscodeIsOpen={vscodeIsOpen} />
      </main>
    </>
  )
}

export default DesktopContainer
