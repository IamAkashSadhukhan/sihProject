import React from "react";
import { IoCaretBack } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full text-white flex flex-col relative"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/168351414/photo/green-cornfield-ready-for-harvest-late-afternoon-light-sunset-illinois.webp?a=1&b=1&s=612x612&w=0&k=20&c=T60Tymz8tcBTpp5OYPpg7gIQHGDJ-88vXxL7yx8I8eM=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay for readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Navbar */}
      <div className="w-full flex items-center backdrop-blur-md justify-between px-4 md:px-6 py-4 bg-white/30 relative">
        <IoCaretBack
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h1 className="text-xl md:text-3xl font-bold tracking-wide text-center">
          MARKET OVERVIEW
        </h1>
        <FiMenu className="text-2xl cursor-pointer" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 flex items-center gap-3 text-center leading-snug">
          📈 CHECK MARKET 📈
        </h1>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-2 gap-8 w-[90%] max-w-6xl">
          <div className="bg-green-800/90 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">MARKET PRICE</h2>
            <BarChart width={400} height={300} data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2d5a27" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Bar dataKey="value" fill="#ccff66" radius={[6, 6, 0, 0]} />
            </BarChart>
          </div>

          <div className="bg-green-800/90 rounded-2xl shadow-lg p-6 flex flex-col items-center">
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
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-6 w-[95%] md:hidden">
          <div className="bg-green-800/90 rounded-xl shadow-lg p-4 flex flex-col items-center">
            <h2 className="text-lg font-bold mb-2">MARKET PRICE</h2>
            <BarChart width={300} height={200} data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2d5a27" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Bar dataKey="value" fill="#ccff66" radius={[4, 4, 0, 0]} />
            </BarChart>
          </div>

          <div className="bg-green-800/90 rounded-xl shadow-lg p-4 flex flex-col items-center">
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
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
