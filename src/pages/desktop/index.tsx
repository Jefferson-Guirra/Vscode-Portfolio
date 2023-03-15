import React from 'react'
import styles from '../../styles/desktop.module.css'
import Clock from '../../components/header/clock/Clock'
import { ClockProps } from '../../protocols/clock'
import Image from 'next/image'
import Link from 'next/link'

const index = () => {
  const clockProps: ClockProps = {
    language: 'pt-Br',
    dateTimeFormatOptions: {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    },
  }
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Clock
          language={clockProps.language}
          dateTimeFormatOptions={clockProps.dateTimeFormatOptions}
        />
      </header>
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
  )
}

export default index
