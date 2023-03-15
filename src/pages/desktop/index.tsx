import React from 'react'
import styles from '../../styles/desktop.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

const index = () => {
  return (
    <>
      <Head>
        <title> Desktop </title>
      </Head>
      <section className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/">
            <Image
              src="/images/vscode.svg"
              alt=" vscode icon"
              width={24}
              height={24}
            />{' '}
          </Link>
        </nav>
      </section>
    </>
  )
}

export default index
