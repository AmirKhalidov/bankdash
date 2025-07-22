import styles from "../styles/EditProfile.module.css";
import profileImage from "../assets/settings/Group206.png";

export default function EditProfile() {
  return (
    <div className={`${styles.content} ${styles.active}`} id="content1">
      <form action="" className={styles.content1}>
        <img
          src={profileImage}
          alt="img"
          className={styles.content1__img}
        />

        <div className={styles.col2}>
          <div className={`${styles.yourName} ${styles.inputDiv}`}>
            <label htmlFor="your-name" className={styles.yourName__label}>
              Your Name
            </label>
            <input
              type="text"
              placeholder="Charlene Reed"
              id="your-name"
              className={styles.yourName__input}
            />
          </div>

          <div className={`${styles.email} ${styles.inputDiv}`}>
            <label htmlFor="email" className={styles.email__label}>
              Email
            </label>
            <input
              type="email"
              placeholder="charlenereed@gmail.com "
              id="email"
              className={styles.email__input}
            />
          </div>

          <div className={`${styles.dateBirth} ${styles.inputDiv}`}>
            <label htmlFor="date-birth" className={styles.dateBirth__label}>
              Date of Birth
            </label>
            <input
              type="date"
              placeholder="25 January 1990"
              id="date-birth"
              className={styles.dateBirth__input}
            />
          </div>

          <div className={`${styles.permAddress} ${styles.inputDiv}`}>
            <label htmlFor="perm-address" className={styles.permAddress__label}>
              Permanent Address
            </label>
            <input
              type="text"
              placeholder="San Jose, California, USA"
              id="perm-address"
              className={styles.permAddress__input}
            />
          </div>

          <div className={`${styles.postal} ${styles.inputDiv}`}>
            <label htmlFor="postal" className={styles.postal__label}>
              Postal Code
            </label>
            <input
              type="number"
              placeholder="45962"
              id="postal"
              className={styles.postal__input}
            />
          </div>
        </div>

        <div className={styles.col2}>
          <div className={`${styles.userName} ${styles.inputDiv}`}>
            <label htmlFor="user-name" className={styles.userName__label}>
              User Name
            </label>
            <input
              type="text"
              placeholder="Charlene Reed"
              id="user-name"
              className={styles.userName__input}
              autoComplete="off"
            />
          </div>

          <div className={`${styles.password} ${styles.inputDiv}`}>
            <label htmlFor="password" className={styles.password__label}>
              Password
            </label>
            <input
              type="password"
              placeholder="charlenereed@gmail.com "
              id="password"
              className={styles.password__input}
              autoComplete="new-password"
            />
          </div>

          <div className={`${styles.presAddress} ${styles.inputDiv}`}>
            <label htmlFor="pres-address" className={styles.presAddress__label}>
              Present Address
            </label>
            <input
              type="text"
              placeholder="San Jose, California, USA"
              id="pres-address"
              className={styles.presAddress__input}
            />
          </div>

          <div className={`${styles.city} ${styles.inputDiv}`}>
            <label htmlFor="city" className={styles.city__label}>
              City
            </label>
            <input
              type="text"
              placeholder="San Jose"
              id="city"
              className={styles.city__input}
            />
          </div>

          <div className={`${styles.country} ${styles.inputDiv}`}>
            <label htmlFor="country" className={styles.country__label}>
              Country
            </label>
            <input
              type="text"
              placeholder="USA"
              id="country"
              className={styles.country__input}
            />
          </div>
        </div>

        <button className={styles.content1__btn}>Save</button>
      </form>
    </div>
  );
}
