import React from 'react'
import styles from "../../styles/MainLayout.module.css";

const Calendar = () => {
  return (
    <div className={styles.landUseMargin}>
      <h2>Upcoming Arbor Lodge Events</h2>
      <div className={styles.landUseTable}>
        <iframe width='100%' height='100%' src="https://calendar.google.com/calendar/embed?wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=cHVibGljQGFyYm9ybG9kZ2VuZWlnaGJvcmhvb2QuY29t&color=%23039BE5" frameborder="0" ></iframe>
      </div>
    </div >
  )
}

export default Calendar