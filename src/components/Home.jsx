import React, { useState, useEffect } from "react";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoLanguageOutline, IoLocationSharp } from "react-icons/io5";
import { PiPlantFill } from "react-icons/pi";
import { LuMessageCircle } from "react-icons/lu";
import { FcSearch } from "react-icons/fc";
import { AiFillAudio } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";

// Available languages with native names
const languages = [
  "English",
  "हिन्दी",
  "मराठी",
  "ગુજરાતી",
  "ਪੰਜਾਬੀ",
  "தமிழ்",
  "తెలుగు",
  "ಕನ್ನಡ",
  "বাংলা",
  "ଓଡ଼ିଆ",
  "اردو",
];

const Home = () => {
  const navigate = useNavigate();

  // 🌍 States
  const [currentImage, setCurrentImage] = useState(0);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const [searchInput, setSearchInput] = useState(""); // input state

  // background images list
  const images = [
    "https://media.istockphoto.com/id/1320570548/photo/peanuts-plantation-in-countryside-thailand-near-mountain.jpg?s=612x612&w=0&k=20&c=Rth_YqBkOw4_GA0Ed-zrENSelOnvIopyTH-WYbclrCg=",
    "https://media.istockphoto.com/id/503646746/photo/farmer-spreading-fertilizer-in-the-field-wheat.jpg?s=612x612&w=0&k=20&c=Lgxsjbz0jaYyQrvfzhyAsW2zELtshRP4AtLzkpmcLiE=",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 sec
    return () => clearInterval(interval);
  }, [images.length]);

  const handelSubmit = (e) => {
    e.preventDefault();
    navigate("/Page2");
  };

  const DiseaseDetection = () => {
    navigate("/DiseaseDetection");
  };

  const toggleLangDropdown = () => {
    setShowLangDropdown(!showLangDropdown);
  };

  const selectLanguage = (lang) => {
    setSelectedLang(lang);
    setShowLangDropdown(false);
  };

  // 📍 Detect Location
const detectLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();

          // Just pick city/town/village
          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.state || // fallback to state
            "Unknown";

          setSearchInput(city); // directly fill city name
        } catch (err) {
          console.error("Error fetching location:", err);
          setSearchInput("Unknown");
        }
      },
      (error) => {
        console.error("Error detecting location:", error);
        alert("Unable to detect location. Please allow location access.");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};



  return (
    <>
      {/* Desktop / Laptop View */}
      <div
        className="hidden md:block h-screen w-screen relative transition-all duration-700"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Navbar */}
        <div className="bg-[rgba(139,139,139,0.5)] w-full h-12 flex items-center justify-between px-6 relative">
          <div className="flex items-center gap-3">
            <PiPlantFill size={34} className="text-green-700" />
            <h1 className="text-2xl text-white font-bold">Krishi Bondhu</h1>
          </div>
          <div className="flex items-center gap-6">
            {/* Language Selector */}
            <div className="relative">
              <button
                className="flex items-center gap-2 text-white"
                onClick={toggleLangDropdown}
              >
                <IoLanguageOutline size={28} />
                <span>{selectedLang}</span>
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg p-2 max-h-36 overflow-y-auto">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className={`px-3 py-2 cursor-pointer rounded hover:bg-green-100 ${
                        selectedLang === lang ? "bg-green-200" : ""
                      }`}
                      onClick={() => selectLanguage(lang)}
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <CiMenuBurger size={30} className="text-white cursor-pointer" />
            <RiAccountCircleFill
              size={30}
              className="text-white cursor-pointer"
            />
          </div>
        </div>

        {/* Search */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <form
            className="relative w-[40rem] max-w-[90%]"
            onSubmit={handelSubmit}
          >
            <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-black" />
            <input
              type="text"
              placeholder="Enter location to get crop recommendation"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full h-[3rem] pl-12 pr-12 rounded-full bg-white text-gray-600 placeholder:font-semibold outline-none shadow-md"
            />
            <IoLocationSharp
              size={30}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 cursor-pointer"
              onClick={detectLocation}
            />
          </form>
        </div>

        {/* Watermark */}
        <div className="bg-[#325E24]/80 mx-auto w-[70%] h-[20%] mt-[25%] flex items-center justify-around rounded-lg p-6">
          <div className="flex flex-col items-center gap-2">
            <LuMessageCircle size={50} className="text-white" />
            <h1 className="text-white text-lg font-bold uppercase text-center">
              Message Your Query
            </h1>
          </div>
          <div className="h-16 border-l border-white"></div>
          <div
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={DiseaseDetection}
          >
            <FcSearch size={50} />
            <h1 className="text-white text-lg font-bold uppercase text-center">
              Disease Detection
            </h1>
          </div>
          <div className="h-16 border-l border-white"></div>
          <div className="flex flex-col items-center gap-2">
            <AiFillAudio size={50} className="text-white" />
            <h1 className="text-white text-lg font-bold uppercase text-center">
              Talk To Us Anytime
            </h1>
          </div>
        </div>

        {/* Marquee */}
        <div className="w-full bg-black/60 flex items-center absolute bottom-0 h-16">
          <Marquee gradient={false} speed={50} pauseOnHover loop={0}>
            <span className="px-6 text-white whitespace-nowrap text-sm sm:text-base">
              🌾 Welcome to Khet Samadhan – Your smart farming companion! 🌿
            </span>
            <span className="px-6 text-white whitespace-nowrap text-sm sm:text-base">
              🌦 Get real-time weather updates & plan your crops better. ☀️🌧
            </span>
            <span className="px-6 text-white whitespace-nowrap text-sm sm:text-base">
              🧑‍🌾 Know which fertilizer to use for higher yield. 🌱
            </span>
            <span className="px-6 text-white whitespace-nowrap text-sm sm:text-base">
              📊 Access mandi prices across India – Sell at the right time! 💰
            </span>
          </Marquee>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className="block md:hidden h-screen w-screen flex flex-col"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Mobile Navbar */}
        <div className="flex items-center justify-between px-4 py-2 bg-black/50 relative">
          <div className="flex items-center gap-2">
            <PiPlantFill size={28} className="text-white" />
            <h1 className="text-lg font-bold text-white">Khet Samadhan</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <IoLanguageOutline
                size={26}
                className="text-white cursor-pointer"
                onClick={toggleLangDropdown}
              />
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg p-2 max-h-36 overflow-y-auto z-10">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className={`px-3 py-2 cursor-pointer rounded hover:bg-green-100 ${
                        selectedLang === lang ? "bg-green-200" : ""
                      }`}
                      onClick={() => selectLanguage(lang)}
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <CiMenuBurger size={26} className="text-white" />
          </div>
        </div>

        {/* Marquee below Navbar */}
        <div className="bg-black/70 py-2">
          <Marquee gradient={false} speed={40} pauseOnHover loop={0}>
            <span className="px-4 text-white text-xs whitespace-nowrap">
              🌾 Welcome to Khet Samadhan – Smart farming companion!
            </span>
            <span className="px-4 text-white text-xs whitespace-nowrap">
              🌦 Real-time weather updates for farmers ☀️🌧
            </span>
            <span className="px-4 text-white text-xs whitespace-nowrap">
              🧑‍🌾 Fertilizer tips for higher yield 🌱
            </span>
          </Marquee>
        </div>

        {/* Middle Search */}
        <div className="flex-1 flex items-center justify-center px-4">
          <form className="relative w-full max-w-md" onSubmit={handelSubmit}>
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
            <input
              type="text"
              placeholder="Search crops..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full h-10 pl-10 pr-10 rounded-full bg-white text-gray-700 outline-none shadow-md"
            />
            <IoLocationSharp
              size={22}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 cursor-pointer"
              onClick={detectLocation}
            />
          </form>
        </div>

        {/* Bottom Buttons */}
        <div className="px-4 py-4 flex items-center justify-around bg-[#34591E]">
          <div className="flex flex-col items-center gap-1">
            <LuMessageCircle size={32} color="white" />
            <h1 className="text-white text-xs font-semibold">Message</h1>
          </div>
          <div
            className="flex flex-col items-center gap-1 cursor-pointer"
            onClick={DiseaseDetection}
          >
            <CiSearch size={32} color="white" />
            <h1 className="text-white text-xs font-semibold">Detection</h1>
          </div>
          <div className="flex flex-col items-center gap-1">
            <AiFillAudio size={32} color="white" />
            <h1 className="text-white text-xs font-semibold">Talk</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
