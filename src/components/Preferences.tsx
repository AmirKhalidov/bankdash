import { useState } from "react";
import styles from "../styles/Preferences.module.css";
import Toggle from "./Toggle";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { updatePreferences } from "../redux/operations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Preferences() {
  const { loading, preferences } = useSelector(
    (state: RootState) => state.settings
  );

  const dispatch = useDispatch<AppDispatch>();

  const [form, setForm] = useState({
    currency: preferences?.currency || "",
    timezone: preferences?.timezone || "",
    sendReceive: preferences?.sendReceive || false,
    merchantOrder: preferences?.merchantOrder || false,
    recommendations: preferences?.recommendations || false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleToggle = (name: string, value: boolean) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(updatePreferences(form));
      toast.success("Preferences updated successfully!");
    } catch {
      toast.error("Failed to update preferences.");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2500} />
      {loading && <Spinner />}
      {!loading && (
        <div className={styles.content} id="content2">
          <form onSubmit={handleSubmit}>
            <div className={styles.content2}>
              <div className={`${styles.currency} ${styles.inputDiv}`}>
                <label htmlFor="currency" className={styles.currency__label}>
                  Currency
                </label>
                <input
                  name="currency"
                  type="text"
                  placeholder="USD"
                  value={form.currency}
                  onChange={handleChange}
                  className={styles.currency__input}
                  id="currency"
                />
              </div>

              <div className={`${styles.timeZone} ${styles.inputDiv}`}>
                <label htmlFor="time-zone" className={styles.timeZone__label}>
                  Time Zone
                </label>
                <select
                  name="timezone"
                  className={styles.timeZone__input}
                  id="time-zone"
                  value={form.timezone}
                  onChange={handleChange}
                >
                  <option value="(GMT-12:00) International Date Line West">
                    (GMT-12:00) International Date Line West
                  </option>
                  <option value="(GMT-11:00) Midway Island, Samoa">
                    (GMT-11:00) Midway Island, Samoa
                  </option>
                  <option value="(GMT-10:00) Hawaii">(GMT-10:00) Hawaii</option>
                  <option value="(GMT-09:00) Alaska">(GMT-09:00) Alaska</option>
                  <option value="(GMT-08:00) Pacific Time (US & Canada)">
                    (GMT-08:00) Pacific Time (US & Canada)
                  </option>
                  <option value="(GMT-07:00) Mountain Time (US & Canada)">
                    (GMT-07:00) Mountain Time (US & Canada)
                  </option>
                  <option value="(GMT-06:00) Central Time (US & Canada)">
                    (GMT-06:00) Central Time (US & Canada)
                  </option>
                  <option value="(GMT-05:00) Eastern Time (US & Canada)">
                    (GMT-05:00) Eastern Time (US & Canada)
                  </option>
                  <option value="(GMT-04:00) Atlantic Time (Canada)">
                    (GMT-04:00) Atlantic Time (Canada)
                  </option>
                  <option value="(GMT-03:00) Brasilia">
                    (GMT-03:00) Brasilia
                  </option>
                  <option value="(GMT-02:00) Mid-Atlantic">
                    (GMT-02:00) Mid-Atlantic
                  </option>
                  <option value="(GMT-01:00) Azores, Cape Verde Is.">
                    (GMT-01:00) Azores, Cape Verde Is.
                  </option>
                  <option value="(GMT+00:00) London, Lisbon, Casablanca">
                    (GMT+00:00) London, Lisbon, Casablanca
                  </option>
                  <option value="(GMT+01:00) Berlin, Rome, Paris, Madrid">
                    (GMT+01:00) Berlin, Rome, Paris, Madrid
                  </option>
                  <option value="(GMT+02:00) Athens, Jerusalem, Cairo, Istanbul">
                    (GMT+02:00) Athens, Jerusalem, Cairo, Istanbul
                  </option>
                  <option value="(GMT+03:00) Moscow, St. Petersburg, Nairobi">
                    (GMT+03:00) Moscow, St. Petersburg, Nairobi
                  </option>
                  <option value="(GMT+03:30) Tehran">(GMT+03:30) Tehran</option>
                  <option value="(GMT+04:00) Abu Dhabi, Muscat, Baku, Tbilisi">
                    (GMT+04:00) Abu Dhabi, Muscat, Baku, Tbilisi
                  </option>
                  <option value="(GMT+04:30) Kabul">(GMT+04:30) Kabul</option>
                  <option value="(GMT+05:00) Islamabad, Karachi, Tashkent">
                    (GMT+05:00) Islamabad, Karachi, Tashkent
                  </option>
                  <option value="(GMT+05:30) Mumbai, Kolkata, Chennai, New Delhi">
                    (GMT+05:30) Mumbai, Kolkata, Chennai, New Delhi
                  </option>
                  <option value="(GMT+05:45) Kathmandu">
                    (GMT+05:45) Kathmandu
                  </option>
                  <option value="(GMT+06:00) Almaty, Dhaka, Colombo">
                    (GMT+06:00) Almaty, Dhaka, Colombo
                  </option>
                  <option value="(GMT+06:30) Yangon, Cocos Islands">
                    (GMT+06:30) Yangon, Cocos Islands
                  </option>
                  <option value="(GMT+07:00) Bangkok, Hanoi, Jakarta">
                    (GMT+07:00) Bangkok, Hanoi, Jakarta
                  </option>
                  <option value="(GMT+08:00) Beijing, Perth, Singapore, Hong Kong">
                    (GMT+08:00) Beijing, Perth, Singapore, Hong Kong
                  </option>
                  <option value="(GMT+09:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk">
                    (GMT+09:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
                  </option>
                  <option value="(GMT+09:30) Adelaide, Darwin">
                    (GMT+09:30) Adelaide, Darwin
                  </option>
                  <option value="(GMT+10:00) Sydney, Guam, Vladivostok">
                    (GMT+10:00) Sydney, Guam, Vladivostok
                  </option>
                  <option value="(GMT+11:00) Magadan, Solomon Is., New Caledonia">
                    (GMT+11:00) Magadan, Solomon Is., New Caledonia
                  </option>
                  <option value="(GMT+12:00) Auckland, Wellington, Fiji, Kamchatka">
                    (GMT+12:00) Auckland, Wellington, Fiji, Kamchatka
                  </option>
                </select>
              </div>
            </div>

            <div className={styles.notification}>
              <p className={styles.notification__text}>Notification</p>

              <div className={styles.notification__item}>
                <Toggle
                  checked={form.sendReceive}
                  onChange={(val: boolean) => handleToggle("sendReceive", val)}
                />
                <label className={styles.notification__label}>
                  I send or receive digita currency
                </label>
              </div>

              <div className={styles.notification__item}>
                <Toggle
                  checked={form.merchantOrder}
                  onChange={(val: boolean) =>
                    handleToggle("merchantOrder", val)
                  }
                />
                <label className={styles.notification__label}>
                  I receive merchant order
                </label>
              </div>

              <div className={styles.notification__item}>
                <Toggle
                  checked={form.recommendations}
                  onChange={(val: boolean) =>
                    handleToggle("recommendations", val)
                  }
                />
                <label className={styles.notification__label}>
                  There are recommendation for my account
                </label>
              </div>
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
