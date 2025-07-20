import React from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // 🟡 Requires Heroicons

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="bg-white dark:bg-gray-800 dark:text-white p-4 sticky top-0 z-50 shadow-md transition-colors duration-500"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={() => scrollTo("hero")} className="text-2xl font-bold">
          Shiv Kumar Thakur
        </button>

        <div className="flex items-center space-x-4">
          <button onClick={() => scrollTo("about")} className="hover:underline">
            About
          </button>
          <button onClick={() => scrollTo("skills")} className="hover:underline">
            Skills
          </button>
          <button onClick={() => scrollTo("projects")} className="hover:underline">
            Projects
          </button>
          <button onClick={() => scrollTo("experience")} className="hover:underline">
            Experience
          </button>
          <button onClick={() => scrollTo("education")} className="hover:underline">
            Education
          </button>
          <button onClick={() => scrollTo("contact")} className="hover:underline">
            Contact
          </button>

          {/* 🌗 Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:scale-110 transition"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
