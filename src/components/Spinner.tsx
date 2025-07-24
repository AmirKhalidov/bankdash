import React from "react";
import styles from "../styles/Spinner.module.css";

interface SpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
  message?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "medium",
  color = "#1814F3",
  message = "Loading...",
}) => {
  return (
    <div className={styles.spinnerContainer}>
      <div
        className={`${styles.spinner} ${styles[size]}`}
        style={{ borderTopColor: color }}
      />
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Spinner;
