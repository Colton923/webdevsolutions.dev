import styles from './Background.module.css'
import { BackgroundProps } from '../../types/props'
import Image from 'next/image'

export default function Background(props: BackgroundProps) {
  return (
    <div className={styles.background}>
      {props.image ? (
        <Image
          src={props.image}
          alt="props.image"
          fill={true}
          className={styles.image}
          quality={100}
        />
      ) : null}
    </div>
  )
}
