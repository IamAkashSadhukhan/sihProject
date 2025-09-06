import React from "react";
import { CloudRain, ThermometerSun, Droplets } from "lucide-react";

const Weather = () => {
  return (
    <div className="min-h-screen w-full bg-[#386122] flex flex-col items-center justify-center text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-4 text-4xl font-extrabold">
          <span role="img" aria-label="weather">
            🌦️
          </span>
          <h1 className="uppercase">Check Weather</h1>
          <span role="img" aria-label="weather">
            🌦️
          </span>
        </div>
        <p className="text-[#a6f78e] text-lg font-semibold mt-2">
          (According to the average of last 7 days)
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-[90%] max-w-6xl">
        {/* Rainfall */}
        <div className="flex flex-col items-center space-y-3">
          <CloudRain size={70} className="text-sky-400" />
          <h2 className="text-xl font-extrabold uppercase">Rainfall</h2>
          <p className="text-[#a6f78e] text-2xl font-bold">150-250 mm</p>
        </div>

        {/* Temperature */}
        <div className="flex flex-col items-center space-y-3">
          <ThermometerSun size={70} className="text-red-400" />
          <h2 className="text-xl font-extrabold uppercase">Temperature</h2>
          <p className="text-[#f6f86d] text-2xl font-bold">30-40° C</p>
        </div>

        {/* Humidity */}
        <div className="flex flex-col items-center space-y-3">
          <Droplets size={70} className="text-sky-300" />
          <h2 className="text-xl font-extrabold uppercase">Humidity</h2>
          <p className="text-[#6ce7f8] text-2xl font-bold">60-70%</p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-10">
        <button className="bg-lime-400 text-green-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-lime-500 transition">
          Check Forecast
        </button>
      </div>
    </div>
  );
};

export default Weather;
