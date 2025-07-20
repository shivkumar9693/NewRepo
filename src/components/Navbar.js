import React, { useState } from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu after click
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      className="bg-white dark:bg-gray-800 dark:text-white p-4 sticky top-0 z-50 shadow-md transition-colors duration-500"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Logo / Name */}
        <button onClick={() => scrollTo("hero")} className="text-2xl font-bold">
          Shiv Kumar Thakur
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="hover:underline transition-colors"
            >
              {link.name}
            </button>
          ))}

          {/* 🌗 Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:scale-110 transition"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          >
            {isDarkMode ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-800" />
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          >
            {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 px-4 pb-4 flex flex-col space-y-3 bg-white dark:bg-gray-800 shadow-md rounded-b">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left w-full hover:underline transition"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
