import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
}
