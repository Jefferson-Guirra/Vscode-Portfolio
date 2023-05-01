import styles from './projects.module.css'
import { ProjectCard } from '@/components'
import { projectData } from '../../constants/project-data'

const PagesProjectsProjects = () => {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        {projectData.map((props) => (
          <ProjectCard key={props.title} {...props} />
        ))}
      </section>
    </main>
  )
}

export default PagesProjectsProjects
