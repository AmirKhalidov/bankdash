import { NavLink } from "react-router";
import styles from "../styles/Sidebar.module.css";
import { IoHome } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import { IoCashOutline } from "react-icons/io5";
import { IoCardOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdOutlineSettings } from "react-icons/md";
import Logo from "../assets/Logo.png";

export default function Sidebar() {
  return (
    <nav>
      <NavLink className={styles.logo} to="/">
        <img src={Logo} alt="logo" />
      </NavLink>

      <ul className={styles.navList}>
        <li>
          <NavLink className={styles.listItem} to="/">
            {({ isActive }) => (
              <>
                <IoHome
                  className={
                    isActive ? `${styles.icon} ${styles.active}` : styles.icon
                  }
                />
                <p
                  className={
                    isActive
                      ? `${styles.listItemTitle} ${styles.active}`
                      : styles.listItemTitle
                  }
                >
                  Dashboard
                </p>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.listItem} to="/transactions">
            {({ isActive }) => (
              <>
                <FaMoneyBillTransfer
                  className={
                    isActive ? `${styles.icon} ${styles.active}` : styles.icon
                  }
                />
                <p
                  className={
                    isActive
                      ? `${styles.listItemTitle} ${styles.active}`
                      : styles.listItemTitle
                  }
                >
                  Transactions
                </p>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.listItem} to="/accounts">
            {({ isActive }) => (
              <>
                <BsPersonCircle
                  className={
                    isActive ? `${styles.icon} ${styles.active}` : styles.icon
                  }
                />
                <p
                  className={
                    isActive
                      ? `${styles.listItemTitle} ${styles.active}`
                      : styles.listItemTitle
                  }
                >
                  Accounts
                </p>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.listItem} to="/investments">
            {({ isActive }) => (
              <>
                <IoCashOutline
                  className={
                    isActive ? `${styles.icon} ${styles.active}` : styles.icon
                  }
                />
                <p
                  className={
                    isActive
                      ? `${styles.listItemTitle} ${styles.active}`
                      : styles.listItemTitle
                  }
                >
                  Investments
                </p>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.listItem} to="/credit-cards">
            {({ isActive }) => (
              <>
                <IoCardOutline
                  className={
                    isActive ? `${styles.icon} ${styles.active}` : styles.icon
                  }
                />
                <p
                  className={
                    isActive
                      ? `${styles.listItemTitle} ${styles.active}`
                      : styles.listItemTitle
                  }
                >
                  Credit Cards
                </p>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.listItem} to="/loans">
            {({ isActive }) => (
              <>
                <IoWalletOutline
                  className={
                    isActive ? `${styles.icon} ${styles.active}` : styles.icon
                  }
                />
                <p
                  className={
                    isActive
                      ? `${styles.listItemTitle} ${styles.active}`
                      : styles.listItemTitle
                  }
                >
                  Loans
                </p>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.listItem} to="/services">
            {({ isActive }) => (
              <>
                <RiCustomerService2Fill
                  className={
                    isActive ? `${styles.icon} ${styles.active}` : styles.icon
                  }
                />
                <p
                  className={
                    isActive
                      ? `${styles.listItemTitle} ${styles.active}`
                      : styles.listItemTitle
                  }
                >
                  Services
                </p>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.listItem} to="/privileges">
            {({ isActive }) => (
              <>
                <SiGnuprivacyguard
                  className={
                    isActive ? `${styles.icon} ${styles.active}` : styles.icon
                  }
                />
                <p
                  className={
                    isActive
                      ? `${styles.listItemTitle} ${styles.active}`
                      : styles.listItemTitle
                  }
                >
                  My Privileges
                </p>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.listItem} to="/settings">
            {({ isActive }) => (
              <>
                <MdOutlineSettings
                  className={
                    isActive ? `${styles.icon} ${styles.active}` : styles.icon
                  }
                />
                <p
                  className={
                    isActive
                      ? `${styles.listItemTitle} ${styles.active}`
                      : styles.listItemTitle
                  }
                >
                  Setting
                </p>
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
