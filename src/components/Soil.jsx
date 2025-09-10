import React from "react";
import { motion } from "framer-motion";
import { IoCaretBack } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

/**
 * SoilSummary
 * Props:
 *  - title (string)
 *  - subtitle (string)
 *  - ph (string)
 *  - nutrients (string)
 *  - organic (string)
 *  - onCheck (fn)
 */
const SoilSummary = ({
  title = "KRISHIBANDHU",
  subtitle = "(ACCORDING TO THE AVERAGE OF LAST 7 DAYS)",
  ph = "Between 6-8",
  nutrients = "HIGH",
  organic = "0.8%",
  onCheck = () => alert("Check soil details"),
}) => {
  const navigate = useNavigate(); // Hook inside component

  const handelBack = () => {
    navigate("/Page2");
  };

  return (
    <div className="min-h-screen flex flex-col bg-emerald-950 p-4 sm:p-6">
      {/* Top Navigation */}
      <div className="w-full h-16 md:h-20 flex bg-white/10 backdrop-blur-md items-center justify-between px-4 md:px-6 mb-6 md:mb-8">
        <div className="w-6 md:w-8">
          <IoCaretBack
            className="w-6 h-6 md:w-8 md:h-8 cursor-pointer text-white"
            onClick={handelBack}
          />
        </div>
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold tracking-wide text-center text-white">
          SOIL DETAILS
        </h1>
        <div className="w-6 md:w-8 flex items-center justify-center">
          <FiMenu className="text-xl md:text-2xl text-white" />
        </div>
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-5xl rounded-xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 shadow-2xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <div className="flex items-center gap-3">
            <LeafIcon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              {title}
            </h1>
          </div>

          <div className="w-24 sm:w-32 h-1 bg-emerald-400 mt-3 mb-2 rounded" />

          <p className="text-amber-200 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide">
            {subtitle}
          </p>
        </div>

        {/* Content Row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-6 sm:gap-8">
          <StatCard label="PH" value={ph} icon={FlaskIcon} />
          <VerticalDivider />
          <StatCard label="NUTRIENTS" value={nutrients} icon={BagIcon} />
          <VerticalDivider />
          <StatCard label="ORGANIC CARBON" value={organic} icon={ShovelIcon} />
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCheck}
            className="bg-emerald-300 text-emerald-900 font-extrabold px-8 sm:px-10 py-2 sm:py-3 rounded-full text-base sm:text-lg shadow-xl hover:shadow-2xl transition"
          >
            CHECK SOIL DETAILS
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default SoilSummary;

/* ----------------------
   Reusable components
   ---------------------- */
const StatCard = ({ label, value, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="flex-1 flex flex-col items-center text-center"
  >
    <div className="flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-emerald-700 rounded-lg shadow-lg">
      <Icon className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-amber-300" />
    </div>
    <div className="mt-4 sm:mt-5">
      <div className="text-white uppercase font-bold text-sm sm:text-lg md:text-xl tracking-wide">
        {label}
      </div>
      <div className="mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-300">
        {value}
      </div>
    </div>
  </motion.div>
);

const VerticalDivider = () => (
  <div className="hidden sm:flex items-center">
    <div className="h-24 sm:h-32 border-r border-emerald-600 mx-4 sm:mx-6" />
  </div>
);

/* ----------------------
   SVG Icons
   ---------------------- */
const LeafIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M6 3c4 0 6 3 6 7s-2 7-6 7M18 3c-4 0-6 3-6 7s2 7 6 7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FlaskIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M8 3h8M10 3v3m4-3v3M8.5 9.5v4.5c0 2 1.6 3.5 3.5 3.5s3.5-1.5 3.5-3.5V9.5L14 7V4h-4v3l-1.5 2.5z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const BagIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M8 7h8l1 12H7L8 7zM9 7a3 3 0 016 0"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="13" r="1" fill="currentColor" />
  </svg>
);

const ShovelIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M16 3l5 5-6 6-5-5 6-6zM11 8l5 5M6 18l6-6 3 3-6 6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
