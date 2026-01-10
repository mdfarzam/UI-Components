"use client";
import { useState } from "react";
import { motion } from "motion/react";
import {
  HomeIcon,
  BarChartIcon,
  UsersIcon,
  SettingsIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Analytics", href: "/analytics", icon: BarChartIcon },
    { name: "Users", href: "/users", icon: UsersIcon },
    { name: "Settings", href: "/settings", icon: SettingsIcon },
  ];

  return (
    <motion.nav
      animate={{ width: isOpen ? "16rem" : "4.5rem" }}
      transition={{ duration: 0.4 }}
      className="h-screen bg-white border-r border-neutral-200 shadow-sm flex flex-col overflow-hidden text-black"
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        {isOpen && (
          <h2 className="text-xl font-semibold text-black">Dashboard</h2>
        )}

        <button
          onClick={() => setIsOpen((i) => !i)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </button>
      </div>

      {/* Links */}
      <nav className="px-2 flex-1">
        <ul className="space-y-2">
          {links.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <a
                href={href}
                title={!isOpen ? name : undefined}
                className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <Icon className="w-5 h-5" />
                {isOpen && <span>{name}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.nav>
  );
};
