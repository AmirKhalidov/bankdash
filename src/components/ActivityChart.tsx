import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const barData = [
  { day: "Sat", Deposit: 1200, Withdraw: 800 },
  { day: "Sun", Deposit: 900, Withdraw: 700 },
  { day: "Mon", Deposit: 1400, Withdraw: 1100 },
  { day: "Tue", Deposit: 1000, Withdraw: 600 },
  { day: "Wed", Deposit: 1700, Withdraw: 900 },
  { day: "Thu", Deposit: 1300, Withdraw: 1200 },
  { day: "Fri", Deposit: 1600, Withdraw: 1000 },
];

export default function ActivityChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={barData}>
        <CartesianGrid vertical={false} strokeDasharray="0" strokeWidth={0.3} />
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
                  <span style={{ fontWeight: 500 }}>{entry.value}</span>
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
  );
}
