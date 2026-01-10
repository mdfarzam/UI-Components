"use client";
import { Check } from "lucide-react";
import { motion, useAnimate } from "motion/react";

const SequenceMotion = () => {
  const [scope, animate] = useAnimate();

  const sequence = [
    [".text", { opacity: 0 }, { duration: 0.1 }],
    [".purchase-btn", { width: "0rem" }, { duration: 0.3 }],
    [
      ".spinning-circle",
      { opacity: 1, scale: [0, 0.9, 1, 0.9] },
      { duration: 1.8 },
    ],
    [
      ".check-icon",
      { opacity: 1, scale: [0, 1] },
      { duration: 0.1, at: "-1.5" },
    ],
  ];

  const startAnimating = async () => {
    await animate(sequence);
  };

  return (
    <div
      ref={scope}
      className="relative flex items-center justify-center h-screen w-full bg-neutral-900"
    >
      {/* Dark minimal button */}
      <motion.button
        onClick={startAnimating}
        className="purchase-btn h-20 rounded-3xl  bg-neutral-700 text-white font-medium cursor-pointer hover:bg-neutral-600 shadow-[inset_0_2px_8px_rgba(255,255,255,0.1)]"
        style={{ width: "12rem", height: "4rem" }}
      >
        <span className="text">Purchase Now</span>
      </motion.button>

      {/* Dark spinner */}
      <motion.div
        style={{
          opacity: 0,
          scale: 0,
        }}
        className="spinning-circle h-20 w-20 rounded-full bg-green-800 absolute m-auto"
      ></motion.div>

      {/* Check icon */}
      <motion.div
        style={{
          opacity: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="check-icon h-10 w-10 flex items-center justify-center z-50 text-gray-100"
      >
        <Check />
      </motion.div>
    </div>
  );
};

export default SequenceMotion;
