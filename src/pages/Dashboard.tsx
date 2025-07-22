import styles from "../styles/Dashboard.module.css";

export default function Dashboard() {
  return (
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
                    <p className={styles.sum}>$5,756</p>
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
                    <p className={styles.name}>Eddy Cusuma</p>
                  </div>
                  <div className={styles.validDate}>
                    <p className={styles.valid}>VALID THRU</p>
                    <p className={styles.date}>12/22</p>
                  </div>
                </div>
              </div>

              <div className={styles.row3}>
                <p className={styles.cardSerial}>3778 **** **** 1234</p>
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
                    <p className={styles.sumW}>$5,756</p>
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
                    <p className={styles.nameW}>Eddy Cusuma</p>
                  </div>
                  <div className={styles.validDate}>
                    <p className={styles.validW}>VALID THRU</p>
                    <p className={styles.dateW}>12/22</p>
                  </div>
                </div>
              </div>

              <div className={styles.row3W}>
                <p className={styles.cardSerialW}>3778 **** **** 1234</p>
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
                <p className={styles.transTitle}>Deposit from my Card</p>
                <p className={styles.transDate}>28 January 2021</p>
              </div>
              <div className={styles.transSumMinus}>-$850</div>
            </div>

            <div className={styles.transactionsRow}>
              <img src="src\assets\dashboard\Group 314.png" alt="pic" />
              <div className={styles.transTitleDate}>
                <p className={styles.transTitle}>Deposit Paypal</p>
                <p className={styles.transDate}>25 January 2021</p>
              </div>
              <div className={styles.transSum}>+$2,500</div>
            </div>

            <div className={styles.transactionsRow}>
              <img src="src\assets\dashboard\Group 315.png" alt="pic" />
              <div className={styles.transTitleDate}>
                <p className={styles.transTitle}>Jemi Wilson</p>
                <p className={styles.transDate}>21 January 2021</p>
              </div>
              <div className={styles.transSum}>+$5,400</div>
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
            <img
              src="src\assets\dashboard\Group 240.png"
              alt="activity_chart"
            />
          </div>
        </div>
        <div className={styles.statistics}>
          <div className={styles.statisticsTitle}>
            <h3>Expense Statistics</h3>
          </div>
          <div className={styles.statisticsBox}>
            <img
              className={styles.statChart}
              src="src\assets\dashboard\Group.png"
              alt="stat_chart"
            />
          </div>
        </div>
      </section>

      <section className={styles.transferBalance}>
        <div className={styles.transfer}>
          <div className={styles.transferTitle}>
            <h3>Quick Transfer</h3>
          </div>
          <div className={styles.transferBox}>
            <div className={styles.cardsBtn}>
              <div className={styles.transferCard}>
                <img
                  className={styles.cardImg}
                  src="src\assets\dashboard\Mask Group.png"
                  alt="julia"
                />
                <div className={styles.cardName}>Livia Bator</div>
                <div className={styles.cardPosition}>CEO</div>
              </div>

              <div className={styles.transferCard}>
                <img
                  className={styles.cardImg}
                  src="src\assets\dashboard\Mask Group (1).png"
                  alt="julia"
                />
                <div className={styles.cardName}>Randy Press</div>
                <div className={styles.cardPosition}>Director</div>
              </div>

              <div className={styles.transferCard}>
                <img
                  className={styles.cardImg}
                  src="src\assets\dashboard\Mask Group (2).png"
                  alt="julia"
                />
                <div className={styles.cardName}>Workman</div>
                <div className={styles.cardPosition}>Designer</div>
              </div>

              <img
                className={styles.chevronBtn}
                src="src\assets\dashboard\Group 56.png"
                alt="btn"
              />
            </div>

            <div className={styles.amountBtn}>
              <p>Write Amount</p>
              <img src="src\assets\dashboard\Group 311.png" alt="amount" />
            </div>
          </div>
        </div>

        <div className={styles.balance}>
          <div className={styles.balanceTitle}>
            <h3>Balance History</h3>
          </div>
          <div className={styles.balanceBox}>
            <img src="src\assets\dashboard\Group 323.png" alt="balance_chart" />
          </div>
        </div>
      </section>
    </main>
  );
}
