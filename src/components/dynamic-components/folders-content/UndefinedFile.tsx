import styles from './undefinedFile.module.css'
import Image from 'next/image'
const UndefinedFile = () => {
  return (
    <div className={styles.content}>
      <Image
        src={'/images/cover-vscode.svg'}
        width={200}
        height={200}
        alt="vscode-icon"
      />
    </div>
  )
}

export default UndefinedFile
