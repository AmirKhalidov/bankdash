import styles from "../styles/Investments.module.css";

export default function Investments() {
  return (
    <main className={styles.main}>
      <section className={styles.performanceSection}>
        <div className={styles.statsCards}>
          <div className={styles.statCard}>
            <img
              className={styles.statImage}
              src="src/assets/investments/Group 303.png"
              alt="Total Invested"
            />
            <div className={styles.statText}>
              <p className={styles.statLabel}>Total Invested Amount</p>
              <h4 className={styles.statValue}>$150,000</h4>
            </div>
          </div>

          <div className={styles.statCard}>
            <img
              className={styles.statImage}
              src="src/assets/investments/Group 305.png"
              alt="Investments Count"
            />
            <div className={styles.statText}>
              <p className={styles.statLabel}>Number of Investments</p>
              <h4 className={styles.statValue}>1,250</h4>
            </div>
          </div>

          <div className={styles.statCard}>
            <img
              className={styles.statImage}
              src="src/assets/investments/Group 307.png"
              alt="Return Rate"
            />
            <div className={styles.statText}>
              <p className={styles.statLabel}>Rate of Return</p>
              <h4 className={styles.statValue}>+5.80%</h4>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.chartsSection}>
        <div className={styles.chartBlock}>
          <h3 className={styles.chartTitle}>Yearly Total Investment</h3>
          <div className={styles.chartImageWrapper}>
            <img
              className={styles.chartImage}
              src="src/assets/investments/Group 232.png"
              alt="Yearly Chart"
            />
          </div>
        </div>

        <div className={styles.chartBlock}>
          <h3 className={styles.chartTitle}>Monthly Revenue</h3>
          <div className={styles.chartImageWrapper}>
            <img
              className={styles.chartImage}
              src="src/assets/investments/Group 254.png"
              alt="Monthly Chart"
            />
          </div>
        </div>
      </section>

      <section className={styles.investmentsSection}>
        <div className={styles.myInvestments}>
          <h3 className={styles.sectionTitle}>My Investment</h3>
          <div className={styles.investmentCards}>
            <div className={styles.investmentCard}>
              <img
                className={styles.investmentImage}
                src="src/assets/investments/Group 245.png"
                alt="Apple"
              />
              <div className={styles.investmentCompany}>
                <h4 className={styles.companyName}>Apple Store</h4>
                <p className={styles.companySector}>E-commerce, Marketplace</p>
              </div>
              <div className={styles.investmentAmount}>
                <h4 className={styles.amountValue}>$54,000</h4>
                <p className={styles.amountLabel}>Investment Value</p>
              </div>
              <div className={styles.investmentReturn}>
                <h4 className={styles.returnValue}>+16%</h4>
                <p className={styles.returnLabel}>Return Value</p>
              </div>
            </div>

            <div className={styles.investmentCard}>
              <img
                className={styles.investmentImage}
                src="src/assets/investments/Group 875.png"
                alt="Samsung"
              />
              <div className={styles.investmentCompany}>
                <h4 className={styles.companyName}>Samsung Mobile</h4>
                <p className={styles.companySector}>E-commerce, Marketplace</p>
              </div>
              <div className={styles.investmentAmount}>
                <h4 className={styles.amountValue}>$25,300</h4>
                <p className={styles.amountLabel}>Investment Value</p>
              </div>
              <div className={styles.investmentReturn}>
                <h4 className={styles.returnValue}>-4%</h4>
                <p className={styles.returnLabel}>Return Value</p>
              </div>
            </div>

            <div className={styles.investmentCard}>
              <img
                className={styles.investmentImage}
                src="src/assets/investments/Group 876.png"
                alt="Tesla"
              />
              <div className={styles.investmentCompany}>
                <h4 className={styles.companyName}>Tesla Motors</h4>
                <p className={styles.companySector}>Electric Vehicles</p>
              </div>
              <div className={styles.investmentAmount}>
                <h4 className={styles.amountValue}>$8,200</h4>
                <p className={styles.amountLabel}>Investment Value</p>
              </div>
              <div className={styles.investmentReturn}>
                <h4 className={styles.returnValue}>+25%</h4>
                <p className={styles.returnLabel}>Return Value</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.trendingStocks}>
          <h3 className={styles.sectionTitle}>Trending Stock</h3>
          <div className={styles.stockTableWrapper}>
            <table className={styles.stockTable}>
              <thead className={styles.tableHead}>
                <tr className={styles.tableRow}>
                  <th className={styles.tableHeader}>SL No</th>
                  <th className={styles.tableHeader}>Name</th>
                  <th className={styles.tableHeader}>Price</th>
                  <th className={styles.tableHeader}>Return</th>
                </tr>
              </thead>
              <tbody className={styles.tableBody}>
                <tr className={styles.tableRow}>
                  <td className={styles.tableCell}>01</td>
                  <td className={styles.tableCell}>Trivago</td>
                  <td className={styles.tableCell}>$520</td>
                  <td className={styles.tableCell}>+5%</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td className={styles.tableCell}>02</td>
                  <td className={styles.tableCell}>Canon</td>
                  <td className={styles.tableCell}>$480</td>
                  <td className={styles.tableCell}>+10%</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td className={styles.tableCell}>03</td>
                  <td className={styles.tableCell}>Uber Food</td>
                  <td className={styles.tableCell}>$350</td>
                  <td className={styles.tableCell}>-3%</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td className={styles.tableCell}>04</td>
                  <td className={styles.tableCell}>Nokia</td>
                  <td className={styles.tableCell}>$940</td>
                  <td className={styles.tableCell}>+2%</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td className={styles.tableCell}>05</td>
                  <td className={styles.tableCell}>Tiktok</td>
                  <td className={styles.tableCell}>$670</td>
                  <td className={styles.tableCell}>-12%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
