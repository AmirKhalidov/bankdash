import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import styles from "../styles/Accounts.module.css";
import balanceImg from "../assets/accounts/Group 494.png";
import incomeImg from "../assets/accounts/Group-400.png";
import expenseImg from "../assets/accounts/Group 402.png";
import savingImg from "../assets/accounts/Group 401.png";
import { useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCreditCardData, fetchTransactions } from "../redux/operations";
import { Link } from "react-router";

const chartData = [
  { day: "Sat", debit: 3000, credit: 4500 },
  { day: "Sun", debit: 2000, credit: 3500 },
  { day: "Mon", debit: 2000, credit: 2500 },
  { day: "Tue", debit: 4000, credit: 2000 },
  { day: "Wed", debit: 3000, credit: 4000 },
  { day: "Thu", debit: 3000, credit: 1500 },
  { day: "Fri", debit: 3500, credit: 4000 },
];

const dashData = [
  {
    title: "My Balance",
    value: "$12,750",
    img: balanceImg,
  },
  { title: "Income", value: "$5,600", img: incomeImg },
  { title: "Expense", value: "$3,460", img: expenseImg },
  { title: "Total Saving", value: "$7,920", img: savingImg },
];

export default function Accounts() {
  const { cards, loading } = useSelector(
    (state: RootState) => state.creditCards
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCreditCardData({ id: 1 }));
  }, [dispatch]);
  const [card] = cards;
  return (
    <main className={styles.main}>
      <section>
        <ul className={styles.dashList}>
          {dashData.map((data) => (
            <li>
              <img src={data.img} />
              <div>
                <p>{data.title}</p>
                <h3>{data.value}</h3>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.cardsTransactions}>
        <div>
          <div className={styles.titles}>
            <h3 className={styles.titlesMyCards}>My Card</h3>
            <Link to={"/credit-cards"} className={styles.titlesSeeAll}>
              See All
            </Link>
          </div>

          {cards.length > 0 && (
            <div className={styles.cards}>
              <div className={styles.card1}>
                <div className={`${styles.card} ${styles.blue}`}>
                  <div className={styles.row1}>
                    <div className={styles.balanceSum}>
                      <p className={styles.balanceW}>Balance</p>
                      <p className={styles.sum}>${card.balance}</p>
                    </div>
                    <img
                      className={styles.chipCard}
                      src="src\assets\dashboard\Chip_Card.png"
                      alt="pic-logo"
                    />
                  </div>
                  <div className={styles.row2}>
                    <div className={styles.holderName}>
                      <p className={styles.holder}>CARD HOLDER</p>
                      <p className={styles.name}>{card.cardHolder}</p>
                    </div>
                    <div className={styles.validDate}>
                      <p className={styles.valid}>VALID THRU</p>
                      <p className={styles.date}>{card.validThru}</p>
                    </div>
                  </div>
                </div>

                <div className={styles.row3}>
                  <p className={styles.cardSerial}>{card.cardNumber}</p>
                  <img
                    className={styles.logoMini}
                    src="src\assets\dashboard\Group 17.png"
                    alt="logo-mini"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className={styles.wrapper}>
          <p className={styles.subtitle}>
            $7,560 Debited & $5,420 Credited in this Week
          </p>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} barCategoryGap="20%">
              <XAxis dataKey="day" />
              <Tooltip />
              <Bar
                dataKey="debit"
                fill="#1e3aef"
                name="Debit"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="credit"
                fill="#fbbf24"
                name="Credit"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </main>
  );
}
