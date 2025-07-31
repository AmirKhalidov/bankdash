import { useDispatch, useSelector } from "react-redux";
import { clearSelectedInvestment, selectInvestment } from "../redux/uiSlice";
import type { RootState } from "../redux/store";
import styles from "../styles/Investments.module.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function Investments() {
  const dispatch = useDispatch();
  const { investments, performanceStats } = useSelector(
    (state: RootState) => state.investments
  );
  const { trendingStocks, monthlyData, yearlyData } = useSelector(
    (state: RootState) => state.trending
  );
  const selectedInvestment = useSelector(
    (state: RootState) => state.ui.selectedInvestment
  );

  const getReturnClass = (value: string) => {
    if (value.startsWith("-")) return styles.negative;
    if (value.startsWith("+")) return styles.positive;
    return "";
  };

  const performanceStatsWithClasses = performanceStats.map((stat) => ({
    ...stat,
    valueClassName: stat.id === "rateReturn" ? getReturnClass(stat.value) : "",
  }));

  return (
    <main className={styles.main}>
      <section className={styles.performanceSection}>
        <div className={styles.statsCards}>
          {performanceStatsWithClasses.map(
            ({ id, imgSrc, imgAlt, label, value, valueClassName }) => (
              <div key={id} className={styles.statCard}>
                <img src={imgSrc} alt={imgAlt} className={styles.statImage} />
                <div className={styles.statText}>
                  <p className={styles.statLabel}>{label}</p>
                  <h4 className={`${styles.statValue} ${valueClassName || ""}`}>
                    {value}
                  </h4>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <section className={styles.chartsSection}>
        <div className={styles.chartBlock}>
          <h3 className={styles.chartTitle}>Yearly Total Investment</h3>
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <LineChart
                data={yearlyData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="invested"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className={styles.chartBlock}>
          <h3 className={styles.chartTitle}>Monthly Revenue</h3>
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <LineChart
                data={monthlyData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#16a34a"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className={styles.investmentsSection}>
        <div className={styles.myInvestments}>
          <h3 className={styles.sectionTitle}>My Investment</h3>
          <div className={styles.investmentCards}>
            {investments.map((inv, i) => (
              <div
                key={i}
                className={styles.investmentCard}
                onClick={() => dispatch(selectInvestment(inv))}
              >
                <img
                  src={inv.image}
                  alt={inv.name}
                  className={styles.investmentImage}
                />
                <div className={styles.investmentCompany}>
                  <h4 className={styles.companyName}>{inv.name}</h4>
                  <p className={styles.companySector}>{inv.sector}</p>
                </div>
                <div className={styles.investmentAmount}>
                  <h4 className={styles.amountValue}>{inv.amount}</h4>
                  <p className={styles.amountLabel}>Investment Value</p>
                </div>
                <div className={styles.investmentReturn}>
                  <h4
                    className={`${styles.returnValue} ${getReturnClass(
                      inv.returnValue
                    )}`}
                  >
                    {inv.returnValue}
                  </h4>
                  <p className={styles.returnLabel}>Return Value</p>
                </div>
              </div>
            ))}
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
                {trendingStocks.map((stock, index) => (
                  <tr key={stock.name} className={styles.tableRow}>
                    <td className={styles.tableCell}>{index + 1}</td>
                    <td className={styles.tableCell}>{stock.name}</td>
                    <td className={styles.tableCell}>{stock.price}</td>
                    <td
                      className={`${styles.tableCell} ${getReturnClass(
                        stock.returnValue
                      )}`}
                    >
                      {stock.returnValue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {selectedInvestment && (
        <div
          className={styles.modalOverlay}
          onClick={() => dispatch(clearSelectedInvestment())}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => dispatch(clearSelectedInvestment())}
            >
              ×
            </button>
            <img
              src={selectedInvestment.image}
              alt={selectedInvestment.name}
              className={styles.modalImage}
            />
            <h2>{selectedInvestment.name}</h2>
            <p>
              <strong>Sector:</strong> {selectedInvestment.sector}
            </p>
            <p>
              <strong>Amount:</strong> {selectedInvestment.amount}
            </p>
            <p>
              <strong>Return:</strong> {selectedInvestment.returnValue}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
