import styles from '../styles/App.module.css'
import Background from '../components/background/Background'
import Elevator from '../components/elevator/Elevator'
import Contact from '../components/contact/Contact'
import GetProps from '../utils/GetProps'
export default function Index() {
  const props = GetProps()
  const { BackgroundProps, ElevatorProps, ContactProps } = { ...props }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.backgroundWrapper}>
        <Background {...BackgroundProps} />
      </div>
      <div className={styles.elevatorWrapper}>
        <Elevator {...ElevatorProps} />
      </div>
      <div className={styles.contactWrapper}>
        <Contact {...ContactProps} />
      </div>
    </div>
  )
}
