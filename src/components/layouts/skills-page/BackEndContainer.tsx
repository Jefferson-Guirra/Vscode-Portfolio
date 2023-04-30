import { SkillCard } from '../card/card-skills/SkillCard'
import styles from './back-end.module.css'

export const BackEndContainer = () => {
  return (
    <main className={styles.container}>
      <section className={styles.title}>
        <h2>Back-end</h2>
      </section>
      <div className={` ${styles.node} ${styles['back-end-node']}`}>
        <span className={styles.line}></span>
      </div>
      <section className={`${styles.child} ${styles['back-end-child']}`}>
        <SkillCard
          title="Nodejs"
          techs={['Express', 'Autenticação-JWT']}
          width={270}
          height={230}
        />
        <SkillCard
          title="Tolls"
          techs={['Postman', 'Insomnia']}
          width={220}
          height={200}
        />
      </section>
    </main>
  )
}
