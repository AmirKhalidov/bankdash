import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import styles from "../styles/Accounts.module.css";
import balanceImg from "../assets/accounts/Group 494.png";
import incomeImg from "../assets/accounts/Group-400.png";
import expenseImg from "../assets/accounts/Group 402.png";
import savingImg from "../assets/accounts/Group 401.png";
import userImg from "../assets/accounts/Group 326.png";
import settingsImg from "../assets/accounts/Group 327.png";
import alarmImg from "../assets/accounts/Group 328.png";
import { useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCreditCardData, fetchTransactions } from "../redux/operations";
import { Link } from "react-router";
import { Apple, Gamepad, User, UserRound } from "lucide-react";
import clsx from "clsx";

const images = [userImg, settingsImg, alarmImg];

const invoices = [
  {
    id: 1,
    name: "Apple Store",
    time: "5h ago",
    amount: "$450",
    icon: <Apple size={25} />,
    color: styles.apple,
  },
  {
    id: 2,
    name: "Michael",
    time: "2 days ago",
    amount: "$160",
    icon: <User size={25} />,
    color: styles.michael,
  },
  {
    id: 3,
    name: "Playstation",
    time: "5 days ago",
    amount: "$1085",
    icon: <Gamepad size={25} />,
    color: styles.playstation,
  },
  {
    id: 4,
    name: "William",
    time: "10 days ago",
    amount: "$90",
    icon: <UserRound size={25} />,
    color: styles.william,
  },
];

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
  const dispatch = useDispatch<AppDispatch>();

  const { cards } = useSelector((state: RootState) => state.creditCards);

  const { transactions } = useSelector(
    (state: RootState) => state.transactions
  );

  useEffect(() => {
    dispatch(fetchCreditCardData({ id: 1 }));
    dispatch(fetchTransactions());
  }, [dispatch]);

  const [card] = cards;
  return (
    <main className={styles.main}>
      <section>
        <ul className={styles.dashList}>
          {dashData.map((data, i) => (
            <li key={i}>
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
        <div className={styles.lastTransaction}>
          <h3 className={styles.titlesMyCards}>Last Transaction</h3>
          <ul>
            {transactions.slice(0, 3).map((transaction, i) => (
              <li className={styles.oneTransaction} key={i}>
                <img src={images[i]} />
                <div>
                  <h3>{transaction.description}</h3>
                  <p>{transaction.transactionDate}</p>
                </div>
                <p>{transaction.type}</p>
                <p>{transaction.card}</p>
                <p>{transaction.status}</p>
                <p>
                  {(transaction.amount < 0 &&
                    "-$" + Math.abs(transaction.amount)) ||
                    "$" + Math.abs(transaction.amount)}
                </p>
              </li>
            ))}
          </ul>
        </div>
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

      <section className={styles.cardsTransactions}>
        <div className={styles.lastTransaction}>
          <h3 className={clsx(styles.titlesMyCards, styles.margTitle)}>
            Debit & Credit Overview
          </h3>
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
        </div>
        <div className={styles.container}>
          <h2 className={clsx(styles.titlesMyCards, styles.margTitle)}>
            Invoices Sent
          </h2>
          <div className={styles.invoiceCard}>
            {invoices.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={`${styles.iconWrap} ${item.color}`}>
                  {item.icon}
                </div>
                <div className={styles.info}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.time}>{item.time}</p>
                </div>
                <div className={styles.amount}>{item.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
