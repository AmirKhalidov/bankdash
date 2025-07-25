import styles from "../styles/EditProfile.module.css";
import profileImage from "../assets/settings/Group206.png";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import Spinner from "./Spinner";
import { useState } from "react";
import { updateEditProfile } from "../redux/operations";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditProfile() {
  const { loading, editProfile } = useSelector(
    (state: RootState) => state.settings
  );
  const dispatch = useDispatch<AppDispatch>();

  const [form, setForm] = useState(editProfile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!form) return;
    const key = e.target.name;
    setForm({
      ...form,
      [key]: e.target.value,
    } as typeof form);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form) {
      try {
        await dispatch(updateEditProfile(form));
        toast.success("Profile updated successfully!");
      } catch {
        toast.error("Failed to update profile.");
      }
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2500} />
      {loading && <Spinner />}
      {!loading && (
        <div className={`${styles.content} ${styles.active}`} id="content1">
          <form action="" className={styles.content1} onSubmit={handleSubmit}>
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
                  name="name"
                  type="text"
                  placeholder="Charlene Reed"
                  id="your-name"
                  className={styles.yourName__input}
                  value={form?.name}
                  onChange={handleChange}
                />
              </div>

              <div className={`${styles.email} ${styles.inputDiv}`}>
                <label htmlFor="email" className={styles.email__label}>
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="charlenereed@gmail.com"
                  id="email"
                  className={styles.email__input}
                  value={form?.email}
                  onChange={handleChange}
                />
              </div>

              <div className={`${styles.dateBirth} ${styles.inputDiv}`}>
                <label htmlFor="date-birth" className={styles.dateBirth__label}>
                  Date of Birth
                </label>
                <input
                  name="dob"
                  type="date"
                  placeholder="25 January 1990"
                  id="date-birth"
                  className={styles.dateBirth__input}
                  value={form?.dob}
                  onChange={handleChange}
                />
              </div>

              <div className={`${styles.permAddress} ${styles.inputDiv}`}>
                <label
                  htmlFor="perm-address"
                  className={styles.permAddress__label}
                >
                  Permanent Address
                </label>
                <input
                  name="addressPermanent"
                  type="text"
                  placeholder="San Jose, California, USA"
                  id="perm-address"
                  className={styles.permAddress__input}
                  value={form?.addressPermanent}
                  onChange={handleChange}
                />
              </div>

              <div className={`${styles.postal} ${styles.inputDiv}`}>
                <label htmlFor="postal" className={styles.postal__label}>
                  Postal Code
                </label>
                <input
                  name="postalCode"
                  type="number"
                  placeholder="45962"
                  id="postal"
                  className={styles.postal__input}
                  value={form?.postalCode}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.col2}>
              <div className={`${styles.userName} ${styles.inputDiv}`}>
                <label htmlFor="user-name" className={styles.userName__label}>
                  User Name
                </label>
                <input
                  name="username"
                  type="text"
                  placeholder="Charlene Reed"
                  id="user-name"
                  className={styles.userName__input}
                  autoComplete="off"
                  value={form?.username}
                  onChange={handleChange}
                />
              </div>

              <div className={`${styles.password} ${styles.inputDiv}`}>
                <label htmlFor="password" className={styles.password__label}>
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="******************"
                  id="password"
                  className={styles.password__input}
                  autoComplete="new-password"
                  value={form?.password}
                  onChange={handleChange}
                />
              </div>

              <div className={`${styles.presAddress} ${styles.inputDiv}`}>
                <label
                  htmlFor="pres-address"
                  className={styles.presAddress__label}
                >
                  Present Address
                </label>
                <input
                  name="addressPresent"
                  type="text"
                  placeholder="San Jose, California, USA"
                  id="pres-address"
                  className={styles.presAddress__input}
                  value={form?.addressPresent}
                  onChange={handleChange}
                />
              </div>

              <div className={`${styles.city} ${styles.inputDiv}`}>
                <label htmlFor="city" className={styles.city__label}>
                  City
                </label>
                <input
                  name="city"
                  type="text"
                  placeholder="San Jose"
                  id="city"
                  className={styles.city__input}
                  value={form?.city}
                  onChange={handleChange}
                />
              </div>

              <div className={`${styles.country} ${styles.inputDiv}`}>
                <label htmlFor="country" className={styles.country__label}>
                  Country
                </label>
                <input
                  name="country"
                  type="text"
                  placeholder="USA"
                  id="country"
                  className={styles.country__input}
                  value={form?.country}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button className={styles.content1__btn} type="submit">
              Save
            </button>
          </form>
        </div>
      )}
    </>
  );
}
