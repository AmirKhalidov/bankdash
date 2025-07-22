import toggleOn from "../assets/settings/Group 269.png";
import toggleOf from "../assets/settings/Group 270.png";

import styles from "../styles/Preferences.module.css";
export default function Preferences() {
  return (
    <div className={styles.content} id="content2">
      <form action="" className={styles.content2}>
        <div className={`${styles.currency} ${styles.inputDiv}`}>
          <label htmlFor="currency" className={styles.currency__label}>
            Currency
          </label>
          <input
            type="text"
            placeholder="USD"
            className={styles.currency__input}
            id="currency"
          />
        </div>

        <div className={`${styles.timeZone} ${styles.inputDiv}`}>
          <label htmlFor="time-zone" className={styles.timeZone__label}>
            Time Zone
          </label>
          <input
            type="datetime-local"
            placeholder="(GMT-12:00) International Date Line West"
            className={styles.timeZone__input}
            id="time-zone"
          />
        </div>
      </form>

      <div className={styles.notification}>
        <p className={styles.notification__text}>Notification</p>

        <div className={styles.notification__item}>
          <img
            src={toggleOn}
            alt="pic"
            className={styles.notification__checkbox}
          />
          <label className={styles.notification__label}>
            I send or receive digita currency
          </label>
        </div>

        <div className={styles.notification__item}>
          <img
            src={toggleOf}
            alt="pic"
            className={styles.notification__checkbox}
          />
          <label className={styles.notification__label}>
            I receive merchant order
          </label>
        </div>

        <div className={styles.notification__item}>
          <img
            src={toggleOn}
            alt="pic"
            className={styles.notification__checkbox}
          />
          <label className={styles.notification__label}>
            There are recommendation for my account
          </label>
        </div>
      </div>

      <div className={styles.saveBtn__wrapper}>
        <button className={styles.saveBtn}>Save</button>
      </div>
    </div>
  );
}
