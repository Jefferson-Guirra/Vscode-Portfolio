import styles from './styles.module.css'
import { MdMinimize, MdClose } from 'react-icons/md'
import { BiExpandAlt } from 'react-icons/bi'
import Link from 'next/link'
import { setCookie } from 'nookies'

export const HeaderDesktopApplications = () => {
  const handleCloseVscode = () => {
    setCookie(null, 'vscodeIsOpen', 'false')
  }
  return (
    <header className={styles.header}>
      <article className={styles.actions}>
        <Link
          onClick={handleCloseVscode}
          href="/desktop"
          className={styles.icons}
        >
          <MdClose size={15} color="#000000" />
        </Link>
        <Link href="/desktop" className={styles.icons}>
          <MdMinimize size={15} color="#000000" />
        </Link>
        <Link href="/" className={styles.icons}>
          <BiExpandAlt size={15} color="#000000" />
        </Link>
      </article>
      <div className={styles.title}>
        <h4>home-vscode-portfolio-Visual Studio Code</h4>
      </div>
    </header>
  )
}
