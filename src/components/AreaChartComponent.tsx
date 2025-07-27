import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const areaData = [
  { month: "Jul", balance: 200 },
  { month: "Aug", balance: 400 },
  { month: "Sep", balance: 600 },
  { month: "Oct", balance: 500 },
  { month: "Nov", balance: 700 },
  { month: "Dec", balance: 650 },
  { month: "Jan", balance: 800 },
];

export default function AreaChartComponent() {
  return (
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
  );
}
