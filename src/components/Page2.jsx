import React, { useState } from "react";
import { IoCaretBack } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { ChevronDown, ChevronUp } from "lucide-react";
import MiddleButtons from "./MiddleButton";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handelBack = ()=>{
    navigate("/");
  }

  const data = [
    { name: "Paddy", expense: "₹2000", profit: "₹5000" },
    { name: "Barley", expense: "₹1500", profit: "₹4000" },
    { name: "Wheat", expense: "₹2500", profit: "₹6000" },
  ];

  return (
    <div
      className="min-h-screen text-white flex flex-col relative"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/2197365034/photo/narrow-pathway-through-the-center-of-green-rice-fields.jpg?s=612x612&w=0&k=20&c=w9ne1-BR9X71u7TEuUf6NOSaxgQYKFJcZWIdrESMmlI=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative flex flex-col flex-1">
        {/* Top Bar */}
        <div className="w-full h-16 md:h-20 flex bg-white/10 backdrop-blur-md items-center justify-between px-4 md:px-6">
          <div className="w-6 md:w-8">
            <IoCaretBack className="w-6 h-6 md:w-8 md:h-8"  onClick={handelBack}/>
          </div>
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold tracking-wide text-center">
            CROP CHART
          </h1>
          <div className="w-6 md:w-8 flex items-center justify-center">
            <FiMenu className="text-xl md:text-2xl" />
          </div>
        </div>

        {/* Heading + Subheading in one box */}
        <div className="flex justify-center mt-4 md:mt-6 px-4">
          <div className="bg-white/20 backdrop-blur-md rounded-xl px-4 md:px-8 py-3 text-center max-w-2xl">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold underline">
              YOUR CROP CHART IS READY!
            </h1>
            <p className="text-sm md:text-base mt-1">
              (click on the crop to know more)
            </p>
          </div>
        </div>

        <MiddleButtons />

        {/* Table Section */}
        <div className="flex justify-center px-4 mb-6">
          <div className="w-full overflow-x-auto rounded-lg shadow-lg max-w-4xl">
            <table className="w-full bg-white/90 text-black min-w-[300px]">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="p-2 md:p-3 text-center">Name</th>
                  <th className="p-2 md:p-3 text-center">Expense</th>
                  <th className="p-2 md:p-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      Profit
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-lg"
                      >
                        {isOpen ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((crop, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-300 hover:bg-gray-100"
                  >
                    <td className="p-2 md:p-3 text-center">{crop.name}</td>
                    <td className="p-2 md:p-3 text-center">{crop.expense}</td>
                    <td className="p-2 md:p-3 text-center">{crop.profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
