import styles from "../styles/Header.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import avatar from "../assets/avatar.png";
import { Link, useLocation } from "react-router";
import { logout } from "../services/firebase";
import { CiLogout } from "react-icons/ci";

const getPageTitle = (pathname: string): string => {
  const titleMap: Record<string, string> = {
    "/": "Overview",
    "/transactions": "Transactions",
    "/accounts": "Accounts",
    "/investments": "Investments",
    "/credit-cards": "Credit Cards",
    "/loans": "Loans",
    "/services": "Services",
    "/privileges": "My Privileges",
    "/settings": "Settings",
  };

  return titleMap[pathname] || "Overview";
};

export default function Header() {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  return (
    <header>
      <h2>{pageTitle}</h2>
      <div className={styles.btns}>
        <div className={styles.search}>
          <IoSearchOutline className={styles.searchIcon} />
          <input type="text" placeholder="Search for something" name="search" />
        </div>
        <Link to="/settings" className={styles.navButton}>
          <IoSettingsOutline className={styles.iconNavSettings} />
        </Link>
        <button className={styles.navButton} onClick={logout}>
          <CiLogout className={styles.iconNavNotification} />
        </button>
        <Link to="/settings" className={styles.navButtonProfile}>
          <img src={avatar} alt="picture" className={styles.profilePic} />
        </Link>
      </div>
    </header>
  );
}
