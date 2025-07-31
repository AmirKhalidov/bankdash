import { NavLink, Outlet } from "react-router";
import styles from "../styles/Settings.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { fetchSettingsData } from "../redux/operations";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
export default function Settings() {
  const { loading } = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSettingsData());
  }, [dispatch]);

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
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
      )}
    </>
  );
}
