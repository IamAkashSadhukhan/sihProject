import React from "react";
import { IoCaretBack } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Solution = () => {
  const navigate = useNavigate();

  const problems = [
    "Aphid Infestation",
    "Fungal Leaf Spot",
    "Powdery Mildew",
    "Nutrient Deficiency",
  ];

  const solutions = [
    "DDT 50 mg",
    "Neem Oil Spray (30ml/L water)",
    "Copper Sulfate 25 mg",
    "Organic Compost Mix",
    "Urea 20 gm per plant",
  ];

  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-center justify-start text-white px-4 py-8">
      {/* Top Navigation */}
      <div className="w-full flex items-center backdrop-blur-md justify-between px-4 md:px-6 py-4 bg-white/30 relative mb-6 md:mb-8">
        <IoCaretBack
          className="text-2xl cursor-pointer text-white"
          onClick={() => navigate("/DiseaseDetection")}
        />
        <h1 className="text-xl md:text-3xl font-bold tracking-wide text-center text-white">
          SOLUTION
        </h1>
        <FiMenu className="text-2xl cursor-pointer text-white" />
      </div>

      {/* Disease/Problem Section */}
      <div className="w-full max-w-lg mb-10">
        <h2 className="text-2xl font-bold mb-4 text-red-400">Disease / Problem</h2>
        <div className="space-y-4">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="flex items-center group transform transition duration-300 hover:scale-105"
            >
              {/* Red box with arrow */}
              <div className="relative bg-red-600 w-16 h-14 flex-shrink-0 flex items-center justify-center">
                <span className="font-bold text-lg">{idx + 1}</span>
                <div className="absolute right-[-15px] top-0 bottom-0 w-0 h-0 border-t-[28px] border-t-transparent border-l-[15px] border-l-red-600 border-b-[28px] border-b-transparent"></div>
              </div>

              {/* Text box */}
              <div className="border border-red-500 w-full h-14 flex items-center px-6 bg-red-800 group-hover:bg-red-700 transition">
                <span className="text-red-200 font-semibold">{problem}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Items */}
      <div className="space-y-6 w-full max-w-lg">
        {solutions.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center group transform transition duration-300 hover:scale-105"
          >
            {/* Green box with arrow */}
            <div className="relative bg-green-600 w-16 h-14 flex-shrink-0 flex items-center justify-center">
              <span className="font-bold text-lg">{idx + 1}</span>
              <div className="absolute right-[-15px] top-0 bottom-0 w-0 h-0 border-t-[28px] border-t-transparent border-l-[15px] border-l-green-600 border-b-[28px] border-b-transparent"></div>
            </div>

            {/* Text box */}
            <div className="border border-green-500 w-full h-14 flex items-center px-6 bg-green-800 group-hover:bg-green-700 transition">
              <span className="text-green-200 font-semibold">{item}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solution;
