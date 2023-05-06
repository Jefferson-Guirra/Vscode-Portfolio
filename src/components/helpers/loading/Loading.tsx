import React from 'react'
import { VscLoading } from 'react-icons/vsc'
import styles from './styles.module.css'
export const Loading = () => {
  return (
    <div className={styles.container}>
      <VscLoading size={70} color="#fff" />
    </div>
  )
}
