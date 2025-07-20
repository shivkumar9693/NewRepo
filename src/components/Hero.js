import React from "react";
import { motion } from "framer-motion";

const text = {
  title: "Hi, I'm Shiv Kumar Thakur",
  subtitle:
    "Full-Stack Developer | Final Year CSE Student | Backend Specialist with Node.js, Express & MongoDB",
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
    },
  }),
};

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center px-6 gap-10 transition-colors duration-500 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black">
      
      {/* Animated Profile Image */}
      <motion.img
        src="/shiv-profile.jpg"
        alt="Shiv Kumar Thakur"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.6 }}
      />

      {/* Text Content */}
      <div>
        {/* Animated Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          {text.title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Animated Subtitle */}
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
          {text.subtitle.split(" ").map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </p>

        {/* Social and Resume Links */}
        <div className="flex gap-6 mt-6 flex-wrap justify-center md:justify-start">
          <a
            href="https://github.com/shivkumar9693"
            className="text-blue-700 dark:text-white hover:text-blue-400"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shiv-kumar-thakur-200284272/"
            className="text-blue-700 dark:text-white hover:text-blue-400"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/shivkumartces0/"
            className="text-green-700 dark:text-white hover:text-green-400"
            target="_blank"
            rel="noreferrer"
          >
            GeeksforGeeks
          </a>
          <a
            href="/Shiv_Kumar_Thakur_Resume.pdf"
            download
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
