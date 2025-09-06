import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const barData = [
  { name: "Grp 1", value: 10 },
  { name: "Grp 2", value: 4 },
  { name: "Grp 3", value: 2 },
  { name: "Grp 4", value: 1 },
];

const pieData = [
  { name: "Grp 1", value: 23.5 },
  { name: "Grp 2", value: 5 },
  { name: "Grp 3", value: 11 },
  { name: "Grp 4", value: 3 },
];

const COLORS = ["#ccff66", "#aaff77", "#55ff88", "#228833"];

const Market = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-green-950 text-white">
      {/* Title */}
      <h1 className="text-3xl font-extrabold mb-8 flex items-center gap-3 text-center">
        📈 CHECK MARKET 📈
      </h1>

      {/* Laptop/Desktop View */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] max-w-6xl">
        {/* Market Price (Bar Chart) */}
        <div className="bg-green-800 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">MARKET PRICE</h2>
          <BarChart width={400} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d5a27" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Bar dataKey="value" fill="#ccff66" radius={[6, 6, 0, 0]} />
          </BarChart>
        </div>

        {/* Market Demand (Pie Chart) */}
        <div className="bg-green-800 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">MARKET DEMAND</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col gap-6 w-[95%] md:hidden">
        {/* Market Price (Bar Chart) */}
        <div className="bg-green-800 rounded-xl shadow-lg p-4 flex flex-col items-center">
          <h2 className="text-lg font-bold mb-2">MARKET PRICE</h2>
          <BarChart width={300} height={200} data={barData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d5a27" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Bar dataKey="value" fill="#ccff66" radius={[4, 4, 0, 0]} />
          </BarChart>
        </div>

        {/* Market Demand (Pie Chart) */}
        <div className="bg-green-800 rounded-xl shadow-lg p-4 flex flex-col items-center">
          <h2 className="text-lg font-bold mb-2">MARKET DEMAND</h2>
          <PieChart width={300} height={250}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Market;
