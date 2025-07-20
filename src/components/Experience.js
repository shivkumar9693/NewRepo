import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="p-6 bg-white dark:bg-transparent text-gray-900 dark:text-white transition-colors duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>

      <div className="relative border-l-4 border-blue-500 dark:border-blue-400 max-w-3xl mx-auto pl-10 space-y-16">
        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[26px] top-2">
            <FaCode className="text-blue-500 dark:text-blue-400 text-xl bg-white dark:bg-gray-900 rounded-full p-1 shadow-lg" />
          </div>

          {/* Experience Content */}
          <h3 className="text-xl font-semibold mb-1">Backend Developer</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 block mb-3">
            HertzworkZ • Jan 2025 – Apr 2025
          </span>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Developed backend services using <strong>Node.js</strong>, <strong>AWS Lambda</strong>, and <strong>DynamoDB</strong>. Focused on scalable microservice architecture, REST APIs, and robust data handling to empower seamless frontend integration.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
