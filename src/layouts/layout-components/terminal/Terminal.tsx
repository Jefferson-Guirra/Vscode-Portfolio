import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import {
  VscTerminalBash,
  VscAdd,
  VscChevronDown,
  VscLayoutCentered,
  VscTrash,
  VscEllipsis,
  VscChevronUp,
  VscChromeClose,
} from 'react-icons/vsc'
export const Terminal = () => {
  return (
    <section className={styles.container}>
      <article className={styles.actions}>
        <div className={styles.titles}>
          <h5>PROBLEMAS</h5>
          <h5>SAÍDA</h5>
          <h5>CONSOLE DE DEPURAÇÃO</h5>
          <h5>TERMINAL</h5>
        </div>
        <div className={styles.icons}>
          <p>
            <VscTerminalBash size={15} color="#eee" />
            npm-Vscode-Portfolio
          </p>
          <p>
            <VscAdd size={17} color="#eee" />
            <VscChevronDown size={13} color="#eee" />
          </p>
          <VscLayoutCentered size={17} />
          <VscTrash size={17} />
          <VscEllipsis size={17} />
          <VscChevronUp size={17} />
          <VscChromeClose size={15} />
        </div>
      </article>
      <article className={styles.link}>
        <p>ready</p>
        <p>-</p>
        <p>started server on 0.0.0.0:3000, </p>
        <Link href="https://my-storage-jefferson.netlify.app/" target="_blank">
          url: https://my-storage-jefferson.netlify.app
        </Link>
      </article>
    </section>
  )
}
