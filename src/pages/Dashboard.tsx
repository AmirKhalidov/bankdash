import { useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import styles from "../styles/Dashboard.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCreditCardData, fetchTransactions } from "../redux/operations";
import Spinner from "../components/Spinner";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { AreaChart, Area } from "recharts";
import type { PieLabelRenderProps } from "recharts";

export default function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const { cards, loading } = useSelector(
    (state: RootState) => state.creditCards
  );
  const { transactions } = useSelector(
    (state: RootState) => state.transactions
  );

  // const expenses = transactions?.filter((tx) => tx.amount < 0);

  // const fetchedExpenseData = Object.values(
  //   expenses.reduce(
  //     (acc: { [key: string]: { name: string; value: number } }, exp) => {
  //       const key = exp.type;
  //       if (!acc[key]) {
  //         acc[key] = { name: key, value: Math.abs(exp.amount) };
  //       } else {
  //         acc[key].value += Math.abs(exp.amount);
  //       }
  //       return acc;
  //     },
  //     {}
  //   )
  // );

  const expenseData = [
    { name: "Shopping", value: 4000 },
    { name: "Deposit", value: 1850 },
    { name: "Paypal", value: 2500 },
    { name: "Other", value: 5400 },
  ];
  const COLORS = ["#343C6A", "#FC7900", "#1814F3", "#FA00FF"];

  const areaData = [
    { month: "Jul", balance: 200 },
    { month: "Aug", balance: 400 },
    { month: "Sep", balance: 600 },
    { month: "Oct", balance: 500 },
    { month: "Nov", balance: 700 },
    { month: "Dec", balance: 650 },
    { month: "Jan", balance: 800 },
  ];

  const renderCustomLabel = (props: PieLabelRenderProps) => {
    const {
      cx = 0,
      cy = 0,
      midAngle = 0,
      innerRadius = 0,
      outerRadius = 0,
      percent = 0,
      index = 0,
    } = props;

    const RADIAN = Math.PI / 180;
    const radius =
      Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.7;
    const x = Number(cx) + radius * Math.cos(-midAngle * RADIAN);
    const y = Number(cy) + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={16}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
        <tspan x={x} y={y + 16} fontSize={13} fontWeight="bold">
          {expenseData[index]?.name}
        </tspan>
      </text>
    );
  };

  const barData = [
    { day: "Sat", Deposit: 1200, Withdraw: 800 },
    { day: "Sun", Deposit: 900, Withdraw: 700 },
    { day: "Mon", Deposit: 1400, Withdraw: 1100 },
    { day: "Tue", Deposit: 1000, Withdraw: 600 },
    { day: "Wed", Deposit: 1700, Withdraw: 900 },
    { day: "Thu", Deposit: 1300, Withdraw: 1200 },
    { day: "Fri", Deposit: 1600, Withdraw: 1000 },
  ];

  useEffect(() => {
    dispatch(fetchCreditCardData({ id: 1 }));
    dispatch(fetchTransactions());
  }, [dispatch]);

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
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={barData}>
                    <CartesianGrid
                      vertical={false}
                      strokeDasharray="0"
                      strokeWidth={0.3}
                    />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend
                      verticalAlign="top"
                      align="right"
                      iconType="circle"
                      content={({ payload }) => (
                        <ul
                          style={{
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: 24,
                            marginBottom: "20px",
                          }}
                        >
                          {payload?.map((entry) => (
                            <li
                              key={entry.value}
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  width: 14,
                                  height: 14,
                                  borderRadius: "50%",
                                  background: entry.color,
                                  marginRight: 8,
                                }}
                              />
                              <span style={{ fontWeight: 500 }}>
                                {entry.value}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    />
                    <Bar
                      dataKey="Deposit"
                      fill="#1814F3"
                      barSize={14}
                      radius={[8, 8, 8, 8]}
                    />
                    <Bar
                      dataKey="Withdraw"
                      fill="#16DBCC"
                      barSize={14}
                      radius={[8, 8, 8, 8]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className={styles.statistics}>
              <div className={styles.statisticsTitle}>
                <h3>Expense Statistics</h3>
              </div>
              <div className={styles.statisticsBox}>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={expenseData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={125}
                      innerRadius={0}
                      paddingAngle={0}
                      strokeWidth={8}
                      label={renderCustomLabel}
                      labelLine={false}
                    >
                      {expenseData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
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
                <ResponsiveContainer width="100%" height={"100%"}>
                  <AreaChart data={areaData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 800]} tickCount={5} />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="balance"
                      stroke="#1814F3"
                      strokeWidth={3}
                      fill="#2D60FF"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
