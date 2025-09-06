import React from "react";

const Solution = () => {
  const items = [
    "DDT 50 mg",
    "", 
    "", 
    "", 
    ""
  ];

  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-center justify-center text-white">
      {/* Heading */}
      <div className="flex items-center mb-6">
        <img
          src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png" 
          alt="icon"
          className="w-10 h-10 mr-2"
        />
        <h1 className="text-3xl font-bold">SOLUTION</h1>
      </div>

      {/* Solution Items */}
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center">
            {/* Green box with arrow */}
            <div className="relative bg-green-600 w-16 h-12 flex-shrink-0 flex items-center justify-center">
              <div className="absolute right-[-15px] top-0 bottom-0 w-0 h-0 border-t-[24px] border-t-transparent border-l-[15px] border-l-green-600 border-b-[24px] border-b-transparent"></div>
            </div>

            {/* Text box */}
            <div className="border border-green-500 w-64 h-12 flex items-center px-4 bg-green-900">
              <span className="text-green-300 font-bold">{item}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solution;
