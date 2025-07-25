import { useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import styles from "../styles/Dashboard.module.css";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchCreditCardData, fetchTransactions } from "../redux/operations";
import Spinner from "../components/Spinner";
import ExpensesChart from "../components/ExpensesChart";
import ActivityChart from "../components/ActivityChart";
import AreaChartComponent from "../components/AreaChartComponent";

export default function Dashboard() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const cardsBtnRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { cards, loading } = useSelector(
    (state: RootState) => state.creditCards
  );
  const { transactions } = useSelector(
    (state: RootState) => state.transactions
  );

  const transferCards = [
    {
      img: "src\\assets\\dashboard\\Mask Group.png",
      name: "Livia Bator",
      position: "CEO",
    },
    {
      img: "src\\assets\\dashboard\\Mask Group (1).png",
      name: "Randy Press",
      position: "Director",
    },
    {
      img: "src\\assets\\dashboard\\Mask Group (2).png",
      name: "Workman",
      position: "Designer",
    },
  ];

  useEffect(() => {
    dispatch(fetchCreditCardData({ id: 1 }));
    dispatch(fetchTransactions());
  }, [dispatch]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        cardsBtnRef.current &&
        !cardsBtnRef.current.contains(event.target as Node)
      ) {
        setSelectedCard(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [card] = cards;
  const recentTransactions = transactions.slice(0, 3);

  return (
    <>
      {loading && <Spinner size="large" />}

      {cards.length > 0 && (
        <main>
          <section className={styles.cardsTransactions}>
            <div className={styles.myCards}>
              <div className={styles.titles}>
                <h3 className={styles.titlesMyCards}>My Cards</h3>
                <a className={styles.titlesSeeAll}>See All</a>
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
            <div className={styles.transactions}>
              <h3 className={styles.transactionsTitle}>Recent Transaction</h3>
              <div className={styles.transactionsList}>
                <div className={styles.transactionsRow}>
                  <img src="src\assets\dashboard\Group 313.png" alt="pic" />
                  <div className={styles.transTitleDate}>
                    <p className={styles.transTitle}>
                      {recentTransactions[0]?.description}
                    </p>
                    <p className={styles.transDate}>
                      {recentTransactions[0]?.transactionDate}
                    </p>
                  </div>
                  <div className={styles.transSumMinus}>
                    {recentTransactions[0]?.amount < 0
                      ? `-$${Math.abs(recentTransactions[0]?.amount)}`
                      : `+$${Math.abs(recentTransactions[0]?.amount)}`}
                  </div>
                </div>

                <div className={styles.transactionsRow}>
                  <img src="src\assets\dashboard\Group 314.png" alt="pic" />
                  <div className={styles.transTitleDate}>
                    <p className={styles.transTitle}>
                      {recentTransactions[1]?.description}
                    </p>
                    <p className={styles.transDate}>
                      {recentTransactions[1]?.transactionDate}
                    </p>
                  </div>
                  <div className={styles.transSum}>
                    {recentTransactions[1]?.amount < 0
                      ? `-$${Math.abs(recentTransactions[1]?.amount)}`
                      : `+$${Math.abs(recentTransactions[1]?.amount)}`}
                  </div>
                </div>

                <div className={styles.transactionsRow}>
                  <img src="src\assets\dashboard\Group 315.png" alt="pic" />
                  <div className={styles.transTitleDate}>
                    <p className={styles.transTitle}>
                      {recentTransactions[2]?.description}
                    </p>
                    <p className={styles.transDate}>
                      {recentTransactions[2]?.transactionDate}
                    </p>
                  </div>
                  <div className={styles.transSum}>
                    {recentTransactions[2]?.amount < 0
                      ? `-$${Math.abs(recentTransactions[2]?.amount)}`
                      : `+$${Math.abs(recentTransactions[2]?.amount)}`}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.activityStatistics}>
            <div className={styles.activity}>
              <div className={styles.activityTitle}>
                <h3>Weekly Activity</h3>
              </div>
              <div className={styles.activityBox}>
                <ActivityChart />
              </div>
            </div>
            <div className={styles.statistics}>
              <div className={styles.statisticsTitle}>
                <h3>Expense Statistics</h3>
              </div>
              <div className={styles.statisticsBox}>
                <ExpensesChart />
              </div>
            </div>
          </section>

          <section className={styles.transferBalance}>
            <form className={styles.transfer}>
              <div className={styles.transferTitle}>
                <h3>Quick Transfer</h3>
              </div>
              <div className={styles.transferBox}>
                <div className={styles.cardsBtn} ref={cardsBtnRef}>
                  {transferCards.map((card, idx) => (
                    <div
                      key={card.name}
                      className={styles.transferCard}
                      onClick={() => setSelectedCard(idx)}
                    >
                      <img
                        className={`${styles.cardImg} ${
                          selectedCard === idx ? styles.selectedTransferImg : ""
                        }`}
                        src={card.img}
                        alt={card.name}
                      />
                      <div className={styles.cardName}>{card.name}</div>
                      <div className={styles.cardPosition}>{card.position}</div>
                    </div>
                  ))}
                  <img
                    className={styles.chevronBtn}
                    src="src\assets\dashboard\Group 56.png"
                    alt="btn"
                  />
                </div>

                <div className={styles.amountBtn}>
                  <p>Write Amount</p>
                  <button
                    className={styles.amountBtnClickable}
                    onClick={() => alert(`You have sent $525.50`)}
                  >
                    <img
                      src="src\assets\dashboard\Group 311.png"
                      alt="amount"
                    />
                  </button>
                </div>
              </div>
            </form>

            <div className={styles.balance}>
              <div className={styles.balanceTitle}>
                <h3>Balance History</h3>
              </div>
              <div className={styles.balanceBox}>
                <AreaChartComponent />
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
