import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", current: 20, prev: 15 },
  { name: "Feb", current: 25, prev: 18 },
  { name: "Mar", current: 18, prev: 20 },
  { name: "Apr", current: 30, prev: 25 },
  { name: "May", current: 28, prev: 22 },
];

 function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="current" stroke="#82ca9d" strokeWidth={2} />
        <Line type="monotone" dataKey="prev" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
export default RevenueChart;