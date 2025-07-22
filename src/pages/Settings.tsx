import { NavLink, Outlet } from "react-router";
import styles from "../styles/Settings.module.css";

export default function Settings() {
  return (
    <main>
      <section className={styles.settings}>
        <ul className={styles.settings__menu}>
          <li className={styles.settings__menuItem} data-content="content1">
            <NavLink
              to="edit-profile"
              className={({ isActive }) =>
                isActive
                  ? `${styles.settings__menuLink} ${styles.active}`
                  : styles.settings__menuLink
              }
            >
              Edit Profile
            </NavLink>
            <div className={styles.settings__menuItemHover}></div>
          </li>
          <li className={styles.settings__menuItem} data-content="content2">
            <NavLink
              to="preferences"
              className={({ isActive }) =>
                isActive
                  ? `${styles.settings__menuLink} ${styles.active}`
                  : styles.settings__menuLink
              }
            >
              Preferences
            </NavLink>
            <div className={styles.settings__menuItemHover}></div>
          </li>
          <li className={styles.settings__menuItem} data-content="content3">
            <NavLink
              to="security"
              className={({ isActive }) =>
                isActive
                  ? `${styles.settings__menuLink} ${styles.active}`
                  : styles.settings__menuLink
              }
            >
              Security
            </NavLink>
            <div className={styles.settings__menuItemHover}></div>
          </li>
        </ul>

        <Outlet />
      </section>
    </main>
  );
}
