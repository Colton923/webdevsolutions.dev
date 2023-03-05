import styles from './Contact.module.css'
import { ContactProps } from '../../types/props'
import Link from 'next/link'

export default function Contact(props: ContactProps) {
  const { phoneNumber, email } = { ...props }

  return (
    <div className={styles.content}>
      <span className={styles.title}>
        {phoneNumber ? (
          <Link href={`tel:${phoneNumber}`}> {phoneNumber}</Link>
        ) : null}
      </span>
      <span className={styles.title}>
        {email ? <Link href={`mailto:${email}`}> {email}</Link> : null}
      </span>
    </div>
  )
}
