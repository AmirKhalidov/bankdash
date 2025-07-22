import styles from "../styles/Security.module.css";
import toggleOn from "../assets/settings/Group 269.png";

export default function Security() {
  return (
    <div className={styles.content} id="content3">
      <form action="" className={styles.content3}>
        <div className={styles.factor2}>
          <p className={styles.factor2__text}>Two-factor Authentication</p>
          <div className={styles.factor2__item}>
            <img src={toggleOn} alt="img" className={styles.factor2__switch} />
            <label htmlFor="" className={styles.factor2__label}>
              Enable or disable two factor authentication
            </label>
          </div>
        </div>

        <p className={styles.pass__title}>Change Password</p>

        <div className={styles.currPassword}>
          <label htmlFor="" className={styles.currPassword__label}>
            Current Password
          </label>
          <input
            type="password"
            className={styles.currPassword__input}
            placeholder="********"
          />
        </div>

        <div className={styles.newPassword}>
          <label htmlFor="" className={styles.newPassword__label}>
            New Password
          </label>
          <input
            type="password"
            className={styles.newPassword__input}
            placeholder="********"
          />
        </div>

        <div className={styles.saveBtn__wrapper}>
          <button className={styles.saveBtn}>Save</button>
        </div>
      </form>
    </div>
  );
}
