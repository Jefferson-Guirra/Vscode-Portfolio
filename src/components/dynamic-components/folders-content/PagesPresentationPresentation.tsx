import Lootie from 'lottie-react'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import styles from './presentation.module.css'
import Link from 'next/link'
import programming from '../../../../public/images/programming-computer.json'

const PagesPresentationPresentation = () => {
  return (
    <main className={styles.container}>
      <section className={styles['content-box']}>
        <section className={styles.animation}>
          <Lootie animationData={programming}></Lootie>
        </section>
        <section className={styles.content}>
          <article className={styles.about}>
            <h4>Quem sou</h4>
            <h2>Jefferson Guirra</h2>
            <p className={styles.work}>Frontend Developer</p>
            <p className={styles['about-me']}>
              Meu nome é Iuri Silva, ou “iuricode” (é como me chamam agora) sou
              o criador do eFront, um material de ensino de frontend pela
              internet. Atualmente sou freelancer como Front-end developer e UI
              Designer. Desenvolvo interfaces modernas e de alta qualidade,
              concentrado em performance, animações, responsividade e SEO.
            </p>
          </article>

          <article className={styles.social}>
            <Link href="https://www.linkedin.com/in/jefferson-guirra-developer/">
              <BsLinkedin size={25} />
            </Link>
            <Link href="https://github.com/Jefferson-Guirra">
              <BsGithub size={25} />
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=557491941581">
              <BsWhatsapp size={25} />
            </Link>
          </article>
        </section>
      </section>
    </main>
  )
}

export default PagesPresentationPresentation
