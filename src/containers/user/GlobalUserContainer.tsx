import React from 'react'
import { BiUser } from 'react-icons/bi'
import styles from './styles.module.css'

interface Props {
  children: JSX.Element
}

const UserPage = ({ children }: Props) => {
  return (
    <main className={styles.container}>
      <article className={styles.contentBox}>
        <div className={styles.content}>
          <span className={styles.userIcon}>
            <BiUser size={64} />
          </span>
          {children}
        </div>
      </article>
    </main>
  )
}

export default UserPage
