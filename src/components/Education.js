import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";

const education = [
  {
    title: "10th – Devasthali Vidyapeeth, Ballia",
    year: "2019",
    score: "91.6%",
    status: "done",
  },
  {
    title: "12th – Don Bosco Convent School",
    year: "2021",
    score: "82.8%",
    status: "done",
  },
  {
    title: "B.Tech in Computer Science – Parul Institute Of Technology",
    year: "2022–2026",
    score: "GPA: 8.29",
    status: "ongoing",
  },
];

const Education = () => {
  return (
    <motion.section
      id="education"
      className="p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-center mb-10">Education</h2>

      <div className="relative border-l-4 border-indigo-500 dark:border-indigo-400 max-w-3xl mx-auto pl-10 space-y-10">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-5 top-1">
              {edu.status === "done" ? (
                <FaCheckCircle className="text-green-500 text-xl" />
              ) : (
                <FaSpinner className="text-yellow-500 text-xl animate-spin" />
              )}
            </div>

            {/* Education Info */}
            <h3 className="text-lg font-semibold mb-1">{edu.title}</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">
              {edu.year}
            </span>
            <p className="text-gray-700 dark:text-gray-300">{edu.score}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
