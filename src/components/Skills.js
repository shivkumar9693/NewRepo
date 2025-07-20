import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Java", "JavaScript", "Node.js", "Express.js",
  "MongoDB", "SQL", "HTML", "Bootstrap",
  "Git", "REST APIs", "AWS Lambda", "DynamoDB"
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="p-6 text-center bg-white dark:bg-transparent text-gray-900 dark:text-white transition-colors duration-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded shadow hover:scale-105 transform transition-all duration-300 cursor-default"
            variants={skillVariants}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
