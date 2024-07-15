import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function DemoChart() {
  const data = [
    { name: "1", value: 1500 },
    { name: "2", value: 1800 },
    { name: "3", value: 2400 },
    { name: "4", value: 4662 },
    { name: "5", value: 6132 },
    { name: "15", value: 9517 },
  ];

  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
}

export default DemoChart;
