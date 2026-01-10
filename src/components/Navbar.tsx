"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className=" py-50 flex justify-center bg-white ">
      {/* 1. Added perspective to the container */}
      <nav
        className="relative flex p-2 bg-gray-200/50 rounded-full border border-gray-300/50"
        style={{ perspective: "1000px" }}
      >
        {navItems.map((item, idx) => (
          <Link
            key={item.title}
            href={item.href}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="relative px-6 py-2 text-sm font-medium transition-colors duration-300 no-underline"
            style={{
              transformStyle: "preserve-3d", // 2. Essential for child 3D positioning
              color: hovered === idx ? "white" : "#666",
            }}
          >
            <AnimatePresence>
              {hovered === idx && (
                <motion.div
                  layoutId="hover"
                  initial={{ opacity: 0, z: 0 }}
                  animate={{
                    opacity: 1,
                    z: 14, // 3. Lifts the pill toward the user
                  }}
                  exit={{ opacity: 0, z: 0 }}
                  className="absolute inset-0 bg-black rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                  transition={{
                    // duration: 0.2,
                    // ease: "easeInOut",
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.4,
                  }}
                />
              )}
            </AnimatePresence>

            {/* 4. The text moves further on the Z-axis than the pill to create depth */}
            <motion.span
              animate={{
                z: hovered === idx ? 50 : 0,
                scale: hovered === idx ? 1.1 : 1,
              }}
              className="relative z-10 block"
            >
              {item.title}
            </motion.span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
