import React from 'react'
import Clock from '../clock/Clock'
import { ClockProps } from '../../../protocols/clock'
import styles from './header-container.module.css'
import { BsWifi } from 'react-icons/bs'
import { AiFillSound } from 'react-icons/ai'
import { BiBluetooth } from 'react-icons/bi'

const clockProps: ClockProps = {
  language: 'pt-Br',
  dateTimeFormatOptions: {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  },
}

const HeaderContainer = () => {
  return (
    <header className={styles.header}>
      <Clock
        language={clockProps.language}
        dateTimeFormatOptions={clockProps.dateTimeFormatOptions}
      />
      <section className={styles.icons}>
        <BiBluetooth />
        <BsWifi color="#eee" />
        <AiFillSound color="#eee" />
      </section>
    </header>
  )
}

export default HeaderContainer
