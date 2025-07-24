import { useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import styles from "../styles/Dashboard.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCreditCardData, fetchTransactions } from "../redux/operations";
import Spinner from "../components/Spinner";
import { Link } from "react-router";

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
          </section>
        </main>
      )}
    </>
  );
}
