import { useSelector } from "react-redux";
import styles from "../styles/Security.module.css";
import Toggle from "./Toggle";
import { useState } from "react";
import type { RootState } from "../redux/store";
import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { updateSecurity } from "../redux/operations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Security() {
  const { loading, security } = useSelector(
    (state: RootState) => state.settings
  );

  const dispatch = useDispatch<AppDispatch>();

  const [form, setForm] = useState({
    twoFactorAuth: security?.twoFactorAuth || false,
    currentPassword: security?.currentPassword || "",
    newPassword: security?.newPassword || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggle = (value: boolean) => {
    setForm((prev) => ({
      ...prev,
      twoFactorAuth: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(updateSecurity(form));
      toast.success("Security settings updated successfully!");
    } catch {
      toast.error("Failed to update security settings.");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2500} />
      {loading && <Spinner />}
      {!loading && (
        <div className={styles.content} id="content3">
          <form action="" className={styles.content3} onSubmit={handleSubmit}>
            <div className={styles.factor2}>
              <p className={styles.factor2__text}>Two-factor Authentication</p>
              <div className={styles.factor2__item}>
                <Toggle checked={form.twoFactorAuth} onChange={handleToggle} />
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
                name="currentPassword"
                type="password"
                className={styles.currPassword__input}
                placeholder="********"
                value={form.currentPassword}
                onChange={handleChange}
              />
            </div>

            <div className={styles.newPassword}>
              <label htmlFor="" className={styles.newPassword__label}>
                New Password
              </label>
              <input
                name="newPassword"
                type="password"
                className={styles.newPassword__input}
                placeholder=""
                value={form.newPassword}
                onChange={handleChange}
              />
            </div>

            <div className={styles.saveBtn__wrapper}>
              <button className={styles.saveBtn}>Save</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
