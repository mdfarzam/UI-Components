"use client";
import { useAnimate, motion, stagger } from "motion/react";
import { useEffect } from "react";

const MotionText = () => {
  const [scope, animate] = useAnimate();

  const text =
    "The winner takes it all, the loser has to fall. The winner takes it all, the loser has to fall. The winner takes it all, the loser has to fall. The winner takes it all, the loser has to fall.";

  useEffect(() => {
    startAnimating();
  }, []);

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.7,
        ease: "easeInOut",
        delay: stagger(0.05),
      }
    );
  };

  return (
    <div
      ref={scope}
      className="text-white max-w-3xl text-center font-bold text-3xl"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          style={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
          }}
          key={word + index}
          className="inline-block"
        >
          {word} &nbsp;
        </motion.span>
      ))}
    </div>
  );
};

// just rendering here
const AnimatedText = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900">
      <MotionText />
    </div>
  );
};

export default AnimatedText;
