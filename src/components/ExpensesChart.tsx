import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { PieLabelRenderProps } from "recharts";

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

const expenseData = [
  { name: "Shopping", value: 4000 },
  { name: "Deposit", value: 1850 },
  { name: "Paypal", value: 2500 },
  { name: "Other", value: 5400 },
];
const COLORS = ["#343C6A", "#FC7900", "#1814F3", "#FA00FF"];

export default function ExpensesChart() {
  return (
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
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
