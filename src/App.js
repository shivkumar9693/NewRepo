import React, { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useDarkMode } from "usehooks-ts"; // npm install usehooks-ts

function App() {
  const { isDarkMode, toggle } = useDarkMode();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen scroll-smooth transition-colors duration-500">
      <Navbar toggleDarkMode={toggle} isDarkMode={isDarkMode} />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
