'use client'

import styles from './Elevator.module.css'

export default function Elevator() {
  return (
    <div className={styles.content}>
      <div className={styles.elevator}>
        <p className={styles.text}>
          <span style={{ fontWeight: '1000' }}>Websites and Web Apps</span>
          <br />
          <span className={styles.subText}>
            Providing small businesses automations, applications, or the simple
            business card site for a one-time price.
          </span>
        </p>
      </div>
      {/* <div className={styles.projects}>
        <input
          type="button"
          value="My Projects"
          className={styles.projText}
          onClick={() => {
            window.location.href = '/projects'
          }}
        />
      </div> */}
    </div>
  )
}
