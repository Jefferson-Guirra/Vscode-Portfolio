import { SkillCard } from '../card/card-skills/SkillCard'
import styles from './back-end.module.css'
import { DiNodejsSmall } from 'react-icons/di'
import { VscTools } from 'react-icons/vsc'
import { SiJest } from 'react-icons/si'

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
          title="TDD"
          techs={['Jest']}
          width={270}
          hoverIconColor="#99425b"
          height={230}
          Icon={SiJest}
        />
        <SkillCard
          title="Nodejs"
          techs={['Express', 'Autenticação-JWT']}
          Icon={DiNodejsSmall}
          hoverIconColor="#84cc29"
          width={270}
          height={230}
        />
        <SkillCard
          title="Tolls"
          techs={['Postman', 'Insomnia']}
          hoverIconColor="#fff"
          Icon={VscTools}
          width={220}
          height={200}
        />
      </section>
    </main>
  )
}
