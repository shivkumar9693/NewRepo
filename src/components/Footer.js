import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 transition-colors duration-500 py-4 mt-10">
      <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">Shiv Kumar Thakur</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
