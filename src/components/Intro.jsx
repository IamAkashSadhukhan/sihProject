import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Intro = ({ onFinish }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll("span");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      letters,
      { y: 120, opacity: 0, rotateX: 90 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.07,
      }
    )
      .to(
        letters,
        {
          color: "#a7f3d0",
          textShadow: "0px 0px 20px #34d399",
          duration: 0.6,
          stagger: 0.05,
          yoyo: true,
          repeat: 1,
        },
        "-=0.4"
      )
      .fromTo(
        taglineRef.current,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.8)" },
        "-=0.3"
      )
      .to(containerRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 1.2,
        delay: 2,
        onComplete: () => onFinish && onFinish(),
      });
  }, [onFinish]);

  const title = "Krishi Bondhu";

  return (
    <motion.div
      ref={containerRef}
      className="intro-container flex flex-col items-center justify-center h-screen text-white relative overflow-hidden px-4 sm:px-6"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background with moving gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-emerald-500 to-green-900 animate-[gradientMove_8s_ease_infinite]"></div>

      {/* Shiny particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-300 rounded-full opacity-70 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Glowing circle behind title */}
      <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-emerald-400 rounded-full mix-blend-overlay blur-3xl opacity-40 animate-pulse"></div>

      {/* Title */}
      <h1
        ref={titleRef}
        className="relative text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-widest text-center z-10"
      >
        {title.split("").map((char, index) => (
          <span key={index} className="inline-block">
            {char}
          </span>
        ))}
      </h1>

      {/* Tagline */}
      <p
        ref={taglineRef}
        className="mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl italic font-light text-center z-10"
      >
        Empowering Farmers, Enriching Futures
      </p>

      {/* Animations */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0% { transform: translateY(0px) scale(1); opacity: 0.7; }
          50% { transform: translateY(-25px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0px) scale(1); opacity: 0.7; }
        }
      `}</style>
    </motion.div>
  );
};

export default Intro;
