import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Intro = ({ onFinish }) => {
  const titleRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll("span");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate each letter of the title
    tl.fromTo(
      letters,
      { y: 120, opacity: 0, rotateX: 90 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.08,
      }
    )
      // Add a shiny sweep effect across letters
      .to(
        letters,
        {
          color: "#a7f3d0", // emerald-200
          duration: 0.6,
          stagger: 0.05,
          yoyo: true,
          repeat: 1,
        },
        "-=0.4"
      )
      // Animate tagline with scale + bounce
      .fromTo(
        taglineRef.current,
        { y: 50, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)" },
        "-=0.3"
      )
      // Hold, then fade out
      .to(".intro-container", {
        opacity: 0,
        scale: 1.05,
        duration: 1.5,
        delay: 1.8,
        onComplete: () => onFinish && onFinish(),
      });
  }, [onFinish]);

  const title = "Krishi  Bondhu";

  return (
    <motion.div
      className="intro-container flex flex-col items-center justify-center h-screen text-white relative overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-500 to-green-900 animate-[gradientMove_6s_ease_infinite]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-300 rounded-full opacity-70 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Glow circle effect */}
      <div className="absolute w-96 h-96 bg-green-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Title */}
      <h1
        ref={titleRef}
        className="relative text-6xl md:text-7xl font-extrabold tracking-wide z-10"
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
        className="mt-6 text-lg md:text-2xl italic font-light z-10"
      >
        Empowering Farmers, Enriching Futures
      </p>

      {/* Custom animations */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0% { transform: translateY(0px) scale(1); opacity: 0.7; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0px) scale(1); opacity: 0.7; }
        }
      `}</style>
    </motion.div>
  );
};

export default Intro;
