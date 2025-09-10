import { GiPlantsAndAnimals } from "react-icons/gi";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { MdOutlineShowChart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MiddleButtons = () => {
  const navigate = useNavigate();
  const CheckWeather = ()=>{
    navigate('/Weather')
  }
  const CheckMarket = ()=>{
    navigate('/Market')
  }
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-10 lg:gap-20 my-6 md:my-8 px-4">
      {/* Soil Button */}
      <button  className="w-full sm:w-auto p-2 flex items-center justify-center sm:justify-start gap-2 rounded-full bg-white/20 backdrop-blur-md text-white font-extrabold text-lg md:text-xl hover:scale-105 transition duration-200">
        <GiPlantsAndAnimals className="text-green-400 w-8 h-8 md:w-10 md:h-10" />
        <span className="hidden xs:inline">CHECK SOIL</span>
        <span className="xs:hidden"> CHECK SOIL</span>
      </button>

      {/* Weather Button */}
      <button onClick={CheckWeather} className="w-full sm:w-auto p-2 flex items-center justify-center sm:justify-start gap-2 rounded-full bg-white/20 backdrop-blur-md text-white font-extrabold text-lg md:text-xl hover:scale-105 transition duration-200">
        <WiDaySunnyOvercast className="text-yellow-300 w-8 h-8 md:w-10 md:h-10" />
        <span className="hidden xs:inline">CHECK WEATHER</span>
        <span className="xs:hidden">CHECK WEATHER</span>
      </button>

      {/* Market Button */}
      <button onClick={CheckMarket} className="w-full sm:w-auto p-2 flex items-center justify-center sm:justify-start gap-2 rounded-full bg-white/20 backdrop-blur-md text-white font-extrabold text-lg md:text-xl hover:scale-105 transition duration-200">
        <MdOutlineShowChart className="text-red-400 w-8 h-8 md:w-10 md:h-10" />
        <span className="hidden xs:inline">CHECK MARKET</span>
        <span className="xs:hidden"> CHECK MARKET</span>
      </button>
    </div>
  );
};

export default MiddleButtons;
