import styles from './styles.module.css'
import { MdMinimize, MdClose } from 'react-icons/md'
import { BiExpandAlt } from 'react-icons/bi'
import Link from 'next/link'
import { useVscodeContext } from '@/context/vscode/vscode'
import { useRouter } from 'next/router'

export const HeaderDesktopApplications = () => {
  const { handleVscodeMinimize, handleUpdateVscodeOpen } = useVscodeContext()
  const { filerOpen } = useVscodeContext()
  const pathName = useRouter().asPath

  const handleCloseVscode = () => {
    handleUpdateVscodeOpen.update(false)
  }

  const handleExpand = () => {
    handleVscodeMinimize.update(true)
  }
  const handleMinimize = () => {
    handleVscodeMinimize.update(false)
  }
  return (
    <header className={styles.header}>
      <article className={styles.actions}>
        <Link onClick={handleCloseVscode} href="/" className={styles.icons}>
          <MdClose size={15} color="#000000" />
        </Link>

        <Link href="/" className={styles.icons} onClick={handleMinimize}>
          <MdMinimize size={15} color="#000000" />
        </Link>

        <Link
          href={pathName === '/vscode' ? '/' : 'vscode'}
          className={styles.icons}
          onClick={handleExpand}
        >
          <BiExpandAlt size={15} color="#000000" />
        </Link>
      </article>
      <div className={styles.title}>
        <h4>{filerOpen.value}-vscode-portfolio-Visual Studio Code</h4>
      </div>
    </header>
  )
}
