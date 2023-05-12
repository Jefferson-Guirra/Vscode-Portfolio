import styles from './styles.module.css'
import Desktop from '../pages/Desktop'
import { FiCoffee } from 'react-icons/fi'

const DesktopContainer = () => {
  return (
    <>
      <main className={styles.container}>
        <Desktop />
      </main>
      <div className={styles['cover-img']}>
        <div className={styles['cover-content']}>
          <div className={styles.svg}>
            <FiCoffee size={90} />
          </div>
        </div>
      </div>
    </>
  )
}

export default DesktopContainer
