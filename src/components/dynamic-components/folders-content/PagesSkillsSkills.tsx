import { FrontEndContainer, BackEndContainer } from '@/components'
import styles from './skills.module.css'
import { useRef, useState } from 'react'
import { TbArrowsExchange2 } from 'react-icons/tb'
const PagesSkillsSkills = () => {
  const [showFrontEnd, setShowFrontEnd] = useState(true)
  const rotateDeg = useRef(0)

  const handleClick = () => {
    setShowFrontEnd((state) => !state)
    const svgIcon = document.querySelector<HTMLElement>(
      '.change-svg-icon '
    ) as HTMLElement
    if (showFrontEnd) {
      rotateDeg.current = rotateDeg.current + 180
      svgIcon.style.transform = `rotate(${rotateDeg.current.toString()}deg)`
    } else {
      rotateDeg.current = rotateDeg.current - 180
      svgIcon.style.transform = `rotate(${rotateDeg.current.toString()}deg)`
    }
  }

  return (
    <main className={styles.container}>
      <button
        id="change-show-skills"
        className={styles.button}
        onClick={handleClick}
      >
        <TbArrowsExchange2
          className="change-svg-icon"
          size={30}
          color="#ffffff99"
        />
      </button>
      {showFrontEnd && <FrontEndContainer />}
      {!showFrontEnd && <BackEndContainer />}
    </main>
  )
}

export default PagesSkillsSkills
