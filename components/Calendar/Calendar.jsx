import React from "react";
import styles from "../../styles/MainLayout.module.css";

const Calendar = () => {
  return (
    <div className={styles.landUseMargin}>
      <h2>North Portland Events</h2>
      <div className={styles.landUseTable}>
        <iframe
          width="100%"
          height="100%"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&mode=AGENDA&showCalendars=0&src=MDg4ZjQ2ZDk2YTk5YjUzZmIzYWJlZGVjNGJiZmE4ZjY0YTlkYmM5MGQ2ZjI0NTNiMWE2MWZlOTU5ZjZkNGY2ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Calendar;
