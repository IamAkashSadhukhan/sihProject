import React from "react";
import { CloudRain, ThermometerSun, Droplets } from "lucide-react";
import { IoCaretBack } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Weather = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full text-white flex flex-col">
      {/* ✅ Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://v1.pinimg.com/videos/mc/720p/8e/45/13/8e4513e652976ceef87acfe0ccf41385.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Navbar */}
      <div className="w-full flex items-center backdrop-blur-md justify-between px-4 md:px-6 py-4 bg-black/40">
        <IoCaretBack
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h1 className="text-xl md:text-3xl font-bold tracking-wide text-center">
          WEATHER OVERVIEW
        </h1>
        <FiMenu className="text-2xl cursor-pointer" />
      </div>

      {/* ✅ Body */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 text-4xl font-extrabold">
            <span role="img" aria-label="weather">
              🌦️
            </span>
            <h1 className="uppercase">CHECK Weather</h1>
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
          <div className="flex flex-col items-center space-y-3">
            <CloudRain size={70} className="text-sky-400" />
            <h2 className="text-xl font-extrabold uppercase">Rainfall</h2>
            <p className="text-[#a6f78e] text-2xl font-bold">150-250 mm</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <ThermometerSun size={70} className="text-red-400" />
            <h2 className="text-xl font-extrabold uppercase">Temperature</h2>
            <p className="text-[#f6f86d] text-2xl font-bold">30-40° C</p>
          </div>
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
    </div>
  );
};

export default Weather;
