import styles from './projects.module.css'
import { ProjectCard } from '@/components'
import { projectData } from '@/components/constants/project-data'
import { HandlePagination } from '@/utils/handle-pagination-items'
import { useRef, useState } from 'react'
import { ProjectCardProps } from '@/components/layouts/card/@types'
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'

const PagesProjectsProjects = () => {
  const listItems = new HandlePagination(projectData, 8)
  const page = useRef<number>(1)
  const [list, setList] = useState<ProjectCardProps[]>(
    listItems.pagination(page.current)
  )
  const handleNextPage = () => {
    if (list.length === 8) {
      const newList = listItems.pagination(page.current + 1)
      page.current += 1
      setList(newList)
    }
  }

  const handlePrevPage = () => {
    if (page.current !== 1) {
      const nextPage = page.current - 1
      const newList = listItems.pagination(nextPage)
      page.current -= 1
      setList(newList)
    }
  }

  return (
    <main className={styles.container}>
      <section className={styles.content}>
        {list.length > 0 &&
          list.map((props) => <ProjectCard key={Math.random()} {...props} />)}
      </section>
      <section className={styles.actions}>
        <button onClick={handlePrevPage}>
          {' '}
          <VscChevronLeft size={30} strokeWidth={1.5} color="#ffffff99" />
        </button>
        <p>
          {page.current} / {Math.ceil(listItems.length() / 8)}
        </p>
        <button onClick={handleNextPage}>
          {' '}
          <VscChevronRight size={30} strokeWidth={1.5} color="#ffffff99" />{' '}
        </button>
      </section>
    </main>
  )
}

export default PagesProjectsProjects
