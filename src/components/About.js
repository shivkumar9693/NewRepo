import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="p-6 text-center text-xl bg-white dark:bg-transparent text-gray-900 dark:text-white transition-colors duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
        I am a final-year Computer Science student and Full-Stack Developer with a strong grasp of programming, data structures, and backend architecture. I enjoy working on impactful real-world projects and am actively seeking innovative tech environments where I can learn and contribute using technologies like Node.js, Express, MongoDB, AWS, and more.
      </p>
    </motion.section>
  );
};

export default About;
