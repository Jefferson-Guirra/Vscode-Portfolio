import styles from './styles.module.css'
import { MdMinimize, MdClose } from 'react-icons/md'
import { BiExpandAlt } from 'react-icons/bi'
import Link from 'next/link'
import { setCookie } from 'nookies'
import { useVscodeContext } from '@/context/vscode/vscode'

export const HeaderDesktopApplications = () => {
  const { filerOpen } = useVscodeContext()
  const handleCloseVscode = () => {
    setCookie(null, 'vscodeIsOpen', 'false')
  }
  return (
    <header className={styles.header}>
      <article className={styles.actions}>
        <Link onClick={handleCloseVscode} href="/" className={styles.icons}>
          <MdClose size={15} color="#000000" />
        </Link>
        <Link href="/" className={styles.icons}>
          <MdMinimize size={15} color="#000000" />
        </Link>
        <Link href="/" className={styles.icons}>
          <BiExpandAlt size={15} color="#000000" />
        </Link>
      </article>
      <div className={styles.title}>
        <h4>{filerOpen.value}-vscode-portfolio-Visual Studio Code</h4>
      </div>
    </header>
  )
}
