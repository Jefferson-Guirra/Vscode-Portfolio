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
              Meu nome é Jefferson Guirra, ex-estudante de bacharelado em física
              de 23 anos. Sou desenvolvedor Front-end, crio interfaces
              responsivas modernas e de alta qualidade buscando sempre uma ótima
              performance, responsividade e SEO, para me encontrar{' '}
              <Link
                href="https://www.linkedin.com/in/jefferson-guirra-developer/"
                target="_blank"
              >
                LinkedIn
              </Link>
              , para obter mais informações sobre os meus projetos{' '}
              <Link href="https://github.com/Jefferson-Guirra" target="_blank">
                Github
              </Link>
              .
            </p>
          </article>

          <article className={styles.social}>
            <Link
              href="https://www.linkedin.com/in/jefferson-guirra-developer/"
              target="_blank"
            >
              <BsLinkedin size={25} />
            </Link>
            <Link href="https://github.com/Jefferson-Guirra" target="_blank">
              <BsGithub size={25} />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=557491941581"
              target="_blank"
            >
              <BsWhatsapp size={25} />
            </Link>
          </article>
        </section>
      </section>
    </main>
  )
}

export default PagesPresentationPresentation
