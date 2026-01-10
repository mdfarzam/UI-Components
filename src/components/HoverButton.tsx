"use client";
import React from "react";
import { motion } from "motion/react";

const HoverButton = () => {
  return (
    <div
      className="[perspective:1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-900 flex items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(
    circle at 0.5px 0.5px,
    rgba(6, 182, 212, 0.2) 0.5px,
    transparent 0
  )`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        whileHover={{
          rotate: 20,
          rotateX: 10,
          rotateY: 10,
        }}
        style={{
          translateZ: 100,
        }}
        className="group relative text-netural-400 px-10 py-4 rounded-lg bg-black"
      >
        Follow
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to transparent w-3/4 mx-auto h-px"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to transparent w-3/4 mx-auto h-[4px] blur-sm"></span>
      </motion.button>
    </div>
  );
};

export default HoverButton;
