import { SkillCard } from '@/components'
import { DiJavascript1, DiCss3Full } from 'react-icons/di'
import { VscGear } from 'react-icons/vsc'
import styles from './front-end.module.css'

export const FrontEndContainer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>Front-end</h2>
      </div>

      <div className={styles['default-line']}>
        <span className={styles.line}></span>
      </div>

      <div className={styles.html}>
        <h2>HTML</h2>
      </div>

      <div className={`${styles.node} ${styles['html-node']} `}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>

      <article className={`${styles.child} ${styles['html-child']}`}>
        <SkillCard
          width={300}
          height={200}
          title="Css"
          Icon={DiCss3Full}
          hoverIconColor="#33a8da"
          techs={['Saas', 'Styled-components', 'Bootstrap']}
        />
        <SkillCard
          width={300}
          Icon={DiJavascript1}
          height={230}
          title="JavaScript"
          hoverIconColor="#f7df1e"
          techs={['Typescript', 'React', 'Redux', 'Next']}
        />

        <SkillCard
          Icon={VscGear}
          width={300}
          height={200}
          title="CMS"
          hoverIconColor="#eee"
          techs={['Prismic']}
        />
      </article>
    </section>
  )
}
