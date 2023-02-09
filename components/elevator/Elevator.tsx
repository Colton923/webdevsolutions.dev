import styles from './Elevator.module.css'
import { ElevatorProps } from '../../types/props'

export default function Elevator(props: ElevatorProps) {
  const { pitch } = { ...props }
  return (
    <div className={styles.elevator}>
      <p className={styles.text}>{pitch}</p>
    </div>
  )
}
