import { useState } from "react";
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

interface Investment {
  name: string;
  sector: string;
  amount: string;
  returnValue: string;
  image: string;
}

interface TrendingStock {
  name: string;
  price: string;
  returnValue: string;
}

interface PerformanceStat {
  id: string;
  imgSrc: string;
  imgAlt: string;
  label: string;
  value: string;
  valueClassName?: string;
}

const investments: Investment[] = [
  {
    name: "Apple Store",
    sector: "E-commerce, Marketplace",
    amount: "$54,000",
    returnValue: "+16%",
    image: "src/assets/investments/Group 245.png",
  },
  {
    name: "Samsung Mobile",
    sector: "E-commerce, Marketplace",
    amount: "$25,300",
    returnValue: "-4%",
    image: "src/assets/investments/Group 875.png",
  },
  {
    name: "Tesla Motors",
    sector: "Electric Vehicles",
    amount: "$8,200",
    returnValue: "+25%",
    image: "src/assets/investments/Group 876.png",
  },
];

const trendingStocks: TrendingStock[] = [
  { name: "Trivago", price: "$520", returnValue: "+5%" },
  { name: "Canon", price: "$480", returnValue: "+10%" },
  { name: "Uber Food", price: "$350", returnValue: "-3%" },
  { name: "Nokia", price: "$940", returnValue: "+2%" },
  { name: "Tiktok", price: "$670", returnValue: "-12%" },
];

const yearlyData = [
  { year: "2017", invested: 40000 },
  { year: "2018", invested: 45000 },
  { year: "2019", invested: 50000 },
  { year: "2020", invested: 70000 },
  { year: "2021", invested: 90000 },
  { year: "2022", invested: 110000 },
];

const monthlyData = [
  { month: "Jan", revenue: 8000 },
  { month: "Feb", revenue: 9000 },
  { month: "Mar", revenue: 10000 },
  { month: "Apr", revenue: 12000 },
  { month: "May", revenue: 14000 },
  { month: "Jun", revenue: 16000 },
  { month: "Jul", revenue: 15000 },
  { month: "Aug", revenue: 17000 },
  { month: "Sep", revenue: 18000 },
  { month: "Oct", revenue: 19000 },
  { month: "Nov", revenue: 20000 },
  { month: "Dec", revenue: 22000 },
];

const performanceStats: PerformanceStat[] = [
  {
    id: "totalInvested",
    imgSrc: "src/assets/investments/Group 303.png",
    imgAlt: "Total",
    label: "Total Invested Amount",
    value: "$150,000",
  },
  {
    id: "numInvestments",
    imgSrc: "src/assets/investments/Group 305.png",
    imgAlt: "Count",
    label: "Number of Investments",
    value: "1,250",
  },
  {
    id: "rateReturn",
    imgSrc: "src/assets/investments/Group 307.png",
    imgAlt: "Return",
    label: "Rate of Return",
    value: "+5.80%",
  },
];

export default function Investments() {
  const [selectedInvestment, setSelectedInvestment] =
    useState<Investment | null>(null);

  const getReturnClass = (value: string) => {
    if (value.startsWith("-")) return styles.negative;
    if (value.startsWith("+")) return styles.positive;
    return "";
  };

  const performanceStatsWithClasses = performanceStats.map((stat) => ({
    ...stat,
    valueClassName: stat.id === "rateReturn" ? getReturnClass(stat.value) : "",
  }));

  const openModal = (investment: Investment) => {
    setSelectedInvestment(investment);
  };

  const closeModal = () => {
    setSelectedInvestment(null);
  };

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
                onClick={() => openModal(inv)}
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
                    <td className={styles.tableCell}>
                      {(index + 1).toString()}
                    </td>
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
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
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
