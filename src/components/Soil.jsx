import React from "react";
import { motion } from "framer-motion";

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
  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-950 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-5xl rounded-lg p-8 md:p-12 bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 shadow-2xl"
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-3">
            <LeafIcon className="w-10 h-10 text-amber-300" />
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              {title}
            </h1>
          </div>

          <div className="w-40 h-1 bg-emerald-400 mt-4 mb-3 rounded" />

          <p className="text-amber-200 text-sm md:text-base font-semibold uppercase tracking-wide">
            {subtitle}
          </p>
        </div>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8">
          <StatCard label="PH" value={ph} icon={FlaskIcon} />
          <VerticalDivider />
          <StatCard label="NUTRIENTS" value={nutrients} icon={BagIcon} />
          <VerticalDivider />
          <StatCard label="ORGANIC CARBON" value={organic} icon={ShovelIcon} />
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCheck}
            className="bg-emerald-300 text-emerald-900 font-extrabold px-12 py-3 rounded-full text-lg shadow-xl hover:shadow-2xl transition"
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
    <div className="flex items-center justify-center w-28 h-28 md:w-32 md:h-32 bg-emerald-700 rounded-lg shadow-lg">
      <Icon className="w-14 h-14 md:w-16 md:h-16 text-amber-300" />
    </div>
    <div className="mt-5">
      <div className="text-white uppercase font-bold text-lg md:text-xl tracking-wide">
        {label}
      </div>
      <div className="mt-2 text-2xl md:text-3xl font-extrabold text-amber-300">
        {value}
      </div>
    </div>
  </motion.div>
);

const VerticalDivider = () => (
  <div className="hidden md:flex items-center">
    <div className="h-32 border-r border-emerald-600 mx-6" />
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
