import { useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import styles from "../styles/Transactions.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCreditCardData, fetchTransactions } from "../redux/operations";
import Spinner from "../components/Spinner";
import { Link } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Aug", value: 7000 },
  { name: "Sep", value: 10000 },
  { name: "Oct", value: 8500 },
  { name: "Nov", value: 4000 },
  { name: "Dec", value: 12500 },
  { name: "Jan", value: 7500 },
];

const RoundedBar = (props: any) => {
  const { x, y, width, height, fill } = props;
  const radius = 10;
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      rx={radius}
      ry={radius}
    />
  );
};

export default function Transactions() {
  const dispatch = useDispatch<AppDispatch>();
  const { cards, loading } = useSelector(
    (state: RootState) => state.creditCards
  );
  const { transactions } = useSelector(
    (state: RootState) => state.transactions
  );

  useEffect(() => {
    dispatch(fetchCreditCardData({ id: 1 }));
    dispatch(fetchTransactions());
  }, [dispatch]);

  const [card] = cards;

  return (
    <>
      {loading && <Spinner size="large" />}

      {cards.length > 0 && (
        <main>
          <section className={styles.cardsTransactions}>
            <div className={styles.myCards}>
              <div className={styles.titles}>
                <h3 className={styles.titlesMyCards}>My Cards</h3>
                <Link to="/credit-cards" className={styles.titlesSeeAll}>
                  + Add Card
                </Link>
              </div>

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

                <div className={styles.card2}>
                  <div className={`${styles.card} ${styles.white}`}>
                    <div className={styles.row1}>
                      <div className={styles.balanceSum}>
                        <p className={styles.balanceW}>Balance</p>
                        <p className={styles.sumW}>${card.balance}</p>
                      </div>
                      <img
                        className={styles.chipCard}
                        src="src\assets\dashboard\Chip_Card (1).png"
                        alt="pic-logo"
                      />
                    </div>
                    <div className={styles.row2}>
                      <div className={styles.holderName}>
                        <p className={styles.holderW}>CARD HOLDER</p>
                        <p className={styles.nameW}>{card.cardHolder}</p>
                      </div>
                      <div className={styles.validDate}>
                        <p className={styles.validW}>VALID THRU</p>
                        <p className={styles.dateW}>{card.validThru}</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.row3W}>
                    <p className={styles.cardSerialW}>{card.cardNumber}</p>
                    <img
                      className={styles.logoMini}
                      src="src\assets\dashboard\Group 17 (1).png"
                      alt="logo-mini"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.transactionChart}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} barSize={30}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip
                    formatter={(value: number) => `$${value.toLocaleString()}`}
                  />
                  <Bar dataKey="value" shape={<RoundedBar />}>
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.name === "Dec" ? "#00CFC3" : "#E8ECF4"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
