import Head from 'next/head'
import styles from './styles.module.css'
import Desktop from '../pages/Desktop'
import { FiCoffee } from 'react-icons/fi'

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
      <div className={styles['cover-img']}>
        <div className={styles['cover-content']}>
          <div className={styles.svg}>
            <FiCoffee size={90} />
          </div>
        </div>
      </div>
    </>
  )
}

export default DesktopContainer
