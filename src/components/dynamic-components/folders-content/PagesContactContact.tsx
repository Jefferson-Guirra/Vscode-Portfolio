import styles from './contact.module.css'
import { ContactForm } from '@/components'
import Link from 'next/link'
interface SocialsMedia {
  name: string
  title: string
  link: string
}
const getSocialsMedia = (): SocialsMedia[] => {
  return [
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/jefferson-guirra-developer/',
      title: 'jefferson-guirra-developer',
    },
    {
      name: 'Github',
      link: 'https://github.com/Jefferson-Guirra',
      title: 'Jefferson-Guirra',
    },
    {
      name: 'Email',
      link: 'jeffersonguirra8@gmail.com',
      title: 'jeffersonguirra8@gmail.com',
    },
    {
      name: 'Whatsapp',
      link: 'https://api.whatsapp.com/send?phone=557491941581',
      title: '+55(74)9194-1581',
    },
  ]
}
const PagesContactContact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <h2>Socials Media</h2>
        <p className={styles.line}>
          <span>const </span>
          <span>socials =</span> &#123;
        </p>
        {getSocialsMedia().map((media) => (
          <p key={media.name} className={styles.line}>
            &nbsp;&nbsp;&nbsp;{media.name}: &nbsp;&nbsp;
            <Link href={media.link} target="_blank">
              <span>{`'`}</span>
              {media.title}
              <span>{`'`}</span>
            </Link>{' '}
            ;
          </p>
        ))}
        <p className={styles.line}></p>
        <p className={styles.line}></p>
        <p className={styles.line}></p>
        <p className={styles.line}></p>
        <p className={styles.line}></p>
        <p className={styles.line}></p>
        <p className={styles.line}></p>
        <p className={styles.line}></p>
        <p className={styles.line}></p>
        <p className={styles.line}></p>
        <p className={styles.line}>&#125;</p>
      </div>
      <ContactForm />
    </div>
  )
}

export default PagesContactContact
