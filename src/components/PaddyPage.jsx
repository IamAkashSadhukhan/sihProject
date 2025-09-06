import React from "react";
import { IoCaretBack } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Mic } from "lucide-react";
import { GiWheat } from "react-icons/gi"; // wheat icon
import "./paddy.css";
const PaddyPage = () => {
  const items = ["EXPENSE", "DEMAND", "MARKET RATE", "FERTILIZERS", "PROCESS"];

  return (
    <div
      className="min-h-screen flex flex-col text-white relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/4d/6f/35/4d6f35dfceb55cbc29e1bd5dd100a968.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Top bar */}
      <div className="relative z-10 flex justify-between items-center px-4 md:px-6 py-4 bg-white/20 backdrop-blur-md">
        <IoCaretBack className="text-2xl cursor-pointer" />
        <h1 className="text-2xl md:text-3xl font-extrabold flex items-center gap-2">
          <GiWheat className="text-yellow-400 animate-swing" />
          PADDY
          <GiWheat className="text-yellow-400 animate-swing-delayed" />
        </h1>
        <FiMenu className="text-2xl cursor-pointer" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow gap-6 px-4 py-6 w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row w-full max-w-4xl items-center gap-3"
          >
            {/* Arrow label */}
            <div
              className="
                bg-green-600 text-white font-bold px-4 py-2 text-center rounded-lg
                w-full md:w-48 md:rounded-r-none md:rounded-l-lg
                md:[clip-path:polygon(0_0,85%_0,100%_50%,85%_100%,0_100%)]
              "
            >
              {item}
            </div>

            {/* Arrow-head + Bar */}
            <div className="flex-grow flex items-center gap-2 w-full md:w-auto">
              <div
                className="
                  w-8 h-8 bg-green-700
                  [clip-path:polygon(0_0,100%_50%,0_100%)]
                  mx-auto md:mx-0
                "
              ></div>
              <div className="flex-grow h-10 bg-green-200 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Right - Talk to Us */}
      <div className="relative z-10 w-full flex justify-end px-4 pb-4">
        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full shadow-lg transition">
          <Mic size={20} />
          TALK TO US
        </button>
      </div>
    </div>
  );
};

export default PaddyPage;
