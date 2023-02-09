import styles from './Contact.module.css'
import { ContactProps } from '../../types/props'
import Link from 'next/link'

export default function Contact(props: ContactProps) {
  const { phoneNumber, email } = { ...props }

  return (
    <div className={styles.contact}>
      <h2 className={styles.contactTitle} id="dontfuckingtouchthisprettier">
        Contact Us
      </h2>
      <div className={styles.contactInfo}>
        <p className={styles.sixtyNine}>
          {phoneNumber ? (
            <Link href={`tel:${phoneNumber}`}> {phoneNumber}</Link>
          ) : null}
          {email ? <Link href={`mailto:${email}`}> {email}</Link> : null}
        </p>
      </div>
    </div>
  )
}
