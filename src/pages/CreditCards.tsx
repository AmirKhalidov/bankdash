import styles from "../styles/CreditCards.module.css";
export default function CreditCards() {
  return (
    <main className={styles.mainContent}>
      <section className={styles.cardsSection}>
        <div className={styles.sectionTitle}>My Cards</div>
        <div className={styles.cardsContainer}>
          {/* CARD 1 */}
          <div className={styles.cardWrapper}>
            <div className={`${styles.card} ${styles.cardBlue}`}>
              <div className={styles.cardHeader}>
                <div className={styles.balanceInfo}>
                  <p className={styles.balanceLabel}>Balance</p>
                  <p className={styles.balanceValue}>$5,756</p>
                </div>
                <img
                  className={styles.chipIcon}
                  src="src/assets/dashboard/Chip_Card.png"
                  alt="pic-logo"
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardHolder}>
                  <p className={styles.holderLabel}>CARD HOLDER</p>
                  <p className={styles.holderName}>Eddy Cusuma</p>
                </div>
                <div className={styles.cardValid}>
                  <p className={styles.validLabel}>VALID THRU</p>
                  <p className={styles.validDate}>12/22</p>
                </div>
              </div>
            </div>
            <div className={styles.cardFooter}>
              <p className={styles.cardNumber}>3778 **** **** 1234</p>
              <img
                className={styles.bankLogo}
                src="src/assets/dashboard/Group 17.png"
                alt="logo-mini"
              />
            </div>
          </div>

          {/* CARD 2 */}
          <div className={styles.cardWrapper}>
            <div className={`${styles.card} ${styles.cardDarkBlue}`}>
              <div className={styles.cardHeader}>
                <div className={styles.balanceInfo}>
                  <p className={styles.balanceLabelWhite}>Balance</p>
                  <p className={styles.balanceValueWhite}>$5,756</p>
                </div>
                <img
                  className={styles.chipIcon}
                  src="src/assets/dashboard/Chip_Card.png"
                  alt="pic-logo"
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardHolder}>
                  <p className={styles.holderLabelWhite}>CARD HOLDER</p>
                  <p className={styles.holderNameWhite}>Eddy Cusuma</p>
                </div>
                <div className={styles.cardValid}>
                  <p className={styles.validLabelWhite}>VALID THRU</p>
                  <p className={styles.validDateWhite}>12/22</p>
                </div>
              </div>
            </div>
            <div className={styles.cardFooterWhite}>
              <p className={styles.cardNumberWhite}>3778 **** **** 1234</p>
              <img
                className={styles.bankLogo}
                src="src/assets/dashboard/Group 17 (1).png"
                alt="logo-mini"
              />
            </div>
          </div>

          {/* CARD 3 */}
          <div className={styles.cardWrapper}>
            <div className={`${styles.card} ${styles.cardWhite}`}>
              <div className={styles.cardHeader}>
                <div className={styles.balanceInfo}>
                  <p className={styles.balanceLabel}>Balance</p>
                  <p className={styles.balanceValue}>$5,756</p>
                </div>
                <img
                  className={styles.chipIcon}
                  src="src/assets/dashboard/Chip_Card (1).png"
                  alt="pic-logo"
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardHolder}>
                  <p className={styles.holderLabel}>CARD HOLDER</p>
                  <p className={styles.holderName}>Eddy Cusuma</p>
                </div>
                <div className={styles.cardValid}>
                  <p className={styles.validLabel}>VALID THRU</p>
                  <p className={styles.validDate}>12/22</p>
                </div>
              </div>
            </div>
            <div className={styles.cardFooter}>
              <p className={styles.cardNumber}>3778 **** **** 1234</p>
              <img
                className={styles.bankLogo}
                src="src/assets/dashboard/Group 17.png"
                alt="logo-mini"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statisticsSection}>
        <div className={styles.sectionStats}>
          <h3 className={styles.sectionSubtitle}>Card Expense Statistics</h3>
          <div className={styles.statsChart}>
            <img src="src/assets/creditCards/Group 351.png" alt="pic" />
          </div>
        </div>

        <div className={styles.cardListSection}>
          <h3 className={styles.sectionSubtitle}>Card List</h3>

          <div className={styles.cardItem}>
            <img src="src/assets/creditCards/credit-card 1.png" alt="pic" />
            <div>
              <h4 className={styles.cardItemLabel}>Card Type</h4>
              <p className={styles.cardItemValue}>Secondary</p>
            </div>
            <div>
              <h4 className={styles.cardItemLabel}>Bank</h4>
              <p className={styles.cardItemValue}>DBL Bank</p>
            </div>
            <div>
              <h4 className={styles.cardItemLabel}>Card Number</h4>
              <p className={styles.cardItemValue}>**** **** 5600</p>
            </div>
            <div>
              <h4 className={styles.cardItemLabel}>Name on Card</h4>
              <p className={styles.cardItemValue}>William</p>
            </div>
            <button className={styles.cardItemButton}>View Details</button>
          </div>

          <div className={styles.cardItem}>
            <img src="src/assets/creditCards/Group.png" alt="pic" />
            <div>
              <h4 className={styles.cardItemLabel}>Card Type</h4>
              <p className={styles.cardItemValue}>Secondary</p>
            </div>
            <div>
              <h4 className={styles.cardItemLabel}>Bank</h4>
              <p className={styles.cardItemValue}>BRC Bank</p>
            </div>
            <div>
              <h4 className={styles.cardItemLabel}>Card Number</h4>
              <p className={styles.cardItemValue}>**** **** 4300</p>
            </div>
            <div>
              <h4 className={styles.cardItemLabel}>Name on Card</h4>
              <p className={styles.cardItemValue}>Michel</p>
            </div>
            <button className={styles.cardItemButton}>View Details</button>
          </div>

          <div className={styles.cardItem}>
            <img src="src/assets/creditCards/credit-card 1-2.png" alt="pic" />
            <div>
              <h4 className={styles.cardItemLabel}>Card Type</h4>
              <p className={styles.cardItemValue}>Secondary</p>
            </div>
            <div>
              <h4 className={styles.cardItemLabel}>Bank</h4>
              <p className={styles.cardItemValue}>ABM Bank</p>
            </div>
            <div>
              <h4 className={styles.cardItemLabel}>Card Number</h4>
              <p className={styles.cardItemValue}>**** **** 7560</p>
            </div>
            <div>
              <h4 className={styles.cardItemLabel}>Name on Card</h4>
              <p className={styles.cardItemValue}>Edward</p>
            </div>
            <button className={styles.cardItemButton}>View Details</button>
          </div>
        </div>
      </section>

      <section className={styles.cardManagementSection}>
        <div className={styles.addCardSection}>
          <h3 className={styles.sectionSubtitle}>Add New Card</h3>
          <div>
            <p className={styles.description}>
              Credit Card generally means a plastic card issued by Scheduled
              Commercial Banks assigned to a Cardholder, with a credit limit...
            </p>

            <div className={styles.formContainer}>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="card-type">Card Type</label>
                  <input
                    type="text"
                    id="card-type"
                    className={styles.inputField}
                    placeholder="Classic"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="name-on-card">Name On Card</label>
                  <input
                    type="text"
                    id="name-on-card"
                    className={styles.inputField}
                    placeholder="My Cards"
                  />
                </div>
              </div>

              {/* Второй ряд: Card Number + Expiration Date */}
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="card-number">Card Number</label>
                  <input
                    type="text"
                    id="card-number"
                    className={styles.inputField}
                    placeholder="**** **** **** ****"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="expiration-date">Expiration Date</label>
                  <select
                    id="expiration-date"
                    className={`${styles.inputField} ${styles.selectField}`}
                    defaultValue="25 January 2025"
                  >
                    <option>25 January 2025</option>
                    <option>25 January 2026</option>
                    <option>25 January 2027</option>
                  </select>
                </div>
              </div>
            </div>

            <button className={styles.addCardButton}>Add Card</button>
          </div>
        </div>

        <div className={styles.cardSettings}>
          <h3 className={styles.sectionSubtitle}>Card Setting</h3>
          <div className={styles.settingOptions}>
            <div className={styles.settingItem}>
              <img src="src/assets/creditCards/Group 165.png" alt="pic" />
              <div>
                <h4 className={styles.settingTitle}>Block Card</h4>
                <p className={styles.settingDescription}>
                  Instantly block your card
                </p>
              </div>
            </div>

            <div className={styles.settingItem}>
              <img src="src/assets/creditCards/Group 166.png" alt="pic" />
              <div>
                <h4 className={styles.settingTitle}>Change Pin Code</h4>
                <p className={styles.settingDescription}>
                  Choose another pin code
                </p>
              </div>
            </div>

            <div className={styles.settingItem}>
              <img src="src/assets/creditCards/Group 167.png" alt="pic" />
              <div>
                <h4 className={styles.settingTitle}>Add to Google Pay</h4>
                <p className={styles.settingDescription}>
                  Withdraw without any card
                </p>
              </div>
            </div>

            <div className={styles.settingItem}>
              <img src="src/assets/creditCards/Group 168.png" alt="pic" />
              <div>
                <h4 className={styles.settingTitle}>Add to Apple Pay</h4>
                <p className={styles.settingDescription}>
                  Withdraw without any card
                </p>
              </div>
            </div>

            <div className={styles.settingItem}>
              <img src="src/assets/creditCards/Group 168.png" alt="pic" />
              <div>
                <h4 className={styles.settingTitle}>Add to Apple Store</h4>
                <p className={styles.settingDescription}>
                  Withdraw without any card
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
