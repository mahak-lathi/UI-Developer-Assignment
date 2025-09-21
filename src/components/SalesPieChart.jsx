import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Direct", value: 300.36 },
  { name: "Affiliate", value: 135.25 },
  { name: "Sponsored", value: 154.02 },
  { name: "E-mail", value: 48.96 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

 function SalesPieChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default SalesPieChart;
