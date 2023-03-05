import styles from './Header.module.css'
import Contact from '../contact/Contact'

export default function Header() {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.content}>
        <span className={styles.text}>{`{WDS}`}</span>
        <span className={styles.subText}>
          Web Design &<br />
          Programming
        </span>
      </h2>
      <Contact
        phoneNumber="(240) 808-4635"
        email="colton923@gmail.com"
        key={'Contact01'}
      />
    </div>
  )
}
