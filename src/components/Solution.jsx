import React from "react";

const Solution = () => {
  const items = [
    "DDT 50 mg",
    "Neem Oil Spray (30ml/L water)",
    "Copper Sulfate 25 mg",
    "Organic Compost Mix",
    "Urea 20 gm per plant",
  ];

  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-center justify-center text-white px-4">
      {/* Heading */}
      <div className="flex items-center mb-8">
        <img
          src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png"
          alt="icon"
          className="w-10 h-10 mr-3"
        />
        <h1 className="text-4xl font-extrabold tracking-wide">SOLUTION</h1>
      </div>

      {/* Solution Items */}
      <div className="space-y-6 w-full max-w-lg">
        {items.map((item, idx) => (
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
